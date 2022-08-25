import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

// const initialState = {
//   newId: 100,
//   taskTitle: '',
//   tasks: [
//     { id: 1, title: '아무 것도 하지 않기 #1' },
//     { id: 2, title: '아무 것도 하지 않기 #2' },
//   ],
// };

// function updateTaskTitle(state, taskTitle) {
//   return {
//     ...state,
//     taskTitle,
//   };
// }

// function addTask(state) {
//   const { newId, taskTitle, tasks } = state;

//   return {
//     ...state,
//     newId: newId + 1,
//     taskTitle: '',
//     tasks: [...tasks, { id: newId, title: taskTitle }],
//   };
// }

// function deleteTask(state, id) {
//   const { tasks } = state;

//   return {
//     ...state,
//     tasks: tasks.filter((task) => task.id !== id),
//   };
// }

// App은 화면이 어떻게 그려지는지만 집중하게 된다.
// Title이 어떻게 change 되는지, 추가가 어떻게 이루지는지 App은 알지 못함
// state의 초기값도 알지 못하게 된다.
export default function App() {
  // const { taskTitle } = useSelector((state) => ({
  //   taskTitle: state.taskTitle,
  //   tasks: state.tasks,
  // }));

  // const [state, setState] = useState(initialState);

  // const { taskTitle, tasks } = state;

  // const dispatch = useDispatch();

  // function handleChangeTitle(event) {
  //   dispatch(updateTaskTitle(event.target.value));
  //   // dispatch(updateTaskTitle(state, event.target.value));
  //   // dispatch({
  //   //   type: 'updateTaskTitle',
  //   //   payload: {
  //   //     taskTitle: event.target.value,
  //   //   },
  //   // });
  // }

  // function handleClickAddTask() {
  //   dispatch(addTask());
  //   // dispatch(addTask(state));
  // }

  // function handleClickDeleteTask(id) {
  //   // dispatch(deleteTask(state, id));
  //   dispatch(deleteTask(id));
  // }

  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
