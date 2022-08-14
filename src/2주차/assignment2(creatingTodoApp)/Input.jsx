export default function Input({
  value,
  handleChangeTitle,
  handleClickAddTask,
}) {
  return (
    <p>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={handleChangeTitle}
      />
      <button
        type="button"
        onClick={handleClickAddTask}
      >
        추가
      </button>
    </p>
  );
}
