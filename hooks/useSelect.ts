import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { shuffle } from 'lodash'
import members from "../config/members";

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

  const handleRandom = useCallback(() => {
    handleReset()

    const selectedArray = shuffle(members).slice(1, 4)
    const selectedValue = selectedArray.map((item) => {
      return item.name
    })
    setVal(selectedValue)

  },[])

  return { val, setVal, handleChange, handleReset, handleRandom }
}

export default useSelect
