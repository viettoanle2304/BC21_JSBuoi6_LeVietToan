const timSoNhoNhat = (arr) => {
  const min = [...arr].sort((preVal, curVal) => preVal - curVal)[0];
  // Sắp xếp mảng theo thứ tự tăng dần, số nhỏ nhất là số đầu tiên trong mảng sau sắp xếp

  return min;
};
