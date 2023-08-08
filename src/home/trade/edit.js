
function findById(id) {
   console.log('edit')
   axios.get('http://localhost:3000/trades/findId?id='+id).then((res) => {
   
   let data = res.data[0]
   console.log(id,data)
         document.getElementById('userAE').value = data.userId,
         document.getElementById('nameAE').value = data.name,
         document.getElementById('dateAE').value= data.date,
         document.getElementById('amountAE').value= data.amount,
         document.getElementById('typeAE').value= data.type,
         document.getElementById('tradeTypeAE').value= data.tradeTypeId
  });
}
