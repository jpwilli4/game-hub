import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a212431eab6a40b18ea918ae90e30a47'
  }
});
