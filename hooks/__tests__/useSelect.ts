import { renderHook,  } from "@testing-library/react-hooks"
import useSelect, { UseSelectReturnType } from "../useSelect"

describe('useSelect', () => {
  const { result } = renderHook(() => useSelect())
  test('selectedMember の初期値は空配列である', () => {
    expect(result.current.selectedMember).toStrictEqual([]);
  });

  test.todo('カードを選択したら、selectedMember に1枚登録される')
  test.todo('ランダムで登録したら、selectedMember に3枚登録される')
  test.todo('リセットしたら、selectedMember に3枚登録される')
});
