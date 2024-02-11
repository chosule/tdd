const Calculator = require("../calculator.js");

//그룹으로 만들어주기 describe
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  }); //beforeEach 로 새로운 오브젝트 만들기

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  //나누는건 좀 까다로움
  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0 === infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
