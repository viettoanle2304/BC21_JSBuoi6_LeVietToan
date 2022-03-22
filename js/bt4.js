const timSoDuongNhoNhat = (arr) => {
  const soDuongMin = [...arr]
    .filter((val) => val > 0)
    .sort((preVal, curVal) => preVal - curVal)[0];
  // Lọc ra các số dương trong mảng gốc, sau đấy sắp xếp mảng đã lọc theo thứ tự tăng dần. Số nguyên dương nhỏ nhất là số đầu tiên trong mảng sau khi lọc và sắp xếp

  return soDuongMin;
};
