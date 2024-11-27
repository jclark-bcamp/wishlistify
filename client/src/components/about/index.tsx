import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../../middleware/auth';

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (Auth.loggedIn()) {

      // Anytime you need the current user info, use Auth.getProfile()
      console.log("USER INFO", Auth.getProfile())
    } else {
      navigate('/login');
    }
  }, [navigate]);

 
  return (
    <section>
      <h2>Welcome {Auth.getProfile().email}</h2>
    </section>
  );
}

export default About;