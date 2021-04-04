import React, { useState } from 'react';
import axios from 'axios'

function getJson1() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      console.log(res.data)

    })
    .catch(err => console.log(err))
}

function getJson2() {
  axios
    .get('https://cat-fact.herokuapp.com/facts/')
    .then(res => {
      console.log(res.data)

    })
    .catch(err => console.log(err))
}

export default function Example() {
  const [json1, setJson1] = useState(0);
  //const [json2, setJson2] = useState({});
  return (
    <div>
      <p> {json1} </p>
      <button onClick={ getJson1 }>
        json placeholder
      </button>
      <div>
        <p> {json1} </p>
        <button onClick={ getJson2 }>
          json placeholder
        </button>
      </div>
    </div>
  );
}
