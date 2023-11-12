"use client";
import UserForm from "@/app/components/UserForm";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { addUser } from "@/redux-toolkit/slices/shoppingSlices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const user = { username: data.username, email: data.email };
    console.log(data);
    dispatch(addUser(user));
    router.push("/cart");
  };
  return (
    <div>
      <h1 className="text-center my-5">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <TextField
            label="Name"
            {...register("username")}
            error={!!errors?.username}
            helperText={errors?.username?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
          <TextField
            label="Email"
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
