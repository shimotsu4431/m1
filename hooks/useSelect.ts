import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { shuffle } from 'lodash'
import members from "../config/members";
import { member } from "../components/CardList";

export const CARD_NUM = 3

const useSelect = () => {
  const [val, setVal] = useState<member[]>([])

  /** カードを登録する */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idArray = val.map((item) => JSON.stringify(item.id))

    if (idArray.includes(e.target.id)) {
      setVal(val.filter(item => JSON.stringify(item.id) !== e.target.id));
    } else {
      if (val.length >= CARD_NUM) return

      const selected = members.filter(item => e.target.id === JSON.stringify(item.id))[0]
      setVal([...val, selected]);
    }
  };

  /** カードをリセットする */
  const handleReset = useCallback(() => {
    setVal([])
  },[])

  /** カードをランダムで登録する */
  const handleRandom = useCallback(() => {
    handleReset()

    const shuffledArray = shuffle(members).slice(1, CARD_NUM + 1)
    setVal(shuffledArray)

  },[])

  return { val, setVal, handleChange, handleReset, handleRandom }
}

export default useSelect
