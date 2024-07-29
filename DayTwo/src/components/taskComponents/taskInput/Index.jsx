import "./index.css";

export default function Index() {
  return (
    <div className="taskInput">
      <form>
        <label htmlFor="name">Task Name:</label>
        <input
          type="text"
          name="name"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
