function save() {
    let data = {
        userId: document.getElementById('userAE').value,
        name: document.getElementById('nameAE').value,
        date: document.getElementById('dateAE').value,
        amount: document.getElementById('amountAE').value,
        type: document.getElementById('typeAE').value,
        tradeTypeId: document.getElementById('tradeTypeAE').value,
    };
    axios.post('http://localhost:3000/trades', data).then((res) => {
        listTrade() ;
    });
}
