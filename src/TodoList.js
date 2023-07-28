import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '10px' }}>
        <Input
          value={task}
          onChange={handleInputChange}
          placeholder="Enter task..."
          action={{
            content: 'Add',
            onClick: handleAddTask,
          }}
        />
      </div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          text={task.text}
          completed={task.completed}
          onToggle={() => handleToggleTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
