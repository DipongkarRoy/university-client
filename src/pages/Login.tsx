import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/AuthSlice";
import { verifyToken } from "../utils/verifyToken";
//import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";

type TData = {
  id: string;
  password: string;
};
const Login = () => {

  //const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TData>();

  const [login, { data, isError, error }] = useLoginMutation();
  console.log(data);
  console.log("error=>", error);

  if (isError) {
    console.log(isError);
  }

  const onSubmit = async (data: TData) => {
    const toastId =toast.loading('login success message')
    try{
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user ,'user info');
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('login success message',{id:toastId})
      //navigate(`{/${user.role}/dashboard}`);
    }catch(error){
      toast.error('login failed message')
    }
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
