const LoginService = require("../user_service.js");
const UserClient = require("../user_client.js");

//로그인client에서는 상태 제대로 기능이 동작하고있는지 상태검사 즉 stub가 아니라 제대로 콜 되는지 행위검증이 필요함으로 mock을 이용해서 test를 구현한다.

jest.mock("../user_client.js");

describe("LoginService-Stub", () => {
  const login = jest.fn(async () => "success");

  //fetch 결과값을 위에서 만든 login 함수로 반환하게끔 연결
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let loginService;

  beforeEach(() => {
    loginService = new LoginService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("id and password confirm", async () => {
    await loginService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await loginService.login("abs", "abc");
    await loginService.login("abs", "abc");

    expect(login.mock.calls.length).toBe(1);
  });
});
