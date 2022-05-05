
import { useState } from 'react';

export default function useForm(getFreshmodel) {

const [values,setValues] = useState(getFreshmodel());
const [errors,setErrors] = useState({});

const handleInputChange = e =>{
    const {name, value} = e.target
    setValues({
        ...value,
        [name]:value
    })
}

  return (
    values,setValues,
    errors,setErrors,
    handleInputChange
  )
}
