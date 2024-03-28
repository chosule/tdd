const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

jest.mock("../product_client"); // 가짜 api 라고 명시

describe("ProductService", () => {
  // 가짜로 받아올 데이터 생성하기
  const fetchItems = jest.fn(async () => {
    return [
      { item: "milk", available: true },
      { item: "milk", available: false },
    ];
  });
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  let productService;

  // 초기화
  beforeEach(() => {
    productService = new ProductService();
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
