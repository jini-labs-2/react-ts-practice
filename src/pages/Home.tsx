import React, { useEffect, useState } from 'react'

interface User {
  name: string;
  age: string;
};

function fetchDataFromServer(value: string) {
  console.log("fetch data.!");
  const users: User[] = [
    { name: "tanaka", age: "52" },
    { name: "sato", age: "48" },
    { name: "saito", age: "39" },
    { name: "kinosita", age: "51" },
    { name: "suzuki", age: "50" },
  ];

  if (!value) return [];

  return users.filter(user => user.name.includes(value))
}

const Home = () => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDevouncedInput] = useState(input);
  const [fetched, setFetched] = useState<User[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('call callback');
      setDevouncedInput(input);
    }, 1000);

    // cleanup function
    return () => {
      clearTimeout(timerId);
    }
  }, [input]);

  useEffect(() => {
    const users = fetchDataFromServer(debouncedInput);
    setFetched(users);
  }, [debouncedInput])
  
  return (
    <div className='container'>
      <div className='search-container'>
        <input
          placeholder='検索名前を入力してください。'
          value={input}
          onChange={(event) => {
            console.log('input changed')
            setInput(event.target.value)
          }}
        />
        <ul>
          {fetched.map((user) => (
            <li key={user.name}>
              <span> {user.name} </span>
              <span> {user.age} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home
