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
                loaded: false,
                submitted: false
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
                allProgress: [...state.allProgress, ...action.payload.newProgress],
                loaded: true,   
                submitted: true
            }
        case "UPDATE_HABIT":
            debugger
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
                    allProgress: [...state.allProgress, ...action.payload.newProgress],   
                    activeMonthHabits: [...state.activeMonthHabits, action.payload.newHabitName]
                }
            case "DELETE_HABIT":
            return { 
                ...state,
                allProgress: state.allProgress.filter((progress) => { 
                    if (progress.day.month == action.month){
                        return progress.habit.id !== action.id
                    } else {
                        return progress
                    }
                }),
                activeMonthHabits: state.activeMonthHabits.filter((habitName) => habitName !== action.name),
                activeMonthProgress: state.activeMonthProgress.filter((habitName) => habitName !== action.previousName)
            }
        case "TOGGLE_SUBMITTED":
            return { 
                ...state,
                submitted: true
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
        loaded: false,
        submitted: false
    })

    const { loaded, activeMonthProgress, allProgress, activeMonthHabits, submitted } = state

    const history = useHistory()

    const fetchProgress = (userId, month) => {
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

            const sortedHabits = nameArr.sort(function(a,b ){
                return a.length - b.length
            })


            dispatch({type:"FETCH_INITIAL_PROGRESS", payload: {allProgress: progressArray, activeProg: activeProg, activeHabitNames: sortedHabits}})
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

        const sortedHabits = nameArr.sort(function(a,b ){
            return a.length - b.length
        })


        dispatch({ type:"SET_ACTIVE_MONTH", payload: {month: month, names: sortedHabits }})

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
                console.table(progressArray[0])
             

                const activeHabitNames =  progressArray.map(progress => {
                    return progress.habit.name
                   })
                
                   const nameArr = [...new Set(activeHabitNames)]
                   const sortedHabits = nameArr.sort(function(a,b ){
                    return a.length - b.length
                    })
                
                const newHabits = progressArray.map(progress => {
                    return progress.habit
                   })
                   
                dispatch({type:"CREATE_NEW_MONTH", payload: {newProgress: progressArray, activeHabitNames: sortedHabits}})
            })

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
                dispatch({type:"UPDATE_HABIT", habit: habit, previousName: previousName})
            })
            .catch(() => {
                alert("Error updating habit.")
            

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
            .then(habit => {
                    dispatch({type:"DELETE_HABIT", id: habit_id, month: currentMonth, name: name})
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

    const value = { loaded, submitted, addHabitToMonth, deleteHabit, editHabit, resetProgress, fetchProgress, updateProgress, allProgress, activeMonthProgress, activeMonthHabits, createHabits, setActiveMonth}


    return (
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
    )
}



// export
export { ProgressContext, ProgressProvider }