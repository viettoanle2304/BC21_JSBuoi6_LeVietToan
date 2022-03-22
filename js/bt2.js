const demSoDuong = (arr) => {
  const slSoDuong = arr.filter((val) => val > 0).length;
  // Dùng filter lọc ra các số dương trong mảng, độ dài của mảng đã lọc, chính là số lượng các số dương có trong mảng ban đầu

  return slSoDuong;
};
