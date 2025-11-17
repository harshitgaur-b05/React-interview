import { useState, useEffect, useRef } from 'react';

// ═══════════════════════════════════════════════════════════════
// METHOD 1: SCROLL EVENT LISTENER (Old School)
// ═══════════════════════════════════════════════════════════════

 export default function useInfiniteScrollWithScrollEvent() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [scrollCount, setScrollCount] = useState(0);
    const [data,setData]=useState(null)


    function fetchFunction(page,limit){
      fetch(`https://api.example.com/items?limit=${limit}&page=${page}`).then(res=>res.json()).then(data=>setData(data))
    }

    // Load more function
    const loadMore = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        const newItems = await fetchFunction(page,10);

        if (newItems.length === 0) {
            setHasMore(false);
        } else {
            setItems(prev => [...prev, ...newItems]);
            setPage(prev => prev + 1);
        }
        setLoading(false);
    };

    // Scroll event handler
    const handleScroll = () => {
        // one scroll moew
        setScrollCount(prev => prev + 1);

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        //rH=sH-(cH+st)
        //200 =sH -(CH +ST)
        //
        if (clientHeight + scrollTop >= scrollHeight - 200) {
            loadMore();
        }
    }

    // Set up scroll listener
    useEffect(() => {
        loadMore(); // Initial load

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore, page]); // Re-attach when these change

    return { items, loading, hasMore, scrollCount };
}