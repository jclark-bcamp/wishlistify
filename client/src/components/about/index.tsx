import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../../middleware/auth';
import GiftList from "../giftinput";

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAuthStatus = () => {
      if (Auth.loggedIn()) {
        console.log("LOGGED IN");
        // Anytime you need the current user info, use Auth.getProfile()
        console.log("USER INFO", Auth.getProfile());
      } else {
        console.log("NOT LOGGED IN");
        navigate('/login');
      }
    };

    checkAuthStatus();
}, [navigate]);


  return (
    
    <div>
    <section>
      <h2>Welcome {Auth?.getProfile()?.email}</h2>
      <div id="aboutp">
      <p>
        This is a simple wishlist app that allows you to create a list of items you want to buy.
      </p>
      </div>
    </section>
    <h2>Add a Gift!</h2>
    <GiftList />
  </div>
    
  );
}

export default About;