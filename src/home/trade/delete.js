function deleteTrade(id) {
    axios.delete(`http://localhost:3000/trades/${id}`).then((res) => {
        listTrade();
    })
}