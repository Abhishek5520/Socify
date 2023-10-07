import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "62bb0c8bb8c18331ba9910a0",
        username: "Jack",
        email: "jack@gmail.com",
        profilePicture: "persons/p2.jpg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        following: [],
        city: "Mumbai",
        desc: "Welcome to my Page",
        from: "Delhi",
        relationship: "1"

    },
    isFetching:false,
    error:false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return(
        <AuthContext.Provider value={{user:state.user, 
        isFetching:state.isFetching, 
        error:state.error,
        dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}