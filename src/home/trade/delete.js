function deleteTrade(id) {
    console.log('Check')
    axios.delete(`http://localhost:3000/trades/${id}`).then((res) => {
        loadHome();
    })
}