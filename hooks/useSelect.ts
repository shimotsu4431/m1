import { useEffect, useState } from "react";

const useSelect = () => {
  const [val, setVal] = useState(["AAA"])

  const handleChange = (e: HTMLInputElement) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }
  };

  console.log(val)

  return { val, handleChange }
}

export default useSelect
