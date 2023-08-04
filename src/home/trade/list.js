
    let API_URL = 'http://localhost:3000/trades';
    load()

    function load() {
    axios.get(API_URL).then((res) => {
        let data = res.data;
        console.log(res.data)
        let str = `<table class="table text-start align-middle table-bordered table-hover mb-0">`;
        str += `
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col"><input class="form-check-input" type="checkbox"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>`
        data.map(item => {
            str += `<tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>${item.name}</td>
                                    <td>${item.amount}</td>
                                    <td>${item.date}</td>
                                    <td>${item.type}</td>
                                    <td>${item.user.currentMoney}</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                `
        })
        str += `</table>`
        document.getElementById('display').innerHTML = str;
    })
}

    function save() {
    let data = {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    amount: document.getElementById('amount').value,
    date: document.getElementById('date').value,
    type: document.getElementById('type').value,
    currentMoney: document.getElementById('currentMoney').value,
};


    axios.post(API_URL, data).then((res) => {
    load();
});
}

    function showFromAdd() {
    let str = `
      <div class="mx-auto card p-4 my-4 w-75 shadow-lg rounded">
         <h2 class="text-center">Add Transaction</h2>
         <form>
            <div class="form-group">
               <label for="">ID</label>
               <input type="text" class="form-control" id="id" aria-describedby="emailHelp" placeholder="Enter ID">
            </div>
            <div class="form-group">
               <label for="">Name</label>
               <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
               <label for="">Amount</label>
               <input type="text" class="form-control" id="amount" placeholder="Amount">
            </div>
            <div class="form-group">
               <label for="">Date</label>
               <input type="date" class="form-control" id="date" placeholder="Date">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input type="text" class="form-control" id="type" placeholder="Type">
            </div>
            <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="currentMoney" placeholder="currentMoney">
            </div>
            <div class="d-flex justify-content-start">
               <button type="button" onclick="save()" class="btn btn-primary mt-4 mr-2">Xác nhận</button>
               <button type="button" class="btn btn-secondary mt-4">Thoát</button>
            </div>
         </form>
      </div>`;
    document.getElementById('display').innerHTML = str;
}

    function deleteTrade(id) {
    axios.delete(API_URL + `/${id}`).then((res) => {
        load();
    })
}

    function showFromEdit(id) {
    axios.get(API_URL + `/${id}`).then(res => {
        let data = res.data[0];

        let str = ``

        document.getElementById('display').innerHTML = str;


        document.getElementById('id').value = data.id;
        document.getElementById("name").value = data.name;
        document.getElementById("amount").value = data.amount;
        document.getElementById("date").value = data.date;
        document.getElementById("type").value = data.type;
        document.getElementById("currentMoney").value = data.currentMoney;
    })
}



    function update() {
    let data = {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    amount: document.getElementById('amount').value,
    date: document.getElementById('date').value,
    type: document.getElementById('type').value,
    // currentMoney: document.getElementById('currentMoney').value,

}



    axios.put(`${API_URL}/${data.id}`, data).then((res) => {
    axios.get(API_URL).then((res) => {
    load();
})
})
}

