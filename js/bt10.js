const demSoAm = (arr) => {
  const slSoAm = arr.filter((val) => val < 0).length;
  // Lọc các số âm trong mảng. Chiều dài của mảng chứa các số âm sau khi lọc chính là số lượng số âm có trong mảng gốc.

  return slSoAm;
};
