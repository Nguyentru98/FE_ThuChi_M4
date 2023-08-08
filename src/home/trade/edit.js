
function findById(id) {
   axios.get('http://localhost:3000/trades/findId?id='+id).then((res) => {
   let data = res.data[0]
         document.getElementById('idTrade').value = data.id,
         document.getElementById('userAE').value = data.userId,
         document.getElementById('nameAE').value = data.name,
         document.getElementById('dateAE').value= data.date,
         document.getElementById('amountAE').value= data.amount,
         document.getElementById('typeAE').value= data.type,
         document.getElementById('tradeTypeAE').value= data.tradeTypeId
  });
  console.log(data)
}


function update() {

   let data = {
      id: document.getElementById('idTrade').value,
      userId: document.getElementById('userAE').value,
      name: document.getElementById('nameAE').value,
      date: document.getElementById('dateAE').value,
      amount: document.getElementById('amountAE').value,
      type: document.getElementById('typeAE').value,
      tradeTypeId: document.getElementById('tradeTypeAE').value,
  };
   console.log(data)
   axios.put('http://localhost:3000/trades/'+data.id , data).then(res=>{
       listTrade()
   })
}