import { PencilLineIcon, Trash2Icon, CheckCircle2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Priority = "High" | "Midium" | "Low";

type ToDo = {
  addTask: string;
  status: "pending" | "completed";
  priority: Priority;
};

function TaskCard() {
  const [addTask, setAddTask] = useState<string>("");
  const [displayTask, task] = useState<ToDo[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [priority, setPriority] = useState<Priority>("Midium");
  const [edit, setedit] = useState<number>();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(displayTask));
  }, [displayTask]);

  const priorities: Priority[] = ["High", "Midium", "Low"];

  const changeStatus = (i: number) => {
    const updated = [...displayTask];
    updated[i].status =
      updated[i].status === "pending" ? "completed" : "pending";
    task(updated);
  };

  const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark" as const, // dark background for better green contrast
  style: {
    background: "#065f46", // dark green background
    color: "#a7f3d0",      // light green text
    fontWeight: "bold",
    fontSize: "14px",
  },
};

const submitTask = (event: any) => {
  event.preventDefault();
  if (!addTask.trim()) return;

  const newTask: ToDo = { addTask, status: "pending", priority };

  if (edit === undefined) {
    task([...displayTask, newTask]);
    toast.success("✅ Task added successfully!", toastConfig);
  } else {
    const updated = displayTask.map((task, idx) =>
      idx === edit ? newTask : task
    );
    task(updated);
    toast.info("✏️ Task updated successfully!", toastConfig);
  }

  setAddTask("");
  setPriority("Midium");
  setedit(undefined);
};


  const deleteTasks = (i: number) => {
    task(displayTask.filter((_, idx) => i !== idx));
    toast.error("🗑️ Task deleted!");
  };

  const editTask = (i: number) => {
    setedit(i);
    setAddTask(displayTask[i].addTask);
    setPriority(displayTask[i].priority);
  };

  const pendingTasks = displayTask.filter((task) => task.status === "pending");
  const completedTasks = displayTask.filter(
    (task) => task.status === "completed"
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-950 p-8">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg animate-fade-in">
        📝 My Task Manager
      </h1>

      {/* Add / Update Task */}
      <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full mb-12 animate-slide-up">
        <h2 className="text-lg font-semibold text-white mb-4">
          {edit === undefined ? "➕ Add New Task" : "✏️ Update Task"}
        </h2>
        <form
          onSubmit={submitTask}
          className="flex flex-col sm:flex-row gap-4 w-full"
        >
          <input
            type="text"
            placeholder="Write your task..."
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-900 text-white 
                       focus:ring-2 focus:ring-green-500 focus:outline-none transition-all w-full"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="px-3 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-900 text-white transition hover:shadow-md"
          >
            {priorities.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
          >
            {edit === undefined ? "Add Task" : "Update"}
          </button>
        </form>
      </div>

      {/* Task Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
  {/* Pending Tasks */}
  <div className="bg-gray-800/80 backdrop-blur rounded-2xl shadow-md p-6 animate-slide-left w-full">
    <h3 className="text-xl font-semibold text-white mb-4">
      🕗 Pending ({pendingTasks.length})
    </h3>
    {pendingTasks.length === 0 ? (
      <p className="text-gray-400 italic">No pending tasks available.</p>
    ) : (
      <ul className="space-y-3">
        {pendingTasks.map((task, i) => (
          <li
            key={i}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-lg transition bg-gray-900 group animate-fade-in w-full"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                onChange={() => changeStatus(displayTask.indexOf(task))}
                checked={false}
                className="w-5 h-5 cursor-pointer accent-green-500 transition-transform transform group-hover:scale-110"
              />
              <span className="text-white font-medium group-hover:text-green-400 transition-colors">
                {task.addTask}
              </span>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  task.priority === "High"
                    ? "bg-red-700 text-red-100 animate-pulse"
                    : task.priority === "Midium"
                    ? "bg-yellow-700 text-yellow-100"
                    : "bg-green-500 text-green-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                }`}
              >
                {task.priority}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(displayTask.indexOf(task))}
                className="p-2 bg-green-600 hover:bg-green-500 text-white rounded-lg shadow transition-transform transform hover:scale-110"
              >
                <PencilLineIcon size={16} className="text-white" />
              </button>
              <button
                onClick={() => deleteTasks(displayTask.indexOf(task))}
                className="p-2 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow transition-transform transform hover:scale-110"
              >
                <Trash2Icon size={16} className="text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Completed Tasks */}
  <div className="bg-gray-800/80 backdrop-blur rounded-2xl shadow-md p-6 animate-slide-right w-full">
    <h3 className="text-xl font-semibold text-white mb-4">
      🎉 Completed ({completedTasks.length})
    </h3>
    {completedTasks.length === 0 ? (
      <p className="text-gray-400 italic">No completed tasks yet.</p>
    ) : (
      <ul className="space-y-3">
        {completedTasks.map((task, i) => (
          <li
            key={i}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-700 bg-gray-900 shadow-sm hover:shadow-md transition animate-fade-in w-full"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2Icon
                className="text-green-400 animate-bounce-slow"
                size={20}
              />
              <span className="line-through text-green-300">
                {task.addTask}
              </span>
            </div>
            <button
              onClick={() => deleteTasks(displayTask.indexOf(task))}
              className="p-2 bg-green-700 hover:bg-green-600 text-white rounded-lg shadow transition-transform transform hover:scale-110"
            >
              <Trash2Icon size={16} className="text-white" />
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


      <ToastContainer />
    </div>
  );
}

export default TaskCard;
