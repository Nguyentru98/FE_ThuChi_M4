function nameUser(){
    axios.get('http://localhost:3000/users').then((res)=> {
        let data = res.data;
        console.log(data)
        let str = '';
        data.map(item =>{
            if (item.id === 1){
                str = `${item.username}`
            }
        })
        document.getElementById('display').innerHTML = str
    })
}