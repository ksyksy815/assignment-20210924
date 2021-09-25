import axios from 'axios'

const URL = 'https://mycroft-test-api.herokuapp.com'

const requestSignUp = async (body) => {
  const token = await axios.post(
    `${URL}/sign-up`, 
    body,
    { headers: {"Content-Type": "application/json"} }
  ).then(res => res.data.token)
  .catch(err => console.log(err))

  return token
}

export default requestSignUp