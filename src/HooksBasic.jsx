import React, { useState } from 'react';

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h3>{title}</h3>
      <button type="button" onClick={increment}>+</button>
      <p>{count}</p>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

const HooksName = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const changeEmail = (em) => setEmail(em);

  return (
    <>
      <button type="button" onClick={() => setName('hello')}>click</button>
      <p>{name}</p>
      <button type="button" onClick={() => changeEmail('chaalpritam@gmail.com')}>click</button>
      <p>{email}</p>
    </>
  );
};

const HooksToogle = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle(!toggle);

  return (
    <>
      <button type="button" onClick={() => changeToggle()}>toggle</button>
      {toggle ? <p>Clik toggle button</p> : <p>UnClick toggle button</p>}
    </>
  );
};

const HooksForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email);
  };

  return (
    <form>
      <input name="username" type="text" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input name="email" type="email" placeholder="Enter Your Email" value={email} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const useInputValue = (val) => {
  const [value, setValue] = useState(val);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const CustomHooksForm = () => {
  const username = useInputValue('');
  const email = useInputValue('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.value, email.value);
  };

  return (
    <form>
      <input name="username" type="text" placeholder="Enter Your Username" {...username} />
      <input name="email" type="email" placeholder="Enter Your Email" {...email} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const HooksBasic = () => (
  <>
    <Counter />
    <HooksName />
    <HooksToogle />
    <HooksForm />
    <CustomHooksForm />
  </>
);

export default HooksBasic;
