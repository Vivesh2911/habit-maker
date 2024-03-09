import React, { useState } from 'react';
import './habit.css'; 

function HabitStructure() {
  const [habitData, setHabitData] = useState({
    what: '',
    where: '',
    why: '',
    date: ''
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitData({
      ...habitData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, habitData]);
    setHabitData({
      what: '',
      where: '',
      why: '',
      date: ''
    });
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What to do"
            name="what"
            value={habitData.what}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Where to do"
            name="where"
            value={habitData.where}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Why to do"
            name="why"
            value={habitData.why}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={habitData.date}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <h2>Tasks List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task.what}</span>
              <span>{task.where}</span>
              <span>{task.why}</span>
              <span>{task.date}</span>
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HabitStructure;
