'use client'
import { useState, useContext, FormEvent, ChangeEvent } from 'react';
import { CgAdd } from 'react-icons/cg';
import { TasksContext } from '@/contexts/tasksContext';

const TaskForm: React.FC = () => {
  const { dispatch } = useContext(TasksContext);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check that the task name is not empty
    if (!name) return;


    const task = {
      id: Math.floor(Math.random() * 1000),
      name,
      description,
    };

    dispatch({ type: 'ADD_TASK', payload: task });

    setName('');
    setDescription('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-5 mx-auto max-w-lg">
      <input className="border rounded-md p-1" type="text" title="Task Name" placeholder="Task Name" value={name} onChange={handleNameChange} />
      <input
        className="border rounded-md p-1 "
        type="text"
        title="Task Description"
        placeholder="Task Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className="btn btn-primary" type="submit">
        <CgAdd className="text-lg" />
        Add
      </button>
    </form>
  );
};

export default TaskForm;
