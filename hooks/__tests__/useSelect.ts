import { act, renderHook, RenderResult,  } from "@testing-library/react-hooks"
import useSelect, { UseSelectReturnType } from "../useSelect"

const mockDispatch = jest.fn();

describe('useSelect', () => {
  let result: RenderResult<UseSelectReturnType>

  // セットアップ
  beforeEach(() => {
    result = renderHook(() => useSelect()).result
  })

  // 破棄
  afterEach(() => {
    mockDispatch.mockClear();
  });

  test('selectedMember の初期値は空配列である', () => {
    expect(result.current.selectedMember).toHaveLength(0);
  });

  test('ランダムで登録したら、selectedMember に3枚登録される', () => {
    expect(result.current.selectedMember).toHaveLength(0);

    act(() => {
      result.current.handleRandom()
    })

    expect(result.current.selectedMember).toHaveLength(3);
  });

  test('リセットしたら、selectedMember が空になる', () => {
    expect(result.current.selectedMember).toHaveLength(0);

    act(() => {
      result.current.handleRandom()
      result.current.handleReset()
    })

    expect(result.current.selectedMember).toHaveLength(0);
  });

  test('送信したら、selectedMember が空になる', () => {
    expect(result.current.selectedMember).toHaveLength(0);

    act(() => {
      result.current.handleRandom()
      result.current.handleSend()
    })

    expect(result.current.selectedMember).toHaveLength(0);
  });
});
