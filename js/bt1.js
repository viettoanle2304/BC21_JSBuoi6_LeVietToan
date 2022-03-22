const tinhTongSoDuong = (arr) => {
  const tong = arr
    .filter((val) => val > 0)
    .reduce((preVal, curVal) => preVal + curVal, 0);
  // Dùng filter lọc ra các số dương trong mảng, sau đấy dùng reduce tính tổng các số trong mảng đã lọc

  return tong;
};
