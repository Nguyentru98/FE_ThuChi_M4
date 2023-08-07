function loadLogin(){
    document.getElementById('display').innerHTML = `<div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
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
                            <a href="">Forgot Password</a>
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
    console.log(data)
        axios.post('http://localhost:3000/login', data).then(res => {
            let token = res.data
            console.log(token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            // Xử lý dữ liệu trả về từ server nếu cần
            alert('Đăng nhập thành công!');
            loadTrades();
        }).catch(error => {
            console.error(error);
            alert('Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu và thử lại sau.');
        });
}
function loadTrades(){
    axios.get('http://localhost:3000/trades').then((res) =>{
        let data =res.data
        let str = ''
        data.map(item => {
            str=`<h1>Danh sach</h1>
${item.id}: ${item.name} 
             `
        })
        document.getElementById('display').innerHTML = str
    })
}
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
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up End -->
    </div>`
}
