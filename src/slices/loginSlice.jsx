import { createSlice } from "@reduxjs/toolkit"; 

const initState = {
    email: ''
}

const loginSlice = createSlice({
    name: 'LoginSlice', 
    initialState: initState, 
    
    reducers: {
        login: (state, action) => {
            console.log("login.....", action)
            console.log(action.payload)
            console.log("--------------------------------")
            return {email: action.payload.email}
        },
        logout: (state, action) => {
            console.log("logout....") 

            return {...initState}
        }
    }
})

export const { login, logout } = loginSlice.actions 

export default loginSlice.reducer