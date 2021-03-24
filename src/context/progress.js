import { createContext, useState, useReducer } from "react"
import { useHistory } from "react-router-dom"

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_INITIAL_PROGRESS":
            return {
                ...state,
                progressArray: action.payload.progressArr,
                currentMonthProgress: action.payload.progressArr,
                habitArray: action.payload.habitArr, 
                loaded: true
                // habits: action.progressArr
            }
        case "UPDATE_PROGRESS":
            return { 
                ...state,
                currentMonthProgress: state.currentMonth.map(progress => {
                    if (progress.id === action.progress.id){
                       return action.progress
                     } else { 
                      return progress }
                   }), 
                allProgress: state.allProgress.map(progress => {
                    if (progress.id === action.progress.id){
                       return action.progress
                     } else { 
                      return progress }
                   }), 
                progressArray: state.progressArray.map(progress => {
                if (progress.id === action.progress.id){
                   return action.progress
                 } else { 
                  return progress }
               }) 
            }
        case "LOGOUT":
            return { 
                currentMonthProgress: [],
                allProgress: [],
                progressArray: [],
                habitArray: [], 
                loaded: false
            }
        default:
            return state
    }
}


// create the context object
const ProgressContext = createContext()

// create the context provider component
function ProgressProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        currentMonthProgress: [],
        allProgress: [],
        progressArray: [],
        habitArray: [], 
        loaded: false
    })

    const { progressArray, habitArray, loaded } = state

    const history = useHistory()

    const fetchProgress = (userId, month) => {
        console.log("fetching progress")
        fetch('http://localhost:3000/user_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
        body: JSON.stringify({
            id: userId, 
            currentMonth: month
            })
        })
        .then(r => r.json())
        .then(progressArray => {
            const names = progressArray.map(progress => {
                return progress.habit.name
               })
            const nameArr = [...new Set(names)]
            dispatch({type:"FETCH_INITIAL_PROGRESS", payload: {progressArr: progressArray, habitArr: nameArr}})
                })        
            }
    
    const updateProgress = (progressId, status, e) => {
        fetch(`http://localhost:3000/progresses/${progressId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
                completed: status
            })
          })
            .then(r => r.json())
            .then(progress => 
                {
                console.log(progress)
                console.log("status is", progress.completed)
                dispatch({type:"UPDATE_PROGRESS", progress})
            })
            .catch(() => {
                e.target.dataset.status = "test"
                alert("Error updating habit.")
                history.push('/login')

            }
                )
    }
    
    
    const resetProgress = () => {
        dispatch({ type:"LOGOUT" })
    }

    const value = { progressArray, habitArray, loaded, resetProgress, fetchProgress, updateProgress }


    return (
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
    )
}






// export
export { ProgressContext, ProgressProvider }








// // create the context object
// const ProgressContext = createContext()

// // create the context provider component
// function ProgressProvider({ children }) {

//     const [progressArray, setProgressArray] = useState([])
//     const value = [progressArray, setProgressArray]

    

//     return (
//     <ProgressContext.Provider value={value}>
//         {children}
//     </ProgressContext.Provider>
//     )
// }



// HOW IT WAS BEFORE 

// function reducer(state, action) {
//     switch (action.type) {
//         case "FETCH_INITIAL_PROGRESS":
//             return {
//                 progressArray: action.payload.progressArr,
//                 habitArray: action.payload.habitArr, 
//                 loaded: true
//                 // habits: action.progressArr
//             }
//         case "UPDATE_PROGRESS":
//             return { 
//                 ...state,
//                 progressArray: state.progressArray.map(progress => {
//                 if (progress.id === action.progress.id){
//                    return action.progress
//                  } else { 
//                   return progress }
//                }) 
//             }
//         case "LOGOUT":
//             return { 
//                 progressArray: [],
//                 habitArray: [], 
//                 loaded: false
//             }
//         default:
//             return state
//     }
// }

