class StubProductClient {
  // 진짜 api가 아니라 데이터를 바로 리턴하는 함수로 만들어 둔 것
  // 이렇게 함으로써 네트워크에 의존하지 않게 됨
  async fetchItems() {
    return [
      { item: "milk", available: true },
      { item: "milk", available: false },
    ];
  }
}

module.exports = StubProductClient;
