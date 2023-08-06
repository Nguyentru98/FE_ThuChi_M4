function totalPay() {
    axios.get('http://localhost:3000/trades/?type=chi').then((res) => {
        let data = res.data
        let sumPay = 0;
        for (let i = 0; i < data.length; i++) {
            sumPay+= data[i].amount 
        }
        

        let str = `
        <p class="mb-2">total Pay</p>
        <h6 class="mb-0">$ ${sumPay}</h6>`

        console.log("totalPay")
        console.log(sumPay);
        console.log(str)
        document.getElementById('chi').innerHTML = str

    })
}

function totalRevenue() {
    axios.get('http://localhost:3000/trades/?type=thu').then((res) => {
        let data = res.data
        let sumRevenue = 0;
        for (let i = 0; i < data.length; i++) {
            sumRevenue+= data[i].amount 
        }
        let str = `
        <p class="mb-2">total Revenue</p>
        <h6 class="mb-0">$ ${sumRevenue}</h6>`

        console.log("totalRevenue")
        console.log(sumRevenue);
        console.log(str)
        document.getElementById('thu').innerHTML = str

    })
}
// function totalMoney() {
//     let sumRevenue = 0;
//     let sumPay = 0;
//     let totalMoney = 0;
    
//     const revenueResponse = axios.get('http://localhost:3000/trades/?type=thu').then((res) => {
//             let data = revenueResponse.data
//             for (let i = 0; i < data.length; i++) {
//                 sumRevenue+= data[i].amount 
//         }
//     })
//     const payResponse = axios.get('http://localhost:3000/trades/?type=chi').then((res) => {
//             let data = payResponse.data
//             for (let i = 0; i < data.length; i++) {
//                 sumPay+= data[i].amount 
//         }
//     })
//     totalMoney = sumRevenue - sumPay
//     let str =`<p class="mb-2">Today Money</p>
//             <h6 class="mb-0">$ ${totalMoney}</h6>`

//     console.log("totalMoney")
//     console.log(totalMoney)

//     document.getElementById('totalMoney').innerHTML = str
// }

async function totalMoney() {
    let sumRevenue = 0;
    let sumPay = 0;
    let totalMoney = 0;
    
  
    try {
      const revenueResponse = await axios.get('http://localhost:3000/trades/?type=thu');
      const revenueData = revenueResponse.data;
      for (let i = 0; i < revenueData.length; i++) {
        sumRevenue += revenueData[i].amount;
      }
  
      const payResponse = await axios.get('http://localhost:3000/trades/?type=chi');
      const payData = payResponse.data;
      for (let i = 0; i < payData.length; i++) {
        sumPay += payData[i].amount;
      }
      totalMoney = sumRevenue-sumPay ;
      let str = `<p class="mb-2">Total Balance</p>
              <h6 class="mb-0">$ ${totalMoney}</h6>`;

        console.log("totalMoney");
        console.log(totalMoney);
        console.log(str);

      document.getElementById('totalMoney').innerHTML = str;
    } catch (error) {
      console.error(error);
    }
  }