function showFormEdit(id) {
    axios.get(`http://localhost:3000/trades/${id}`).then((res)=> {
        let data = res.data[0]
        console.log(data)
        let str = `
      <div class="mx-auto card p-4 my-4 w-75 shadow-lg rounded">
         <h2 class="text-center"> Edit Transaction</h2>
         <form>
         <div class="form-group">
               <label for="">UserId</label>
               <input value="${data.user.id}" type="number" class="form-control" id="userId" placeholder="User ID">
            </div>
            <div class="form-group">
               <label for="">Name</label>
               <input value="${data.name}" type="text" class="form-control" id="name" placeholder="Trading name">
            </div>
            <div class="form-group">
               <label for="">Amount</label>
               <input value="${data.amount}" type="number" class="form-control" id="amount" placeholder="Amount">
            </div>
            <div class="form-group">
               <label for="">Date</label>
               <input value="${data.date}" type="text" class="form-control" id="dateAdd" placeholder="Date">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input value="${data.type}" type="text" class="form-control" id="type" placeholder="Transaction type">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input value="${data.tradeType.id}" type="number" class="form-control" id="tradeType" placeholder="TradeType">
            </div>
               
            <div class="d-flex justify-content-start">
               <button type="button" onclick="save(${data.id})" class="btn btn-primary mt-4 mr-2">Save</button> 
            </div>
         </form>
      </div>`;
        document.getElementById('formAdd').innerHTML = str;
    })


}
function save(id){
    let dataObj = {
        user:{
            id: document.getElementById("userId").value
        },
        name: document.getElementById("name").value,
        amount: document.getElementById("amount").value,
        date: document.getElementById("dateAdd").value,
        type: document.getElementById("type").value
    }
    axios.put(`http://localhost:3000/trades/${id}`, dataObj).then(res => {
        loadHome()
    })
}


// function update() {
//     let data = {
//         id: document.getElementById('userId').value,
//         name: document.getElementById('name').value,
//         amount: document.getElementById('amount').value,
//         date: document.getElementById('date').value,
//         type: document.getElementById('type').value,
//         currentMoney: document.getElementById('tradeTypeId').value,
//
//     }
//
//
//     axios.put('http://localhost:3000/trades', data).then((res) => {
//         axios.get().then((res) => {
//             load();
//         })
//     })
// }