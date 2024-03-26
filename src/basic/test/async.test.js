const fetchProduct = require("../async");

describe("Aync", () => {
  // 비동기 done 을 이용한 방법 1
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
      done();
    });
  });
  // 비동기 방법 return 2
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
  });
  // 비동기 방법  async await 3
  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 200 });
  });

  // 비동기 방법 4
  it("async - resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 200,
    });
  });

  // 비동기 방법 5
  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
