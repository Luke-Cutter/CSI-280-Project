import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DjangoTest() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/')
      .then(response => {
        setMessage(response.data.user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Dev Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default DjangoTest;