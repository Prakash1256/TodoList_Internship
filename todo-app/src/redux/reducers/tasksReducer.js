const initialState = {
    today: [],
    important: [],
    planned: [],
    assigned: []
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          [action.payload.category]: [...state[action.payload.category], action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          today: state.today.filter(task => task.id !== action.payload),
          important: state.important.filter(task => task.id !== action.payload),
          planned: state.planned.filter(task => task.id !== action.payload),
          assigned: state.assigned.filter(task => task.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  