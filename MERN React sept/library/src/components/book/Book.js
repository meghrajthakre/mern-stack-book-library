import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './book.css';
import axios from 'axios';

const Book = (props) => {

  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const { _id, bName, author, description, price, image } = props.book

  const deleteHandler = async () => {

      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => navigate('/'))
      // .then(() => navigate1('/books'))

  }


  return (
    <div className='card'>

      <img src={image} height={300} width={200} alt='bookName' />
      <article>By {author}</article>
      <h3>{bName}</h3>
      <p>{description}</p>
      <h2>Rs. {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`}  >Update</Button>
      <Button onClick={deleteHandler} >Delete</Button>

    </div>
  )
}

export default Book