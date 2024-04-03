import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DjangoTest() {
  const [resMessage, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/dbTest/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Dev Test</h1>
      <p>{resMessage}</p>
    </div>
  );
}

export default DjangoTest;