import React, { createContext } from 'react'

const filterContext = createContext()

const FilterProvider = ({children}) => {
    const [filter, dispatch] = useReducer(first, second)
  return (
    <filterContext.Provider>
      {children}
    </filterContext.Provider>
  )
}

export default FilterProvider
