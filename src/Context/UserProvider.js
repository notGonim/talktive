import { createContext, useContext, useReducer } from "react";




export const UserContext = createContext()
//setup  layout
export const StateProvider = ({ reducer, initialState, children }) => (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </UserContext.Provider>
)

// pull theses layout
export const useStateValue = () => useContext(UserContext)

 