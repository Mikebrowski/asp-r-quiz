import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import Center from '../Center';
import useForm from './useForm';

const getFreshmodel = () =>({
  name:'',
  email:''
})
export default function Login() {
  
  const {
    values,setValues,
    handleInputChange
  } = useForm(getFreshmodel);

  const login = e => {
    e.preventdefault();
    console.log(values);
  }

  return (
    <Center>
      <Card sx={{ width:400}}>

      <Box sx={{'& .MuiTextField-root':{width:'100%'}}}>
      <form noValidate autoComplete='off' onSubmit={login}>
          <TextField label='Name' value={values.name} onChange={handleInputChange} variant='outlined' name='name' />
          <TextField label='Email' value={values.email} onChange={handleInputChange} variant='outlined' name='email' />

          <Button type='submit'variant='contained' sx={{width:'100%'}}>Login</Button>
      </form>
      </Box>
  
      </Card>
    </Center>
  )
}