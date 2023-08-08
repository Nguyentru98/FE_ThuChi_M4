function totalPay() {
    axios.get('http://localhost:3000/trades/?type=2').then((res) => {
        let data = res.data
        let sumPay = 0;
        for (let i = 0; i < data.length; i++) {
            sumPay+= data[i].amount 
        }
        

        let str = `
        <p class="mb-2">total Pay</p>
        <h6 class="mb-0">$ ${sumPay}</h6>`
        document.getElementById('chi').innerHTML = str

    })
}

function totalRevenue() {
    axios.get('http://localhost:3000/trades/?type=1').then((res) => {
        let data = res.data
        let sumRevenue = 0;
        for (let i = 0; i < data.length; i++) {
            sumRevenue+= data[i].amount 
        }
        let str = `
        <p class="mb-2">total Revenue</p>
        <h6 class="mb-0">$ ${sumRevenue}</h6>`
        document.getElementById('thu').innerHTML = str

    })
}

async function totalMoney() {
    let sumRevenue = 0;
    let sumPay = 0;
    let totalMoney = 0;
    
  
    try {
      const revenueResponse = await axios.get('http://localhost:3000/trades/?type=1');
      const revenueData = revenueResponse.data;
      for (let i = 0; i < revenueData.length; i++) {
        sumRevenue += revenueData[i].amount;
      }
  
      const payResponse = await axios.get('http://localhost:3000/trades/?type=2');
      const payData = payResponse.data;
      for (let i = 0; i < payData.length; i++) {
        sumPay += payData[i].amount;
      }
      totalMoney = sumRevenue-sumPay ;
      let str = `<p class="mb-2">Total Balance</p>
              <h6 class="mb-0">$ ${totalMoney}</h6>`;

      document.getElementById('totalMoney').innerHTML = str;
    } catch (error) {
      console.error(error);
    }
  }