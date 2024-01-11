import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, FormLabel, FormControlLabel, TextField } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const BookDetail = () => {

  const { id } = useParams();
  // console.log(id)

  const [input, setInput] = useState({});
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => res.data)
      .then(data => setInput(data))
    }

    fetchHandler()

  }, [id])

  

  const sendRequest = async () => {

    await axios.put(`http://localhost:5000/books/${id}`, {

      bName: String(input.bName),
      author: String(input.author),
      description: String(input.description),
      price: String(input.price),
      image: String(input.image),
      available: Boolean(checked)

    }).then((res) => res.data)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/books'))
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <>

      <form onSubmit={handleSubmit}>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          maxWidth={700}
          alignContent={'center'}
          alignSelf={'center'}
          marginLeft={'auto'}
          marginRight={'auto'}
          marginTop={10}
        >

          <FormLabel>Name</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.bName}
            fullWidth
            variant='outlined'
            name='bName'
          />

          <FormLabel>Author</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.author}
            fullWidth
            variant='outlined'
            name='author'
          />

          <FormLabel>Description</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.description}
            fullWidth
            variant='outlined'
            name='description'
          />

          <FormLabel>Price</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.price}
            fullWidth
            variant='outlined'
            name='price'
          />

          <FormLabel>Image</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.image}
            fullWidth
            variant='outlined'
            name='image'
          />

          <FormControlLabel control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          } label="Available" />

          <Button type={'submit'} variant={'contained'}>Add Book</Button>





        </Box>



      </form>


    </>
  )
}

export default BookDetail