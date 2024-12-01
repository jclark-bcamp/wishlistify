import { GiftData } from '../interfaces/GiftData';
import Auth from '../middleware/auth';

const retrieveGifts = async () => {
  try {
    const response = await fetch(
      '/api/giftapi',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      }
    );
    const data = await response.json();

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval: ', err);
    return [];
  }
};

const retrieveGift = async (id: number | null): Promise<GiftData> => {
  try {
    const response = await fetch(
      `/api/Gifts/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      }
    );

    const data = await response.json();

    if(!response.ok) {
      throw new Error('Could not invalid API response, check network tab!');
    }
    return data;
  } catch (err) {
    console.log('Error from data retrieval: ', err);
    return Promise.reject('Could not fetch singular Gift');
  }
}

const createGift = async (body: GiftData) => {
  try {
    const response = await fetch(
      '/api/Gifts/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer `
          },
        body: JSON.stringify(body)
      }

    )
    const data = response.json();

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Gift Creation: ', err);
    return Promise.reject('Could not create Gift');
  }
}

const updateGift = async (GiftId: number, body: GiftData): Promise<GiftData> => {
  try {
    const response = await fetch(
      `/api/Gifts/${GiftId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        },
        body: JSON.stringify(body)
      }
    )
    const data = await response.json();

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Update did not work', err);
    return Promise.reject('Update did not work');
  }
};

const deleteGift = async (GiftId: number): Promise<GiftData> => {
  try {
    const response = await fetch(
      `/api/Gifts/${GiftId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      }
    )
    const data = await response.json();

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error in deleting Gift', err);
    return Promise.reject('Could not delete Gift');
  }
};


export { createGift, deleteGift, retrieveGifts, retrieveGift, updateGift};
