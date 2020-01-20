module.exports = function parseStringAsArray(arrayAsSring) {
  return arrayAsSring.split(",").map(item => item.trim());
};
