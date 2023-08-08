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
                        <td> <a class="btn btn-sm btn-primary" onclick="showFormEdit(${item.id})">EDIT</a>
                             <a class="btn btn-sm btn-primary" onclick="deleteTrade(${item.id})">DELETE</a>
                        </td>
                        
                    </tr>`
        })
        document.getElementById('list').innerHTML = str;
    })
}