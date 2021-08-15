import axios from 'axios';

const back = axios.create({
    baseURL:''
})

const getinfo = () => {
    return back.get('/info/')
}

export default getinfo