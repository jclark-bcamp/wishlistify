import { useState, FormEvent } from 'react';


// const GiftList = () => {
//   // States
//   const [gift, setGift] = useState<string>(''); // Individual gift input
//   const [price, setPrice] = useState<number | ''>(''); // Price input
//   const [gifts, setGifts] = useState<{ gift: string; price: number }[]>([]); // List of gifts

function GiftList() {
  const [gift, setGift] = useState<string>('');
  const [price, setPrice] = useState<number | ''>('');
  const [gifts, setGifts] = useState<{ gift: string; price: number }[]>([]);

  // Handle form submission
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    if (!gift || !price || price <= 0) {
      alert('Please enter a valid gift and price.');
      return;
    }

    // const newGift = auth.getProfile().username;

    // try {
    //   await addGift({ gift, price });
    //   Navigate('/');
    // } 
    
    // catch (err) {
    //   console.error('Failed to add gift:', err);
    // }

    // Add the new gift to the list
    setGifts((prevGifts) => [...prevGifts, { gift, price: Number(price) }]);

    // Reset form fields
    setGift('');
    setPrice('');
  };

  return (
    <section>
      <form id="giftForm" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="gift">Gift:</label>
          <input
            type="text"
            id="gift"
            name="gift"
            value={gift}
            onChange={(e) => setGift(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Add Gift</button>
      </form>

      <h2>Gift List</h2>
      <ul>
        {gifts.map((item, index) => (
          <li key={index}>
            {item.gift} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </section> 
  );
}

export default GiftList;