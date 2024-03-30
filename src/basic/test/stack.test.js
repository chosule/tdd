const Stack = require("../stack");

describe("Stack test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("create empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("3");
    stack.push("4");
    expect(stack.pop()).toBe("4");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws error pop is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("stack is empty");
    });

    it("returns the last pushed item an removes it from the stack", () => {
      stack.push("😡");
      stack.push("🤯");
      //   console.log("stack", stack.arr);
      expect(stack.pop()).toBe("🤯");
      expect(stack.size()).toBe(1);
    });

    describe("peek", () => {
      it("throws an error if stack is empty", () => {
        expect(() => {
          stack.peek();
        }).toThrow("stack is empty");
      });

      it("returns the last pushed item but keeps it in the stack", () => {
        stack.push("1");
        stack.push("2");

        expect(stack.peek()).toBe("2");
        expect(stack.size()).toBe(2);
      });
    });
  });
});
