import axios from "axios";

// za konkretni backend
let Service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000
})

//fali posts

export { Service }