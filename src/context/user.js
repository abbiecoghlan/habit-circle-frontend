import { createContext, useReducer, useState } from "react"


function reducer(state, action) {
    switch (action.type) {
        // case "LOGIN_FROM_TOKEN":
        //     console.log("automatic login from token")
        //     return {
        //         user: { username: action.}
        //     }
        case "LOGIN_USER":
            console.log("LOGIN_USER")
            return {
            user: {username: action.user.username, id: action.user.id},
            habits: action.user.habits
            }
        case "LOGOUT_USER":
            console.log("LOGOUT USER")
            return {
                habits: [],
                user: false
                }
        default:
            return state;
    }
}

// create the context object
const UserContext = createContext()

// create the context provider component
function UserProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        user: false,
        habits: []
    })

    const { user, habits } = state

    const login = (userInfo) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userInfo)
            })
            .then(r => r.json())
            .then(data => {
                if (!data.user) {
                    alert("Wrong username or password. Please check your credentials and try again.")
                } else {
                    const user = data.user
                    dispatch({type:"LOGIN_USER", user })
                    }
                     }) 

        }


    const value = { user, habits, login} 

    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
}

// export
export { UserContext, UserProvider }




// PREVIOUS 
// create the context object
// const UserContext = createContext()

// create the context provider component
// function UserProvider({ children }) {

//     const [currentUser, setCurrentUser] = useState([])
//     const value = [currentUser, setCurrentUser]

//     return (
//     <UserContext.Provider value={value}>
//         {children}
//     </UserContext.Provider>
//     )
// }