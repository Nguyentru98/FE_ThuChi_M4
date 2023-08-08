function listTrade() {

    axios.get('http://localhost:3000/trades').then((res) => {
        let data = res.data;
        let str = '';
        data.map(item => {
            str += `
            <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>${item.date}</td>
                        <td>${item.name}</td>
                        <td>${item.type}</td>  
                        <td>${item.amount}</td>
                        <td>${item.user.id}</td>
                        <td> <button class="btn btn-sm btn-primary" onclick="showFormEdit(${item.id})">EDIT</button>
                             <button class="btn btn-sm btn-primary" onclick="deleteTrade(${item.id})">DELETE</button>
                        </td>
                        
                    </tr>`
        })

        document.getElementById('list').innerHTML = str;
    })
}








// function showFromEdit(id) {
//     axios.get(API_URL + `/${id}`).then(res => {
//         let data = res.data[0];
//
//         let str = ``
//
//         document.getElementById('display').innerHTML = str;
//         document.getElementById('id').value = data.id;
//         document.getElementById("name").value = data.name;
//         document.getElementById("amount").value = data.amount;
//         document.getElementById("date").value = data.date;
//         document.getElementById("type").value = data.type;
//         document.getElementById("currentMoney").value = data.currentMoney;
//     })
// }


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

