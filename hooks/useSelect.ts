import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { shuffle } from 'lodash'
import members from "../config/members";
import { member } from "../components/CardList";

export const CARD_NUM = 3

const useSelect = () => {
  const [selectedMember, setSelectedMember] = useState<member[]>([])

  /** カードを登録する */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idArray = selectedMember.map((item) => JSON.stringify(item.id))

    if (idArray.includes(e.target.id)) {
      setSelectedMember(selectedMember.filter(item => JSON.stringify(item.id) !== e.target.id));
    } else {
      if (selectedMember.length >= CARD_NUM) return

      const selected = members.filter(item => e.target.id === JSON.stringify(item.id))[0]
      setSelectedMember([...selectedMember, selected]);
    }
  };

  /** カードをリセットする */
  const handleReset = useCallback(() => {
    setSelectedMember([])
  },[])

  /** カードをランダムで登録する */
  const handleRandom = useCallback(() => {
    handleReset()

    const shuffledArray = shuffle(members).slice(1, CARD_NUM + 1)
    setSelectedMember(shuffledArray)

  },[])

  return { selectedMember, setSelectedMember, handleChange, handleReset, handleRandom }
}

export default useSelect
