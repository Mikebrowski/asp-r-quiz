import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import Center from './Center';
import { useForm } from 'react-hook-form';



export default function Login() {
  
  const {register, handleSubmit} = useForm()

  const x = (data) => { 
    console.log(data)
  }


  return (
    <Center>
      <Card sx={{ width:400}}>

      <Box sx={{'& .MuiTextField-root':{width:'100%'}}}>
      <form autoComplete='off' onSubmit={handleSubmit(x)}>
          <TextField label='Name'  variant='outlined' name='name' {...register('name', { required: true })} />
          <TextField label='Email'   variant='outlined' name='email' {...register('email', { required: true })}/>

          <Button type='submit'variant='contained' sx={{width:'100%'}}>Login</Button>
      </form>
      </Box>
  
      </Card>
    </Center>
  )
}