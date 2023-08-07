function loadHome(){
    let str = '<div class="container-xxl position-relative bg-white d-flex p-0">\n' +

        '    <!-- Spinner End -->\n' +
        '\n' +
        '\n' +
        '    <!-- Sidebar Start -->\n' +
        '    <div class="sidebar pe-4 pb-3">\n' +
        '        <nav class="navbar bg-light navbar-light">\n' +
        '            <a href="index.html" class="navbar-brand mx-4 mb-3">\n' +
        '                <h3 class="text-primary">Quản lý thu chi</h3>\n' +
        '            </a>\n' +
        '            <div class="d-flex align-items-center ms-4 mb-4">\n' +
        '                <div class="position-relative">\n' +
        '                    <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">\n' +
        '                    <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>\n' +
        '                </div>\n' +
        '                <div class="ms-3">\n' +
        '                    <h6 class="mb-0"></h6>\n' +
        '                    <span>Admin</span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="navbar-nav w-100">\n' +
        '                <a href="index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>\n' +
        '                <div class="nav-item dropdown">\n' +
        '                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>\n' +
        '                    <div class="dropdown-menu bg-transparent border-0">\n' +
        '                        <a href="button.html" class="dropdown-item">Buttons</a>\n' +
        '                        <a href="typography.html" class="dropdown-item">Typography</a>\n' +
        '                        <a href="element.html" class="dropdown-item">Other Elements</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <a href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>\n' +
        '                <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>\n' +
        '                <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>\n' +
        '                <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>\n' +
        '                <div class="nav-item dropdown">\n' +
        '                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>\n' +
        '                    <div class="dropdown-menu bg-transparent border-0">\n' +
        '                        <a href="signin.html" class="dropdown-item">Sign In</a>\n' +
        '                        <a href="signup.html" class="dropdown-item">Sign Up</a>\n' +
        '                        <a href="404.html" class="dropdown-item">404 Error</a>\n' +
        '                        <a href="blank.html" class="dropdown-item">Blank Page</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </nav>\n' +
        '    </div>\n' +
        '    <!-- Sidebar End -->\n' +
        '\n' +
        '\n' +
        '    <!-- Content Start -->\n' +
        '    <div class="content">\n' +
        '        <!-- Navbar Start -->\n' +
        '        <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">\n' +
        '            <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">\n' +
        '                <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>\n' +
        '            </a>\n' +
        '            <a href="#" class="sidebar-toggler flex-shrink-0">\n' +
        '                <i class="fa fa-bars"></i>\n' +
        '            </a>\n' +
        '            <form class="d-none d-md-flex ms-4">\n' +
        '                <input class="form-control border-0" type="search" placeholder="Search">\n' +
        '            </form>\n' +
        '            <div class="navbar-nav align-items-center ms-auto">\n' +
        '                <div class="nav-item dropdown">\n' +
        '                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">\n' +
        '                        <i class="fa fa-envelope me-lg-2"></i>\n' +
        '                        <span class="d-none d-lg-inline-flex">Message</span>\n' +
        '                    </a>\n' +
        '                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <div class="d-flex align-items-center">\n' +
        '                                <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                <div class="ms-2">\n' +
        '                                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>\n' +
        '                                    <small>15 minutes ago</small>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <div class="d-flex align-items-center">\n' +
        '                                <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                <div class="ms-2">\n' +
        '                                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>\n' +
        '                                    <small>15 minutes ago</small>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <div class="d-flex align-items-center">\n' +
        '                                <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                <div class="ms-2">\n' +
        '                                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>\n' +
        '                                    <small>15 minutes ago</small>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item text-center">See all message</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="nav-item dropdown">\n' +
        '                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">\n' +
        '                        <i class="fa fa-bell me-lg-2"></i>\n' +
        '                        <span class="d-none d-lg-inline-flex">Notificatin</span>\n' +
        '                    </a>\n' +
        '                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <h6 class="fw-normal mb-0">Profile updated</h6>\n' +
        '                            <small>15 minutes ago</small>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <h6 class="fw-normal mb-0">New user added</h6>\n' +
        '                            <small>15 minutes ago</small>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item">\n' +
        '                            <h6 class="fw-normal mb-0">Password changed</h6>\n' +
        '                            <small>15 minutes ago</small>\n' +
        '                        </a>\n' +
        '                        <hr class="dropdown-divider">\n' +
        '                        <a href="#" class="dropdown-item text-center">See all notifications</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="nav-item dropdown">\n' +
        '                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">\n' +
        '                        <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                        <span class="d-none d-lg-inline-flex">John Doe</span>\n' +
        '                    </a>\n' +
        '                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">\n' +
        '                        <a href="#" class="dropdown-item">My Profile</a>\n' +
        '                        <a href="#" class="dropdown-item">Settings</a>\n' +
        '                        <a href="#" class="dropdown-item">Log Out</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </nav>\n' +
        '        <!-- Navbar End -->\n' +
        '\n' +
        '\n' +
        '        <!-- Sale & Revenue Start -->\n' +
        '        <div class="container-fluid pt-4 px-4">\n' +
        '            <div class="row g-4">\n' +
        '                <div class="col-sm-6 col-xl-3">\n' +
        '                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">\n' +
        '                        <i class="fa fa-chart-line fa-3x text-primary"></i>\n' +
        '                        <div class="ms-3" id="totalMoney">\n' +
        '                            <script>totalMoney()</script>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-sm-6 col-xl-3">\n' +
        '                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">\n' +
        '                        <i class="fa fa-chart-bar fa-3x text-primary"></i>\n' +
        '                        <div class="ms-3" id="thu">\n' +
        '                            <script>totalRevenue()</script>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-sm-6 col-xl-3">\n' +
        '                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">\n' +
        '                        <i class="fa fa-chart-area fa-3x text-primary"></i>\n' +
        '                        <div class="ms-3" id="chi">\n' +
        '                            <script>totalPay()</script>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-sm-6 col-xl-3">\n' +
        '                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">\n' +
        '                        <i class="fa fa-chart-pie fa-3x text-primary"></i>\n' +
        '                        <div class="ms-3">\n' +
        '                            <p class="mb-2">Total ....</p>\n' +
        '                            <h6 class="mb-0">$...</h6>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <!-- Sale & Revenue End -->\n' +
        '            \n' +
        '\n' +
        '        <!-- Sales Chart Start -->\n' +
        '        <!-- bieu do -->\n' +
        '        <!-- Sales Chart End -->\n' +
        '\n' +
        '\n' +
        '        <!-- Recent Sales Start -->\n' +
        '\n' +
        '        <div class="container-fluid pt-4 px-4">\n' +
        '            <div class="bg-light text-center rounded p-4">\n' +
        '                <div class="d-flex align-items-center justify-content-between mb-4">\n' +
        '                    <h6 class="mb-0">Transaction</h6>\n' +
        '                    <a href="" onclick="listTrade()">Show All</a>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="table-responsive">\n' +
        '                    <input class="form-control border-0" type="search" placeholder="Search">\n' +
        '<br>\n' +
        '                                           <table class="table text-start align-middle table-bordered table-hover mb-0">\n' +
        '                                            <a class="btn btn-sm btn-primary" href="">Search</a>\n' +
        '                                            <hr>\n' +
        '                                               <thead>\n' +
        '                                                   <tr class="text-dark">\n' +
        '                                                       <th scope="col"><input class="form-check-input" type="checkbox"></th>\n' +
        '                                                       <th scope="col">Date</th>\n' +
        '                                                       <th scope="col">Trading name</th>\n' +
        '                                                       <th scope="col">Transaction type</th>\n' +
        '                                                       <th scope="col">Amount</th>\n' +
        '                                                       <th scope="col">User</th>\n' +
        '                                                       <th scope="col">Action</th>\n' +
        '                                                   </tr>\n' +
        '                                               </thead>\n' +
        '                                               <tbody id="display">\n' +
        '                                                    <script>listTrade()</script>\n' +
        '                                                     <tr>\n' +
        '                                                       <td><input class="form-check-input" type="checkbox"></td>\n' +
        '                                                       <td>01 Jan 2045</td>\n' +
        '                                                       <td>INV-0123</td>\n' +
        '                                                       <td>Jhon Doe</td>\n' +
        '                                                       <td>$123</td>\n' +
        '                                                       <td>Paid</td>\n' +
        '                                                       <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>\n' +
        '                                                   </tr>\n' +
        '                                               </tbody>\n' +
        '                                           </table>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                    \n' +
        '                </div>\n' +
        '                <!-- Recent Sales End -->\n' +
        '\n' +
        '\n' +
        '                <!-- Widgets Start -->\n' +
        '                <div class="container-fluid pt-4 px-4">\n' +
        '                    <div class="row g-4">\n' +
        '                        <div class="col-sm-12 col-md-6 col-xl-4">\n' +
        '                            <div class="h-100 bg-light rounded p-4">\n' +
        '                                <div class="d-flex align-items-center justify-content-between mb-2">\n' +
        '                                    <h6 class="mb-0">Messages</h6>\n' +
        '                                    <a href="">Show All</a>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-3">\n' +
        '                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 justify-content-between">\n' +
        '                                            <h6 class="mb-0">Jhon Doe</h6>\n' +
        '                                            <small>15 minutes ago</small>\n' +
        '                                        </div>\n' +
        '                                        <span>Short message goes here...</span>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-3">\n' +
        '                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 justify-content-between">\n' +
        '                                            <h6 class="mb-0">Jhon Doe</h6>\n' +
        '                                            <small>15 minutes ago</small>\n' +
        '                                        </div>\n' +
        '                                        <span>Short message goes here...</span>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-3">\n' +
        '                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 justify-content-between">\n' +
        '                                            <h6 class="mb-0">Jhon Doe</h6>\n' +
        '                                            <small>15 minutes ago</small>\n' +
        '                                        </div>\n' +
        '                                        <span>Short message goes here...</span>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center pt-3">\n' +
        '                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 justify-content-between">\n' +
        '                                            <h6 class="mb-0">Jhon Doe</h6>\n' +
        '                                            <small>15 minutes ago</small>\n' +
        '                                        </div>\n' +
        '                                        <span>Short message goes here...</span>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-12 col-md-6 col-xl-4">\n' +
        '                            <div class="h-100 bg-light rounded p-4">\n' +
        '                                <div class="d-flex align-items-center justify-content-between mb-4">\n' +
        '                                    <h6 class="mb-0">Calender</h6>\n' +
        '                                    <a href="">Show All</a>\n' +
        '                                </div>\n' +
        '                                <div id="calender"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-12 col-md-6 col-xl-4">\n' +
        '                            <div class="h-100 bg-light rounded p-4">\n' +
        '                                <div class="d-flex align-items-center justify-content-between mb-4">\n' +
        '                                    <h6 class="mb-0">To Do List</h6>\n' +
        '                                    <a href="">Show All</a>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex mb-2">\n' +
        '                                    <input class="form-control bg-transparent" type="text" placeholder="Enter task">\n' +
        '                                    <button type="button" class="btn btn-primary ms-2">Add</button>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-2">\n' +
        '                                    <input class="form-check-input m-0" type="checkbox">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 align-items-center justify-content-between">\n' +
        '                                            <span>Short task goes here...</span>\n' +
        '                                            <button class="btn btn-sm"><i class="fa fa-times"></i></button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-2">\n' +
        '                                    <input class="form-check-input m-0" type="checkbox">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 align-items-center justify-content-between">\n' +
        '                                            <span>Short task goes here...</span>\n' +
        '                                            <button class="btn btn-sm"><i class="fa fa-times"></i></button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-2">\n' +
        '                                    <input class="form-check-input m-0" type="checkbox" checked>\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 align-items-center justify-content-between">\n' +
        '                                            <span><del>Short task goes here...</del></span>\n' +
        '                                            <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center border-bottom py-2">\n' +
        '                                    <input class="form-check-input m-0" type="checkbox">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 align-items-center justify-content-between">\n' +
        '                                            <span>Short task goes here...</span>\n' +
        '                                            <button class="btn btn-sm"><i class="fa fa-times"></i></button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex align-items-center pt-2">\n' +
        '                                    <input class="form-check-input m-0" type="checkbox">\n' +
        '                                    <div class="w-100 ms-3">\n' +
        '                                        <div class="d-flex w-100 align-items-center justify-content-between">\n' +
        '                                            <span>Short task goes here...</span>\n' +
        '                                            <button class="btn btn-sm"><i class="fa fa-times"></i></button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- Widgets End -->\n' +
        '\n' +
        '\n' +
        '                <!-- Footer Start -->\n' +
        '                <div class="container-fluid pt-4 px-4">\n' +
        '                    <div class="bg-light rounded-top p-4">\n' +
        '                        <div class="row">\n' +
        '                            <div class="col-12 col-sm-6 text-center text-sm-start">\n' +
        '                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.\n' +
        '                            </div>\n' +
        '                            <div class="col-12 col-sm-6 text-center text-sm-end">\n' +
        '                                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you\'d like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->\n' +
        '                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>\n' +
        '                                </br>\n' +
        '                                Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <!-- Footer End -->\n' +
        '            </div>\n' +
        '            <!-- Content End -->\n' +
        '\n' +
        '\n' +
        '            <!-- Back to Top -->\n' +
        '            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>\n' +
        '        </div>'
    document.getElementById('display').innerHTML =str
}