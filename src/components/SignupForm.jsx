import axios from "axios"
import { useForm } from "react-hook-form"
import ErrorMessage from '../components/ErrorMessage';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    axios.post('http://localhost:3000/users',data)
    .then(response => console.log("Signed up"))
    .catch(error=> console.log("signup failed"))
  }
    

  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col gap-2 mt-8" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="name">Name</label>
      <input  className="mb-2 border border-indigo-800 p-2" type="text" id="name" {...register("name", { required: true,maxLength:10 })} />
      {errors.name && <ErrorMessage type={errors.name.type}  field={"Name"}
      />}
      

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