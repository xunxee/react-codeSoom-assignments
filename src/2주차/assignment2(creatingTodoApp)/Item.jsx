export default function Item({
  task: { id, title },
  handleClickDeleteTask,
}) {
  return (
    <li>
      {title}
      <button
        type="button"
        onClick={() => handleClickDeleteTask(id)}
      >
        완료
      </button>
    </li>
  );
}
