import axios from "axios"

export default function SaveData(name,email) {
    const userData = {
        name,email
    }
    console.log(name,email)
    axios.post('http://localhost:5007/users',userData)
    .then(({data})=> console.log(data))

}
