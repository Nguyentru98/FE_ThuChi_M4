
    let API_URL = 'http://localhost:3000/trades';
    load()

    function load() {
    axios.get(API_URL).then((res) => {
        let data = res.data;
        console.log(res.data)
        let str = ``;
        str += `<table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">ID</th>
                                    <th scope="col">Khoản</th>
                                    <th scope="col">Số tiền bỏ ra</th>
                                    <th scope="col">Ngày</th>
                                   
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Chi khoản gì</th>
                                   
                                    <th scope="col">Số dư </th>
                                    <th scope="col">Lựa chọn</th>
                                </tr>
                            </thead>`
        data.map(item => {
            str += `<tr>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td>${item.amount} VNĐ</td>
                                    <td>${item.date}</td>
                                    <td>${item.type}</td>
                                    <td>${item.tradeType.name}</td>
                                    <td>${item.user.currentMoney} VNĐ</td>
                                    <td>
                                    <div class="d-flex justify-content-center ">
<!--                                  <button onclick="showFromAdd()" class="btn btn-primary me-1"><i class="fa-sharp fa-solid fa-circle-plus"></i></button>-->
                                 <button onclick="showFromEdit(${item.id})" class="btn btn-primary me-1"><i class="fa-sharp fa-solid fa-pen"></i></button>
                                  <button onclick="deleteTrade(${item.id})" class="btn btn-primary me-1"><i class="fa-solid fa-trash"></i></button>

                                </div>
</td>
                                   
                                    
                                </tr>
                
       </table>`
        document.getElementById('display').innerHTML = str;
    })
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
    loadHome();
});
}



    function deleteTrade(id) {
    axios.delete(API_URL + `/${id}`).then((res) => {
        loadHome();
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
    loadHome();
})
})
}

