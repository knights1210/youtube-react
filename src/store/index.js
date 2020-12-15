import React, { createContext, useReducer } from "react";

const initialState = {
  popular: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    default:
      return state
      
  }
}

export const Store = createContext({
  globalStore: initialState,
  seGlobalState: () => null
})

const StoreProvider = ({childlen}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return <Store.Provider value={{ globalState, setGlobalState }}>{childlen}</Store.Provider>
}

export default StoreProvider
