import axios from "axios";

export async function createUser(data) {
    const res = await axios.post("http://127.0.0.10:8000/api/users", data);
    console.log(res);
}
