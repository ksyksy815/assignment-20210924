import axios from 'axios'

const URL = 'https://mycroft-test-api.herokuapp.com'

export const getOrderList = async (currentPage) => {
  const orderList = await axios.get(`${URL}/order?page=${currentPage}`)
  .then(res => res.data)
  .catch(err => console.log(err))

  return orderList
}

export default getOrderList