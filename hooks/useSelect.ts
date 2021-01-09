import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { shuffle } from 'lodash'
import members from "../config/members";

export const CARD_NUM = 3

const useSelect = () => {
  const [val, setVal] = useState([])

  /** カードを登録する */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      if (val.length >= CARD_NUM) return
      setVal([...val, e.target.value]);
    }
  };

  /** カードをリセットする */
  const handleReset = useCallback(() => {
    setVal([])
  },[])

  /** カードをランダムで登録する */
  const handleRandom = useCallback(() => {
    handleReset()

    const selectedArray = shuffle(members).slice(1, CARD_NUM + 1)
    const selectedValue = selectedArray.map((item) => {
      return item.name
    })
    setVal(selectedValue)

  },[])

  return { val, setVal, handleChange, handleReset, handleRandom }
}

export default useSelect
