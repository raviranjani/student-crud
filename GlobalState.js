import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  students: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeStudent = (id) => {
    dispatch({
      type: 'REMOVE_STUDENT',
      payload: id
    })
  }

  const addStudent = (student) => {
    dispatch({
      type: 'ADD_STUDENT',
      payload: student
    })
  }

  const editStudent = (student) => {
    dispatch({
      type: 'UPDATE_STUDENT',
      payload: student
    })
  }

  return (
    <GlobalContext.Provider value={{
      students: state.students,
      removeStudent,
      addStudent,
      editStudent
    }}>
      {children}
    </GlobalContext.Provider>
  )
}