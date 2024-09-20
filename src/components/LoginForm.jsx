import axios from "axios"
import { useForm } from "react-hook-form"
import ErrorMessage from '../components/ErrorMessage';
import { useDispatch } from "react-redux";
import { changeloginStatus } from "../features/login/loginSlice";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const dispatch = useDispatch()
  // const onSubmit =(data) => {
  //   axios.post(`http://localhost:3000/auth/login`, data)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

   const onSubmit = (data) => {
    axios.post(`http://localhost:3000/auth/login`,data , {withCredentials: true})
    .then(response => {
    dispatch(changeloginStatus({loggedIn: true, user: response.data}))
    })
    .catch(error=> { dispatch(changeloginStatus[{loggedIn: false, user: null}])
    })
  }
  

  // console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col gap-2 mt-8" onSubmit={handleSubmit(onSubmit)}>


      <label htmlFor="email">Email</label>
      <input className="mb-2 border border-indigo-800 p-2" type="email" id="email" {...register("email", { required: true })} />
      {errors.email && <ErrorMessage type={errors.email.type}  field={"Email"}
      />}

      <label htmlFor="password">Password</label>
      <input className="mb-2 border border-indigo-800 p-2" type="password" id="password" {...register("password", { required: true,pattern:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
       })} />
      {errors.password && <ErrorMessage type={errors.password.type}  field={"Password"}/>}
    
     

      <input className="mt-6 p-2 bg-indigo-800 text-white rounded hover:bg-indigo-700" type="submit" />
    </form>
  )
}