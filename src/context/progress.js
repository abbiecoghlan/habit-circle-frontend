import { createContext, useState } from "react"




// create the context object
const ProgressContext = createContext()

// create the context provider component
function ProgressProvider({ children }) {

    const [progressArray, setProgressArray] = useState([])
    const value = [progressArray, setProgressArray]

    

    return (
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
    )
}






// export
export { ProgressContext, ProgressProvider }