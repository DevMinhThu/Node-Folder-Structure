/* 
    - Cần 3 tham số truyền vào hàm
    1. Trang hiện tại (page)
    2. Tổng số trang (totalPage)
    3. Biên (delta)
*/
module.exports = (page, totalPage, delta = 2) => {
  /* 
        Khởi tạo mảng pages chứa số trang trong 1 page
        (VD: trang user có 100 trang, mảng pages chứa [1,2,3,...98,99,100)
    */
  const pages = [];

  // tính giá trị của trang biên bên trái và bên phải của trang đang chọn
  // vd: chọn trang 7 ==> trang bên biên trái là 5, trang biên bên phải là 9
  const left = page - delta;
  const right = page + delta;

  // push số trang vao trong mảng pages
  for (let i = 1; i <= totalPage; i++) {
    if (i === 1 || i === totalPage || i === page || (i >= left && i <= right)) {
      pages.push(i);
    } else if (i === left - 1 || i === right + 1) {
      pages.push("...");
    }
  }

  return pages;
};
