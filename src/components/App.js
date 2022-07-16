import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function onTaskFormSubmit(newTask) {
    console.log("this was submitted");
    const newTaskSubmit = [...tasks, newTask];
    setTasks(newTaskSubmit);
  }

  function handleDelete(task) {
    let thingToDelete = task.target.previousSibling.textContent;
    const removeTask = tasks.filter((thing) => {
      return thing.text !== thingToDelete;
    });
    setTasks(removeTask);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.textContent);

    event.target.classList.add("selected");

    let eventChildren = Array.from(event.target.parentNode.children);
    console.log(eventChildren);
    eventChildren.forEach((child) => {
      if (child !== event.target) {
        child.classList.remove("selected");
      }
    });
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        categories={CATEGORIES}
        handleDelete={handleDelete}
        tasksToDisplay={tasksToDisplay}
        onTaskFormSubmit={onTaskFormSubmit}
      />
    </div>
  );
}

export default App;

// import { CATEGORIES, TASKS } from "../data";
// // import { useState } from "react/cjs/react.production.min";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App ()
// {
//   const [ tasks, setTasks ] = useState( TASKS )
//   const [ selectedCategory, setSelectedCategory ] = useState( "All" )

//   function addNewTask(newTask) {
//     const newTaskList = [...tasks, newTask];
//     setTasks(newTaskList);
//   }

//   function deleteTask(deletedTaskText) {
//     const newTaskList = tasks.filter((task) => task.text !== deletedTaskText);
//     setTasks(newTaskList);
//   }

//   const filteredTaskList = tasks.filter((task) => {
//     if (selectedCategory === "All") return true;
//     return task.category === selectedCategory;
//   } );

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         selectedCategory={selectedCategory}
//         onSelectCategory={setSelectedCategory}
//       />
//       <NewTaskForm
//         categories={CATEGORIES.slice(1)}
//         onTaskFormSubmit={addNewTask}
//       />
//       <TaskList tasks={filteredTaskList} onDeleteTask={deleteTask} />
//     </div>
//   );
// }

// export default App;
