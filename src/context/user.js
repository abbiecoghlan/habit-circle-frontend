import { createContext, useReducer, useState } from "react"
import { useHistory } from "react-router-dom"




function reducer(state, action) {
    switch (action.type) {
        case "TOKEN_LOGIN":
            console.log("automatic login from token")
            return {
                user: { username: action.user.username, id: action.user.id },
                habits: action.user.habits,
                error: false
            }
        case "LOGIN_USER":
            console.log("LOGIN_USER")
            return {
            user: {username: action.user.username, id: action.user.id},
            habits: action.user.habits,
            error: false
            }
        case "LOGOUT_USER":
            console.log("LOGOUT USER")
            return {
                habits: [],
                user: false,
                error: false
                }
        // case "LOGIN_ERROR":
        //     return {
        //         habits: [],
        //         user: false,
        //         error: action.error        
        //         }

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
        habits: [],
        error: false
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
                    alert(data.message)
                    // debugger
                    // alert("Wrong username or password. Please check your credentials and try again.")
                } else {
                    const user = data.user
                    dispatch({type:"LOGIN_USER", user })
                    localStorage.setItem("token", data.jwt)
                    // localStorage.setItem("id", user.id)
                    }
                     }) 
        }


        const tokenLogin = (token) => {
            fetch('http://localhost:3000/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer: ${token}`
                    },
                })
                .then(r => r.json())
                .then(data => {
                    if (!data.user) {
                        // alert("Login from token did not work")
                        console.log("redirect? token login did not retreive user.")
                
                    } else {
                        const user = data.user
                        dispatch({type:"LOGIN_USER", user })
                        localStorage.setItem("token", data.jwt)
                        
                        
                        }
                         }) 
            }
            const history = useHistory()

            const logout = () => {
                
                const token = localStorage.getItem("token")
                window.localStorage.removeItem("token")
                const deleted = localStorage.getItem("token")
                dispatch({type:"LOGOUT_USER"})
            }



    const value = { user, habits, login, tokenLogin, logout} 

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