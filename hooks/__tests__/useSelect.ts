import { act, renderHook, RenderResult,  } from "@testing-library/react-hooks"
import useSelect, { UseSelectReturnType } from "../useSelect"

const mockDispatch = jest.fn();

describe('useSelect', () => {
  let result: RenderResult<UseSelectReturnType>

  beforeEach(() => {
    result = renderHook(() => useSelect()).result
  })
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
});
