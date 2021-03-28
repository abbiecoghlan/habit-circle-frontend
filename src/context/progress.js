import { createContext, useState, useReducer } from "react"
import { useHistory } from "react-router-dom"

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_INITIAL_PROGRESS":
            return {
                ...state,
                activeMonthProgress: action.payload.activeProg,
                activeMonthHabits: action.payload.activeHabitNames,
                allProgress: action.payload.allProgress,
                loaded: true
            }
        case "UPDATE_PROGRESS":
            return { 
                ...state,
                activeMonthProgress: state.activeMonthProgress.map(progress => {
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
                   }) 
            }
        case "LOGOUT":
            return {
                allProgress: [],
                activeMonthProgress: [],
                activeMonthHabits: [],
                loaded: false
            }
        case "SET_ACTIVE_MONTH":
            return {
                ...state,
                activeMonthProgress: state.allProgress.filter(progress => {
                    return (progress.day.month == action.payload.month)
                }),
                activeMonthHabits: action.payload.names
            }
        case "CREATE_NEW_MONTH":
            debugger
            return {
                ...state,
                activeMonthProgress: action.payload.newProgress,
                activeMonthHabits: action.payload.activeHabitNames,
                allProgress: [...state.allProgress, ...action.payload.newProgress]
    
            }
        // case "TOGGLE_LOADED":
        //     return {
        //         ...state,
        //         loaded: false
        //     }

        default:
            return state
    }
}


// create the context object
const ProgressContext = createContext()

// create the context provider component
function ProgressProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        activeMonthProgress: [],
        allProgress: [],
        activeMonthHabits: [],
        loaded: false
    })

    const { loaded, activeMonthProgress, allProgress, activeMonthHabits } = state

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
            
            const activeProg = progressArray.filter(progress => {
                return   (progress.day.month == month)
                })
          
            const activeHabitNames =  activeProg.map(progress => {
                return progress.habit.name
               })
               
            const nameArr = [...new Set(activeHabitNames)]
            dispatch({type:"FETCH_INITIAL_PROGRESS", payload: {allProgress: progressArray, activeProg: activeProg, activeHabitNames: nameArr}})
                })        
            }



    // const fetchAllProgress = (userId) => {
    //     console.log("time to fetch all the progress")
    // }            
    
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

            })
    }
    
    const setActiveMonth = (month) => {
        const activeProg = state.allProgress.filter(progress => {        
             return   (progress.day.month == month)
            })
        const activeHabitNames =  activeProg.map(progress => {
            return progress.habit.name
           })          
        const nameArr = [...new Set(activeHabitNames)]
        dispatch({ type:"SET_ACTIVE_MONTH", payload: {month: month, names: nameArr }})

    }
    
    const resetProgress = () => {
        dispatch({ type:"LOGOUT" })
    }


    const createHabits = (array, id, month) => {
        debugger
        fetch('http://localhost:3000/create_month', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              habits: array,
              user_id: id,
              month: month
            })
          })
            .then(r => r.json())
            .then(progressArray => {
                console.table(progressArray)
                debugger 

                const activeHabitNames =  progressArray.map(progress => {
                    return progress.habit.name
                   })
                
                   const nameArr = [...new Set(activeHabitNames)]
                
                const newHabits = progressArray.map(progress => {
                    return progress.habit
                   })
                   
                
                dispatch({type:"CREATE_NEW_MONTH", payload: {newProgress: progressArray, activeHabitNames: nameArr}})
                   
                debugger




                // fetchProgress(id, month)
            })
            // .then(setActiveMonth(month))
    }

    // const toggleLoaded = () => {
    //     dispatch({type:"CREATE_MONTH_SUCCESS"})
    // }




    const value = { loaded, resetProgress, fetchProgress, updateProgress, allProgress, activeMonthProgress, activeMonthHabits, createHabits, setActiveMonth}


    return (
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
    )
}






// export
export { ProgressContext, ProgressProvider }