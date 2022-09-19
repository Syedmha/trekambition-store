import { createContext, useContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();

const useAuth = () => useContext(AuthenticationContext);

const AuthenticationContextProvider = ({ children }) => {
    const [userAuthToken, setUserAuthToken] = useState("");
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const localStorageAuth = localStorage.getItem("authToken");
        if (localStorageAuth) {
            setUserAuthToken(localStorageAuth);
            setIsUserAuthenticated(true);
        }
    }, []);

    return (
        <AuthenticationContext.Provider value={{ userAuthToken, setUserAuthToken, isUserAuthenticated, setIsUserAuthenticated }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { useAuth, AuthenticationContextProvider };