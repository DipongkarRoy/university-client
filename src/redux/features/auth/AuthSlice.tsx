import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../types";
import { RootState } from "../../store";




type TAuthState = {
    user: null |TUser;
    token: string|null;
};

const initialState:TAuthState ={
    user:null,
    token:null,
}
const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser :(state ,action)=>{
            const {user ,token}= action.payload;
            state.user = user;
            state.token = token;
        },
        logOut:(state)=>{
            state.user = null;
            state.token = null;
        }
    }
})

export const {setUser,logOut} = AuthSlice.actions;

export default AuthSlice.reducer;

export const useCurrentToken = (state:RootState)=>state.auth.token;
export const useCurrentUser = (state:RootState)=>state.auth.user;

