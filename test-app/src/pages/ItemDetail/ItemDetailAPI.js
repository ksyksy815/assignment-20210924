import axios from 'axios'

const URL = 'https://mycroft-test-api.herokuapp.com'

export const getItemDetail = async (itemId) => {
  const itemDetail = await axios.get(`${URL}/order/${itemId}`)
  .then(res => res.data)
  .catch(err => console.log(err))

  return itemDetail
}

export default getItemDetail