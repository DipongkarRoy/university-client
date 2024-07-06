import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/verifyToken";

type TData = {
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TData>();

  const [login, { data, isError, error }] = useLoginMutation();
  console.log(data);
  console.log("error=>", error);

  if (isError) {
    console.log(isError);
  }

  const onSubmit = async (data: TData) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({user:user,token:res.data.accessToken}))
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id")} />
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
};

export default Login;
