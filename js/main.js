const arr = [];
let toggle = false;

document.querySelector("#btn-mainFuncs").addEventListener("click", (e) => {
  const element = e.target;

  if (element == document.querySelectorAll("#btn-mainFuncs button")[0]) {
    const num = document.getElementById("bt__duLieu--elOArr").value * 1;

    arr.push(num);
    // console.log(arr);
    document.getElementById("bt__duLieu--elOArr").value = "";
  } else if (element == document.querySelectorAll("#btn-mainFuncs button")[1]) {
    arr.pop();
    // console.log(arr);
  } else if (element == document.querySelectorAll("#btn-mainFuncs button")[2]) {
    arr.length = 0;
    // console.log(arr);
  }

  const unsortArr = arr;
  const sortArr = sapXepTangDan(arr);
  const usedArr = toggle == false ? unsortArr : sortArr;

  document.querySelector("#bt__ketQua p span").innerHTML = usedArr.join(", ");

  // *: Bài tập 1: Start
  const tongSoDuong = tinhTongSoDuong(usedArr);

  document.getElementById(
    "tinhTong"
  ).innerHTML = `Tổng các số dương trong mảng là: ${tongSoDuong}`;
  // *: End

  // *: Bài tập 2: Start
  const soLuongSoDuong = demSoDuong(usedArr);

  document.getElementById(
    "demSoDuong"
  ).innerHTML = `Số lượng số dương trong mảng là: ${soLuongSoDuong}`;
  // *: End

  // *: Bài tập 3: Start
  const soNhoNhat = timSoNhoNhat(usedArr);

  document.getElementById("timMin").innerHTML =
    soNhoNhat != undefined
      ? `Số nhỏ nhất trong mảng là: ${soNhoNhat}`
      : "Số nhỏ nhất trong mảng là: Không thể tìm do mảng không chứa dữ liệu";
  // *: End

  // *: Bài tập 4: Start
  const soDuongNhoNhat = timSoDuongNhoNhat(usedArr);

  document.getElementById("timMinDuong").innerHTML =
    soDuongNhoNhat != undefined
      ? `Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}`
      : "Số dương nhỏ nhất trong mảng là: Không thể tìm do mảng không chứa dữ liệu";
  // *: End

  // *: Bài tập 5: Start
  const soChanCuoiCung = timSoChanCuoiCung(usedArr);

  document.getElementById("timSoChan").innerHTML =
    arr.length != 0
      ? `Số chẵn cuối cùng trong mảng là: ${soChanCuoiCung}`
      : "Số chẵn cuối cùng trong mảng là: Không thể tìm do mảng không chứa dữ liệu";
  // *: End

  // *: Bài tập 6: Start
  if (arr.length == 0) {
    document.querySelector("#swapVals .form-group").style.display = "none";
    document.querySelector("#swapVals p").innerHTML =
      "Không thể thực hiện do mảng không chứa dữ liệu";
  } else {
    document.querySelector("#swapVals .form-group").style.display =
      "inline-block";
  }
  // !: Event thay đổi dữ liệu bên dưới
  // *: End

  // *: Bài tập 7: Start
  if (arr.length == 0) {
    document.getElementById("sort").innerHTML =
      "Không thể thực hiện do mảng không chứa dữ liệu";
  } else {
    document.getElementById("sort").innerHTML =
      "Mảng đã được sắp xếp thành công";
  }
  // *: End

  // *: Bỏ sắp xếp: Start
  if (arr.length == 0) {
    document.getElementById("unsort").innerHTML =
      "Không thể thực hiện do mảng không chứa dữ liệu";
  } else {
    document.getElementById("unsort").innerHTML =
      "Mảng đã bỏ sắp xếp thành công";
  }
  // *: End

  // *: Bài tập 8: Start
  const soNguyenToDauTien = timSoNguyenTo(usedArr);

  document.getElementById("timPrime").innerHTML =
    arr.length != 0
      ? `Số nguyên tố đầu tiên trong mảng là: ${soNguyenToDauTien}`
      : "Số nguyên tố đầu tiên trong mảng là: Không thể tìm do mảng không chứa dữ liệu";
  // *: End

  // *: Bài tập 10: Start
  const soLuongSoAm = demSoAm(usedArr);

  if (arr.length == 0) {
    document.getElementById("soSanh").innerHTML =
      "Không thể thực hiện do mảng không chứa dữ liệu";
  } else {
    if (soLuongSoAm > soLuongSoDuong) {
      document.getElementById(
        "soSanh"
      ).innerHTML = `Số lượng số âm nhiều hơn số lượng số dương: ${soLuongSoAm} > ${soLuongSoDuong}`;
    } else if (soLuongSoDuong > soLuongSoAm) {
      document.getElementById(
        "soSanh"
      ).innerHTML = `Số lượng số dương nhiều hơn số lượng số âm: ${soLuongSoDuong} > ${soLuongSoAm}`;
    } else {
      document.getElementById(
        "soSanh"
      ).innerHTML = `Số lượng số dương và số lượng số âm bằng nhau: ${soLuongSoDuong} = ${soLuongSoAm}`;
    }
  }

  // *: End
});

document.getElementById("btn-functions").addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.value == "sort") {
      toggle = true;
    } else if (e.target.value == "unsort") {
      toggle = false;
    }

    document.querySelector("#btn-mainFuncs").click();
  }
});

document
  .querySelector("#swapVals .form-group button")
  .addEventListener("click", () => {
    if (
      document.getElementById("bt__duLieu--viTriX").value == "" ||
      document.getElementById("bt__duLieu--viTriY").value == ""
    ) {
      document.querySelector("#swapVals p").innerHTML =
        "Vui lòng nhập vị trí thay đổi dữ liệu";
    } else {
      const x = document.getElementById("bt__duLieu--viTriX").value * 1;
      const y = document.getElementById("bt__duLieu--viTriY").value * 1;

      if (x >= arr.length || y >= arr.length) {
        document.querySelector("#swapVals p").innerHTML =
          "Dữ liệu tại vị trí đã cho không tồn tại";
      } else {
        doiViTri(arr, x, y);
        document.querySelector("#swapVals p").innerHTML =
          "Dữ liệu đã thay đổi vị trí thành công";
      }
    }

    document.querySelector("#btn-mainFuncs").click();
  });

document
  .querySelector("#timInt .form-group button")
  .addEventListener("click", () => {
    const duLieu = document.getElementById("bt__duLieu--mangSoThuc").value;

    if (duLieu == "") {
      document.querySelector("#timInt p").innerHTML = "Vui lòng nhập dữ liệu";
    } else {
      const duLieuArr = duLieu
        .replaceAll(/[^+\-0-9\.]+/g, " ")
        .split(" ")
        .map(Number);

      // console.log(duLieuArr);
      const soLuongSoNguyen = demSoNguyen(duLieuArr);

      document.querySelector(
        "#timInt p"
      ).innerHTML = `Số lượng số nguyên trong mảng số thực vừa nhập là: ${soLuongSoNguyen}`;
    }
  });
