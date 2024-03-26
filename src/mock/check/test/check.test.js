const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  //초기화
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  // true여야 할때
  it("true이고 onSuccess를 호출", () => {
    check(() => true, onSuccess, onFail);
    //calls는 호출을 의미함 [0]첫번째로 호출된 함수의 [0]첫번째 인자를 뜻함
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    //위에께 불편하니까 간편한 방법
    expect(onSuccess).toHaveBeenCalledWith("yes");

    //호출된 횟수(길이)가 한번은 호출해야한다.
    // expect(onSuccess.mock.calls.length).toBe(1);
    // 몇번 호출됐는지 동일하게 사용할수 있는 api
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // onFail은 한번이라도 호출되면 안되니까 0으로 설정
    expect(onFail.mock.calls.length).toBe(0);
    // 이것도 위에 방법을 개선한 코드
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  // fail 일때
  it("fali이고 onFail 호출해야할 때", () => {
    check(() => !true, onSuccess, onFail);

    // 호출되어야하는 횟수 확인하기
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);

    //어떤거랑 호출되어야하는지
    expect(onFail).toHaveBeenCalledWith("no");
    // 실패했을때 호출해야하니까 yes 는 호출되면 안됨
    // expect(onSuccess).toHaveBeenCalledWith("yes");
  });
});
