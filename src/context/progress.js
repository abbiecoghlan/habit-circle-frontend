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
            return {
                ...state,
                activeMonthProgress: action.payload.newProgress,
                activeMonthHabits: action.payload.activeHabitNames,
                allProgress: [...state.allProgress, ...action.payload.newProgress],
                loaded: true
    
            }
        case "UPDATE_HABIT":
            return { 
                ...state,
                activeMonthProgress: state.activeMonthProgress.map(progress => {
                    if (progress.habit.id === action.habit.id){
                        progress.habit.name = action.habit.name
                        return progress
                        } else { 
                        return progress }
                    }), 
                allProgress: state.allProgress.map(progress => {
                    if (progress.habit.id === action.habit.id){
                        progress.habit.name = action.habit.name
                        return progress
                        } else { 
                        return progress }
                    }),   
                activeMonthHabits: state.activeMonthHabits.map((habitName) => {
                    if (habitName == action.previousName) {
                        return action.habit.name
                    } else {
                        return habitName
                    }
                })
            }
            case "ADD_HABIT_TO_MONTH":
                return { 
                    ...state,
                    activeMonthProgress: [...state.activeMonthProgress, ...action.payload.newProgress], 
                    allProgress: [...state.activeMonthProgress, ...action.payload.newProgress],   
                    activeMonthHabits: [...state.activeMonthHabits, action.payload.newHabitName]
                }
            case "DELETE_HABIT":
            return { 
                ...state,
                activeMonthProgress: state.activeMonthProgress.filter(progress => progress.habit.id !== action.id),
                activeMonthHabits: state.activeMonthHabits.filter((habitName) => habitName !== action.previousName)
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
             

                const activeHabitNames =  progressArray.map(progress => {
                    return progress.habit.name
                   })
                
                   const nameArr = [...new Set(activeHabitNames)]
                
                const newHabits = progressArray.map(progress => {
                    return progress.habit
                   })
                   
                
                dispatch({type:"CREATE_NEW_MONTH", payload: {newProgress: progressArray, activeHabitNames: nameArr}})
                   
                // fetchProgress(id, month)
            })
            // .then(setActiveMonth(month))
    }

    const editHabit = (habitId, name, previousName) => {
        fetch(`http://localhost:3000/habits/${habitId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
          })
            .then(r => r.json())
            .then(habit => 
                {
                console.log(habit)
                dispatch({type:"UPDATE_HABIT", habit: habit, previousName: previousName})
            })
            .catch(() => {
                alert("Error updating habit.")
                history.push('/login')

            })
    }

    const deleteHabit = (habit_id, name, user_id, currentMonth) => {
        fetch(`http://localhost:3000/delete_by_habit`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
                habit_id: habit_id,
                currentMonth: currentMonth,
                user_id: user_id
            })
          })
            .then(r => r.json())
            .then(habit => 
                {
                console.log(habit)
                
                dispatch({type:"DELETE_HABIT", id: habit_id, previousName: name})
            })
            .catch(() => {
                alert("Error updating habit.")
            })
        }


        const addHabitToMonth = (array, id, month) => {
    
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
                    const habitName =  progressArray.find(progress => progress.habit.name).habit.name             
                    dispatch({type:"ADD_HABIT_TO_MONTH", payload: {newProgress: progressArray, newHabitName: habitName}})
                        
                })
            }



    

 



    const value = { loaded, addHabitToMonth, deleteHabit, editHabit, resetProgress, fetchProgress, updateProgress, allProgress, activeMonthProgress, activeMonthHabits, createHabits, setActiveMonth}


    return (
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
    )
}





// export
export { ProgressContext, ProgressProvider }