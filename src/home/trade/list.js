
function listTrade() {
    axios.get('http://localhost:3000/trades').then((res) => {
        let data = res.data;
        console.log(res.data)
        let str ='';
        data.map(item => {
            str += `
            <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>${item.date}</td>
                        <td>${item.name}</td>
                        <td>${item.type}</td>
                        <td>${item.amount}</td>
                        <td>${item.userId}</td>
                        <td> <a class="btn btn-sm btn-primary" href="${item.id}">EDIT</a>
                             <a class="btn btn-sm btn-primary" href="${item.id}">DELETE</a>
                        </td>
                        
                    </tr>`
        })
        document.getElementById('list').innerHTML = str;
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
         <h2 class="text-center">Add Edit Transaction</h2>
         <form>
            <div class="form-group">
               <label for="">Name</label>
               <input type="text" class="form-control" id="name" placeholder="Trading name">
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
               <input type="text" class="form-control" id="type" placeholder="Transaction type">
            </div>
            <div class="d-flex justify-content-start">
               <button type="button" onclick="save()" class="btn btn-primary mt-4 mr-2">Save</button> 
            </div>
         </form>
      </div>`;
    document.getElementById('formAdd').innerHTML = str;
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

