import axios from 'axios'

const URL = 'https://mycroft-test-api.herokuapp.com'

const requestLogIn = async ( {email, password} ) => {
  const token = await axios.post(
    `${URL}/login`, 
    {email, password},
    { headers: {"Content-Type": "application/json"} }
  ).then(res => res.data.token)
  .catch(err => {
    console.log(err)
  })

  return token
}

export default requestLogIn