import { legacy_createStore as createStore } from 'redux';

// const initialState = {
//   newId: 100,
//   taskTitle: '',
//   tasks: [],
// };

// function reducer(state = initialState, action) {
//   if (action.type === 'updateTaskTitle') {
//     return {
//       ...state,
//       taskTitle: action.payload.taskTitle,
//     };
//   }

//   if (action.type === 'addTask') {
//     const { newId, taskTitle, tasks } = state;

//     return {
//       ...state,
//       newId: newId + 1,
//       taskTitle: '',
//       tasks: [...tasks, { id: newId, title: taskTitle }],
//     };
//   }

//   if (action.type === 'deleteTask') {
//     const { tasks } = state;

//     return {
//       ...state,
//       tasks: tasks.filter((task) => task.id === action.payload.newId),
//     };
//   }

//   return state;
// }

import reducer from './reducer';

const store = createStore(reducer);

export default store;
