function showFromAdd() {
    let str = `
      <div class="mx-auto card p-4 my-4 w-75 shadow-lg rounded">
         <h2 class="text-center">Add Transaction</h2>
         <form>
           
            <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="id" name="id">
            </div>
             <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="name" name="name">
            </div>
             <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="currentMoney" name="currentMoney">
            </div>
             <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="currentMoney" name="currentMoney">
            </div>
             <div class="form-group">
               <label for="">currentMoney</label>
               <input type="text" class="form-control" id="currentMoney" name="currentMoney">
            </div>
            <div class="d-flex justify-content-start">
               <button type="button" onclick="save()" class="btn btn-primary mt-4 mr-2">Xác nhận</button>
               <button type="button" class="btn btn-secondary mt-4">Thoát</button>
            </div>
         </form>
      </div>`;
    document.getElementById('display').innerHTML = str;
}