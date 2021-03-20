import { createContext, useState, useReducer} from "react"


function reducer(state, action) {
    switch (action.type) {
        case "increment_month":
            return {
                ...state,
                currentMonth: state.currentMonth + 1,
                daysOfMonth: new Date(state.currentYear, state.currentMonth + 2, 0).getDate()
            }
        case "decrement_month":
            return {
                ...state,
                currentMonth: state.currentMonth - 1,
                daysOfMonth: new Date(state.currentYear, state.currentMonth, 0).getDate()
            }
        case "set_days_array":
            return {
                ...state,
                daysArray: action.array
                }
        default:
            return state
    }
}


// create the context object
const DateContext = createContext()

// create the context provider component
function DateProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        currentMonth: new Date().getMonth() + 1, 
        currentYear: new Date().getFullYear(),
        daysOfMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
        daysArray: [10] 
    })

    const { currentMonth, currentYear, daysOfMonth, daysArray } = state

    function incrementMonth() {
        dispatch({ type: "increment_month" })
    }

    function decrementMonth() {
        dispatch({ type: "decrement_month" })
    }

    function setDaysArray(array) {
        dispatch({ type: "set_days_array", array })
    }

    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)    
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    // const [daysOfMonth, setDaysofMonth] = useState(new Date(currentYear, currentMonth, 0).getDate())
    // const [daysArray, setDaysArray] = useState([0])
   
    const value = {
        currentMonth, 
        currentYear,
        daysOfMonth,
        daysArray, 
        incrementMonth,
        decrementMonth, 
        setDaysArray
    }

    return (
    <DateContext.Provider value={value}>
        {children}
    </DateContext.Provider>
    )
}

// export
export { DateContext, DateProvider }