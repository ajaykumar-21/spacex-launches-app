import axios from 'axios';

export const fetchLaunches = async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/launches');
    return response.data;
  } catch (error) {
    console.error("Error fetching the SpaceX launches", error);
    throw error;
  }
};
