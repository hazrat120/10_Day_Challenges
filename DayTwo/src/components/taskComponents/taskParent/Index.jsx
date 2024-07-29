import TaskHeader from "../taskHeader/Index";
import TaskList from "../taskList/Index";
import TaskInput from "../taskInput/Index";
import "./index.css";

export default function Index() {
  return (
    <div>
      <TaskHeader />
      <TaskInput />
      <TaskList />
    </div>
  );
}
