const demSoNguyen = (arr) => {
  const slSoNguyen = arr.filter((val) => val % 1 == 0).length;
  // Lọc ra các số chia hết cho 1 (số nguyên), chiều dài mảng sau khi lọc chính là số lượng số nguyên có trong mảng ban đầu

  return slSoNguyen;
};
