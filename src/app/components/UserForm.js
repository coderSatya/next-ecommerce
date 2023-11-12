import React from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "@mui/material";
import { Cookies } from "react-cookie";
import { addUser } from "@/redux-toolkit/slices/shoppingSlices";
import { useDispatch } from "react-redux";

const UserForm = () => {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const form = useForm();
  const { handleSubmit, formState, register } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    dispatch(addUser(data));
  };
  return (
    <div>
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div>
          <TextField
            label="Password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            variant="outlined"
            type="password"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Confirm Password"
            {...register("confirmpassword")}
            error={!!errors?.confirmpassword}
            helperText={errors?.confirmpassword?.message}
            variant="outlined"
            type="password"
            sx={{ width: 250 }}
            size="small"
          />
        </div>

        <div>
          <TextField
            label="Phone Number"
            {...register("phone")}
            error={!!errors?.phone}
            helperText={errors?.phone?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Address"
            {...register("address")}
            error={!!errors?.address}
            helperText={errors?.address?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <div>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
