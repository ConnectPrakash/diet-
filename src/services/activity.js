import axios from 'axios';

const API_URL = 'https://died-backend-1.onrender.com/api'; // Replace with your actual API URL

const getActivities = async (token) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error;
    }
};

export default {
    getActivities,
};
