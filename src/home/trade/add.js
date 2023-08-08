
function save() {
    let data = {
        userId: document.getElementById('userId').value,
        name: document.getElementById('name').value,
        date: document.getElementById('dateAdd').value,
        amount: document.getElementById('amount').value,
        type: document.getElementById('type').value,
        tradeTypeId: document.getElementById('tradeTypeId').value,
    };
    console.log(data.date)


    axios.post('http://localhost:3000/trades', data).then((res) => {
        loadHome();
    });
}
function showFromAdd() {
    let str = `
      <div class="mx-auto card p-4 my-4 w-75 shadow-lg rounded">
         <h2 class="text-center">Add Transaction</h2>
         <form>
         <div class="form-group">
               <label for="">UserId</label>
               <input type="number" class="form-control" id="userId" placeholder="User ID">
            </div>
            <div class="form-group">
               <label for="">Name</label>
               <input type="text" class="form-control" id="name" placeholder="Trading name">
            </div>
            <div class="form-group">
               <label for="">Amount</label>
               <input type="number" class="form-control" id="amount" placeholder="Amount">
            </div>
            <div class="form-group">
               <label for="">Date</label>
               <input type="text" class="form-control" id="dateAdd" placeholder="Date">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input type="text" class="form-control" id="type" placeholder="Transaction type">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input type="number" class="form-control" id="tradeType" placeholder="TradeType">
            </div>
               
            <div class="d-flex justify-content-start">
               <button type="button" onclick="save()" class="btn btn-primary mt-4 mr-2">Save</button> 
            </div>
         </form>
      </div>`;
    document.getElementById('formAdd').innerHTML = str;
}