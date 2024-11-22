import { ChangeEvent, FormEvent, useState } from 'react';
// import errorPage from '/pages/errorPage.tsx';

const About = () => {

  const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [error, setError] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const inputType = name;
    const inputValue = value;
    if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (!email || !userPassword) {

      return;
    }
    // Reset the form fields
    setEmail("");
    setUserPassword("");
  }

  return (
    <section>
      <h2>Login to start a list!</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            value={userPassword}
            onChange={handleInputChange}
          />
        </div>
        {/* {TODO: Render error page} */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default About;