import { createContext, useReducer, useState } from "react"
import { useHistory } from "react-router-dom"




function reducer(state, action) {
    switch (action.type) {
        case "TOKEN_LOGIN":
            return {
                ...state,
                user: { username: action.user.username, id: action.user.id, created: action.user.created },
                error: false
            }
        case "LOGIN_USER":
            return {
            ...state,
            user: {username: action.user.username, id: action.user.id, name: action.user.name, created: action.user.created},
            error: false
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: false,
                error: false
                }
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                signUpSuccess: action.payload
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
        error: false,
        signUpSuccess: false
    })

    const { user, signUpSuccess } = state

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
                } else {
                    const user = data.user
                    dispatch({type:"LOGIN_USER", user })
                    localStorage.setItem("token", data.jwt)
            
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
                        }
                         }) 
            }
        
    const history = useHistory()
        const logout = () => {
            const token = localStorage.getItem("token")
            window.localStorage.removeItem("token")
            dispatch({type:"LOGOUT_USER"})
        }

        const signUp = (userInfo) => {
           
            fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: {...userInfo}})
            })
            .then(r => r.json())
            .then(data => {
                 if (!data.user) {
                    alert(data.message)
                } else {
                    const user = data.user
                    dispatch({type:"LOGIN_USER", user })
                    localStorage.setItem("token", data.jwt)
                    dispatch({type:"SIGN_UP_SUCCESS", payload: true})
                    }
                     })
        }

        const setSignUpSuccess = (bool) => {
            dispatch({ type: "SIGN_UP_SUCCESS", payload: bool})
        }



    const value = { user, signUp, signUpSuccess, setSignUpSuccess, login, tokenLogin, logout} 

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