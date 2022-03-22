const timSoChanCuoiCung = (arr) => {
  const soChanCuoiCung = [...arr].reverse().find((val) => val % 2 == 0);
  // Đảo ngược mảng gốc. Tìm số chẵn đầu tiên trong mảng đã đảo ngược

  return soChanCuoiCung == undefined ? -1 : soChanCuoiCung;
};
