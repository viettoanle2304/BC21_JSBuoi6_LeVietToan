const timSoNguyenTo = (arr) => {
  const soNguyenToFirst = arr.find((val) => isPrime(val));
  // Dùng find tìm trong mảng số trị nguyên tố đầu tiên

  return soNguyenToFirst;
};

// Không tính số âm
const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else if (num == 2 || num == 3) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }
};
