import { ChangeEvent, useCallback, useEffect, useState } from "react";

const useSelect = () => {
  const [val, setVal] = useState([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      if (val.length >= 3) return
      setVal([...val, e.target.value]);
    }
  };

  const handleReset = useCallback(() => {
    setVal([])
  },[])

  return { val, setVal, handleChange, handleReset }
}

export default useSelect
