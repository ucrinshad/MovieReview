import React from "react";
import { useForm } from "react-hook-form";

export default function Signup ()  {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name", {required:true})} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="email">Email</label>
      <input id="email" {...register("email", { required: true })} />
      
      <label htmlFor="password">Password</label>
      <input id="password" {...register("password", { required: true })} />

      {/* errors will return when field validation fails  */}
      {/*errors.exampleRequired && <span>This field is required</span>*/}
      
      <input type="submit" />
    </form>
  );
}