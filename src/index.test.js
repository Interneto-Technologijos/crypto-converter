const { convertToBtc } = require("./index");

describe("index BTC converter", () => {
  it("should exist", () => {
    expect(convertToBtc).not.toBeUndefined();
  });
  it("should convert 10 ETH to BTC", () => {
    const result = convertToBtc("ETH", 10);
    expect(result).toBeGreaterThan(0.4);
    expect(result).toBeLessThan(0.5);
  });
  it("should not convert 10 XLM to BTC", () => {
    expect(convertToBtc("XLM", 10)).toBeUndefined();
  });
});
