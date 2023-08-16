function validate(full: string, un: string, pw: string, em: string, p: string): string | null {
    // Kiểm tra các trường thông tin không được bỏ trống
    if (!full || !un || !pw || !em  || !p) {
      return 'Vui lòng điền đầy đủ thông tin';
    }
    // Biểu thức chính quy kiểm tra fullname không có số
    let fullnameRegex = /^[^0-9]+$/;
    if (!fullnameRegex.test(full)) {
      return 'Họ tên không được chứa số';
    }
    // Biểu thức chính quy kiểm tra số điện thoại từ 10 đến 11 số
    let phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(p)) {
      return 'Số điện thoại không hợp lệ';
    }
    // Biểu thức chính quy kiểm tra định dạng email
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(em)) {
      return 'Email không hợp lệ';
    }
    // Biểu thức chính quy kiểm tra mật khẩu ít nhất 6 chữ số
    let passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(pw)) {
      return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    // if (pw !== pw2) {
    //   return 'Sai xác nhận mật khẩu';
    // }
    // Nếu không có lỗi nào, trả về null
    return null;
  }
  
async function dangky(): Promise<void> {
    let un = document.getElementsByName('username')[0] as HTMLInputElement;
    let unvl=un.value;
    let pw = document.getElementsByName('password')[0] as HTMLInputElement;
    let pwvl=pw.value;
    // let pw2 = (document.forms.namedItem('frmdk') as HTMLFormElement).re_password.value;
    // let pw2vl=pw.value;
    let em = document.getElementsByName('email')[0] as HTMLInputElement;
    let emvl=em.value;
    let full = document.getElementsByName('fullname')[0] as HTMLInputElement;
    let fullvl=full.value;
    let ro =  document.getElementsByName('role')[0] as HTMLInputElement;
    let rovl=ro.value;
    let p =  document.getElementsByName('phone')[0] as HTMLInputElement;
    let pvl=p.value;
    let tb = document.getElementById('error') as HTMLElement;
    
    let validationError = validate(fullvl, unvl, pwvl, emvl, pvl);
    if (validationError) {
      tb.innerText = validationError;
      return;
    }
  
    const data = {
      fullname: fullvl,
      username: unvl,
      password: pwvl, 
      email: emvl,
      role: rovl,
      phone: pvl,
    }
    const url = 'http://localhost:3000/users/';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const responseData = await response.json();
      (document.forms.namedItem('frmdk') as HTMLFormElement).reset();
      console.log(responseData);
      tb.innerText = 'Đăng ký thành công';
    } catch (err) {
      console.log(err);
    }
  }
  

  const errors = document.getElementById('error-mess_in');

  async function dangnhap() {
    try {
        let un = document.getElementsByName('username')[0] as HTMLInputElement;
        let unvl=un.value;
        let pw = document.getElementsByName('password')[0] as HTMLInputElement;
        let pwvl=pw.value;
  
      const response = await fetch(`http://localhost:3000/users/${unvl}`, {
        method: 'POST',
        body: JSON.stringify({ password: pwvl }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const userInfo = await response.json();
        sessionStorage.setItem('user', JSON.stringify(userInfo));
  
        console.log('Đăng nhập thành công:', userInfo.username);
        console.log(userInfo.username, userInfo.fullname);
  
        const prevPageUrl = document.referrer;
        window.location.href = prevPageUrl || 'http://localhost:3000/';
      } else {
        const error = await response.json();
        console.log(error.message);
        errors.innerText = error.message;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  export { dangnhap , dangky};
  
//   var btnup= document.querySelector('#signup');
//   btnup.addEventListener('click',e=>{
//       e.preventDefault();
//       dangnhap();
//   })