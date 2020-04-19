import axios from 'axios'
const serverUrl = 'http://localhost:3001/persons'


const getNumbers = () => {

    return  axios.get(serverUrl)
    
  }

  const addNumber = (blog) => {

    return axios.post(serverUrl, blog)
    
  }

  const removeNumber= id => {


    return axios.delete(`${serverUrl}/${id}`, id)
  }

  export default { getNumbers, addNumber,removeNumber }