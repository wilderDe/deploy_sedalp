import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { authSlice } from "./AuthSlice";
import { cursoSlice } from "./cursoSlice";
import { eventoSlice } from "./eventoSlice";
import { normativaSlice } from "./normativaSlice";


export const store = configureStore({

    reducer:{
        auth: authSlice.reducer,
        users: userSlice.reducer,
        curso: cursoSlice.reducer,
        evento: eventoSlice.reducer,
        normativa: normativaSlice.reducer,
    }

})