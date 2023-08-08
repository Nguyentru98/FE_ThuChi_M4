function searchName(name) {
    axios.get('http://localhost:3000/trades/?name='+name).then((res) => {
        let data = res.data;
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
function searchType(type) {
    axios.get('http://localhost:3000/trades/?type='+type).then((res) => {
        let data = res.data;
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
function searchDate(date) {
    axios.get('http://localhost:3000/trades/?date='+date).then((res) => {
        let data = res.data;
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
function searchMonth(month) {
    axios.get('http://localhost:3000/trades/?date='+month).then((res) => {
        let data = res.data;
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
