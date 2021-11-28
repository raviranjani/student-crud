export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_STUDENT':
      return {
        ...state,
        students: state.students.filter(student => {
          return student.id !== action.payload;
        })
      }
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [action.payload, ...state.students]
      }
    case 'UPDATE_STUDENT':
      const updateStudent = action.payload;

      const updateStudents = state.students.map(student => {
        if (student.id === updateStudent.id) {
          return updateStudent;
        }
        return student;
      })
      return {
        ...state,
        students: updateStudents
      }

    default:
      return state;
  }
}