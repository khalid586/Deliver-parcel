import axios from "axios"

export default function SaveData(name,email) {
    const userData = {
        name,email
    }
    console.log(name,email)
    axios.post('https://b9a12-server-side-khalid586.vercel.app/users',userData)
    .then(({data})=> console.log(data))

}
