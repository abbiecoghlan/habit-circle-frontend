import { createContext, useReducer} from "react"


function reducer(state, action) {
    switch (action.type) {
        case "increment_month":
            return {
                ...state,
                currentMonth: state.currentMonth + 1,
                daysOfMonth: new Date(state.currentYear, state.currentMonth + 1, 0).getDate()
            }
        case "decrement_month":
            return {
                ...state,
                currentMonth: state.currentMonth - 1,
                daysOfMonth: new Date(state.currentYear, state.currentMonth - 1, 0).getDate()
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

    const initialDaysArr = [10]
    while (initialDaysArr.length <= new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()){
        initialDaysArr.push(1)        
        }
     


    const [state, dispatch] = useReducer(reducer, {
        currentMonth: new Date().getMonth() + 1, 
        currentYear: new Date().getFullYear(),
        daysOfMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
        daysArray: initialDaysArr
    })

    const { currentMonth, currentYear, daysOfMonth, daysArray } = state

    const incrementMonth = () => {
        dispatch({ type: "increment_month"})
    }

    function decrementMonth() {
        dispatch({ type: "decrement_month" })
    }

    function setDaysArray(array) {
        dispatch({ type: "set_days_array", array })
    }

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