import { useEffect, useState } from "react";

const useSelect = () => {
  const [val, setVal] = useState([])

  const handleChange = (e: HTMLInputElement) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      if (val.length >= 3) return
      setVal([...val, e.target.value]);
    }
  };

  return { val, setVal, handleChange }
}

export default useSelect
