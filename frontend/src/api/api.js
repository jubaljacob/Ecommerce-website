import axios from 'axios';

export const fetchUsers = async () => {
    const response = await axios.get('/api/users/');
    return response.data;
  };