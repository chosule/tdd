// no_di 버전이아니라 그냥 가상 fetch파일 가져오기
const ProductService = require("../product_service.js");
// Stub버전 사용할것
const StubProductClient = require("../test/stub_product_client.js");

describe("ProductService- Stub버전", () => {
  let productService;
  beforeEach(() => {
    // 실제의 api를 가지고 test하는게아니라 가상의 StubProductClient를 만들어서 사용함으로써
    // 기존의 네트워크에 의존하지 않게 된다.
    productService = new ProductService(new StubProductClient());
  });

  it("available item만 리턴할수 있도록 test", async () => {
    //available 가 true인것만 담겨있어야 하므로 items에는 milk 만 담겨있어야한다.
    const items = await productService.fetchAvailableItems();
    //items가 하나만 들어있어야 하니까 true
    expect(items.length).toBe(1);
    //동일한지 확인하기
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
