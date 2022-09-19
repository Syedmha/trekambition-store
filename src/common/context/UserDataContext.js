import { createContext, useContext, useReducer } from "react";
import { userDataReducer } from "../../reducers/userDataReducer";

const initialUserData = {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cart: [],
    wishList: [],
    addresses: []
}

const UserDataContext = createContext(initialUserData);

const useUserData = () => useContext(UserDataContext);

const UserDataContextProvider = ({ children }) => {

    const [userDataState, userDataDispatch] = useReducer(userDataReducer, initialUserData)


    return (
        <UserDataContext.Provider value={{ userDataState, userDataDispatch }}>
            {children}
        </UserDataContext.Provider>
    )
}

export { useUserData, UserDataContextProvider };