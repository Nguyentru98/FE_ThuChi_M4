function registerUser() {
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        currentMoney: document.getElementById('currentMoney').value,
    };

    axios.post('http://localhost:3000/register', data).then(res => {
        console.log(res.data)
        alert('Đăng ký thành công!');
    }).catch(error => {
        console.error(error);
        alert('Đăng ký không thành công. Vui lòng thử lại sau.');
    });
}

function registerForm(){
    document.getElementById('display').innerHTML = `<div class="container-xxl position-relative bg-white d-flex p-0">
     
        <!-- Sign Up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                            </a>
                            <h3>Sign Up</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" placeholder="Username">
                            <label for="floatingText">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="currentMoney" placeholder="So tien hien tai">
                            <label for="floatingPassword">Current Money</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button onclick="registerUser()">Sign in</button>
                            <button onclick="loadLogin()">Sign up</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up End -->
    </div>`
}