function loadLogin(){
    document.getElementById('display').innerHTML = `<div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Spinner Start -->
        
        <!-- Spinner End -->


        <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                            </a>
                            <h3>Sign In</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="username" placeholder="Username">
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            
                        </div>
                        <button onclick="checkUser()" type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                        <p class="text-center mb-0">Don't have an Account? <a onclick="registerForm()">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    </div>`
}
function checkUser(){
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    axios.post('http://localhost:3000/login', data).then(res => {
        let token = res.data
        console.log(token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        // Xử lý dữ liệu trả về từ server nếu cần
        alert('Đăng nhập thành công!');
        loadHome();
    }).catch(error => {
        console.error(error);
        alert('Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu và thử lại sau.');
    });
}
