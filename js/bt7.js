const sapXepTangDan = (arr) => {
  const mangSapXep = [...arr].sort((preVal, curVal) => preVal - curVal);
  // Không ảnh hưởng mảng gốc

  return mangSapXep;
};
