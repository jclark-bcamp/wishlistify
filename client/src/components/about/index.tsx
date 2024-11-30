import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../../middleware/auth';

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


//  NEED SOME KIND OF CONDITIONAL STATEMENT. IF LOGGED IN, DISPLAY WELCOME MESSAGE. IF NOT, REDIRECT TO LOGIN PAGE.
  return (
    <>
      <section>
      {/* {
      if (Auth.loggedIn()) {
      <h2>Welcome {Auth.getProfile().email}</h2>
    } else {
      navigate('/login');
    }}; */}
        {/* <h2>Welcome {Auth.getProfile().email}</h2> */}
      </section>
    </>
  );
}

export default About;