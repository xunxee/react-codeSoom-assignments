import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  const { newId, taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickAddTask() {
    setState({
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <Page
      tasks={tasks}
      handleChangeTitle={handleChangeTitle}
      handleClickAddTask={handleClickAddTask}
      taskTitle={taskTitle}
      handleClickDeleteTask={handleClickDeleteTask}
    />
  );
}
