import React from "react";
import Task from "./Task";

function TaskList({ handleDelete, tasksToDisplay }) {
  // console.log(tasksToDisplay);

  return (
    <div className="tasks" task={tasksToDisplay}>
      {tasksToDisplay.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
// function TaskList(tasks, onDeleteTask) {
//   return (
//     <div className="tasks">

//       {tasks.map((task) => 
//         <Task
//           key={task.text}
//           text={task.text}
//           category={task.category}
//           onDeleteTask={onDeleteTask}
//         />
//       )}
//     </div>
//   );
// }

// export default TaskList;
