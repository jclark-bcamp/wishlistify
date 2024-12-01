import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGift } from '../api/giftapi';
import Auth from '../middleware/auth';

const EditGift = () => {
  const { state } = useLocation();
  const email = Auth.getProfile();

  const fetchGifts = async () => {
    try {
      const response = await fetch(`/api/user/${email}/gifts`);
      const data = await response.json();
      createGift(data);
    } catch (error) {
      console.error('Error fetching gifts:', error);
    }
  };

  useEffect(() => {
    fetchGifts();
  }, [state]);

  return null;
};

export default EditGift;
