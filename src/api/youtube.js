import axios from 'axios';


const KEY = 'AIzaSyCGWO6Xmgn9ha8NbV-pyGy6IlTQRBhvuMc';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResult : 5,
        key : KEY
    }
});

