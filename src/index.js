const ethToBtc = 0.045;

module.exports.convertToBtc = (crc, amount) => {
  if (crc === "ETH") {
    return amount * ethToBtc;
  }
  //throw new Error("Can not convert '" + crc + "' to BTC");
};
