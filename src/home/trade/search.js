function search() {
    let name = document.getElementById('Trading name').value ;
    let date = document.getElementById('date').value ;
    let type = document.getElementById('type').value ;
    
    if(name ='') {
        axios.get(`http://localhost:3000/trades/date=${date}&type=${type}`).then((res) => {
            let data = res.data;
            console.log(data)
            let str ='';
            data.map(item => {
                str += `
                <tr>
                            <td><input class="form-check-input" type="checkbox"></td>
                            <td>${item.date}</td>
                            <td>${item.name}</td>
                            <td>${item.type}</td>
                            <td>${item.amount}</td>
                            <td> <a class="btn btn-sm btn-primary" href="${item.id}">EDIT</a>
                                 <a class="btn btn-sm btn-primary" href="${item.id}">DELETE</a>
                            </td>
                            
                        </tr>`
            })
            document.getElementById('list').innerHTML = str;
        })
    }
    else if(date ='') {
        axios.get(`http://localhost:3000/trades/?name=${name}&type=${type}`).then((res) => {
        let data = res.data;
        console.log(data)
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
    }else {
        axios.get(`http://localhost:3000/trades/?name=${name}&date=${date}&type=${type}`).then((res) => {
        let data = res.data;
        console.log(data)
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
}
