import Input from './Input';
import List from './List';

export default function Page({
  taskTitle,
  handleClickAddTask,
  handleChangeTitle,
  tasks,
  handleClickDeleteTask,
}) {
  return (
    <div>
      <Input
        value={taskTitle}
        handleChangeTitle={handleChangeTitle}
        handleClickAddTask={handleClickAddTask}
      />
      <List
        tasks={tasks}
        handleClickDeleteTask={handleClickDeleteTask}
      />
    </div>
  );
}
