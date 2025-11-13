import React, { useCallback, useState } from 'react'

const useToggleHook = (initialValue) => {
    const [state,setState]=useState(initialValue);
    const toggle=useCallback(
         () => setState(v => !v),
    [])
    return [toggle,state];
}

export default useToggleHook