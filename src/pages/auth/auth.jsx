import React from 'react'
// Styles
import { Link } from 'react-router-dom';
import { Button, FormHelperText, CircularProgress, Box } from '@mui/material';
// Hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// Store
import { useDispatch, useSelector } from 'react-redux';
import { auth, selectAuthLoading, selectAuthError } from './../../store/auth/slice';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
}).required();



const Auth = () => {

  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(auth(data))
  }

  const loading = useSelector(selectAuthLoading);
  const errorAuth = useSelector(selectAuthError);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 30 }}>
      <CircularProgress />
    </Box>
  }

  return (
    <div>
      <Link className="button__in" to="/">Sign up</Link>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">
          Sign in
        </h1>
        <p className="form__description">
          Sign in and start managing your candidates!
        </p>
        {errorAuth ? <FormHelperText sx={{ color: 'red', fondSize: 20, textAlign: 'center' }}>Password or email is incorrect</FormHelperText> : null}
        <input id="email" type="email" className="email-field" placeholder="Enter E-mail"  {...register("email")} />
        <FormHelperText sx={{ color: 'red' }}>{errors.email?.message}</FormHelperText>
        <input id="password" type="password" className="password-field" placeholder="Enter password" {...register("password")} />
        <FormHelperText sx={{ color: 'red' }}>{errors.password?.message}</FormHelperText>
        <Button variant="contained" className="submit_button" disabled={!isDirty || !isValid} type="submit">Sign in</Button>
      </form>
    </div>
  )
}


export default Auth
