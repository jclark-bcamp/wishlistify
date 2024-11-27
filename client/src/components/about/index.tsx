import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../../middleware/auth';

const About = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (Auth.loggedIn()) {
      setLoginCheck(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

 
  return (
    <section>
      <h2>About!</h2>
    </section>
  );
}

export default About;