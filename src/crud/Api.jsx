import axios from 'axios';


    const apiData=`http://localhost:5000/data`

  const  getNames = async () => {
    return await axios.get(`${apiData}`)
}


    export default getNames

