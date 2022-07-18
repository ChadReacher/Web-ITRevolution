import React from 'react'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { Modal } from '../../components'
import { FormHelperText, Button } from '@mui/material'
// Hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { updateUser } from './../../store/auth/slice';
// Styles
import './profile.css'
import { useDispatch } from 'react-redux';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().required(),
}).required();

const Profile = () => {

  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const dispatch = useDispatch()

  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = data => {
    dispatch(updateUser(data))
    handleClose()
  }


  return (
    <>
      <div>
        <header className="header">
          <div className="row">
            <h1 className="header__title">User profile</h1>
            <div className='row_profile' onClick={handleOpen}>
              UPDATE PROFILE
              <UpgradeIcon sx={{ color: '#fff' }} />
            </div>
          </div>
        </header>
        <main className="main">
          <div className="data">

            <h1 className="title__data">User data</h1>


            <div className="photo">
              AV
            </div>
            <ul className="user__data">
              <li className="data__item">Email</li>
              <li className="data__user">petrov@gmail.com</li>
              <li className="data__item">Name</li>
              <li className="data__user">Ivan</li>
              <li className="data__item">Last name</li>
              <li className="data__user">Ivanov</li>
              <li className="data__item">Age</li>
              <li className="data__user">17</li>
              <li className="data__item">Gender</li>
              <li className="data__user">Male</li>
            </ul>
          </div>
        </main>
      </div>
      
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="form__title">
           Update profile
          </h1>
          <p className="form__description">
           Input your valid data
          </p>
          <div className="row">
            <div>
              <input
                id="firstName"
                type="text"
                className="name-field"
                placeholder="Enter first name"
                {...register("firstName")}
              />
            </div>

            <div>
              <input
                id="lastName"
                type="text"
                className="surname-field"
                placeholder="Enter last name"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="row">
            <FormHelperText sx={{ color: 'red' }}>{errors.firstName?.message}</FormHelperText>
            <FormHelperText sx={{ color: 'red' }}>{errors.lastName?.message}</FormHelperText>
          </div>

          <input id="gender" type="text" className="gender-field" placeholder="Enter gender" {...register("gender")} />
          <FormHelperText sx={{ color: 'red' }}>{errors.gender?.message}</FormHelperText>
          <input id="age" type="text" className="age-field" placeholder="Enter age"  {...register("age")} />
          <FormHelperText sx={{ color: 'red' }}>{errors.age?.message}</FormHelperText>
          <Button variant="contained" className="submit_button" disabled={!isDirty || !isValid} type="submit" sx={{backgroundColor: '#53db47'}}>Update</Button>
        </form>
      </Modal>
    </>
  )
}

export default Profile