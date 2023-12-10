'use client'
import { useContext } from 'react';
import { CgErase, CgFlag } from 'react-icons/cg';
import { TasksContext } from '@/contexts/tasksContext';
import ListItem from './ListItem';
import Alert from '@/components/UI/Alert';
import { Task } from '@/types/task';

const TaskList: React.FC = () => {
	const { state, dispatch } = useContext(TasksContext);


  const handleComplete = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const taskList = state.tasks.map((task: Task) => (
    <ListItem key={task.id} task={task} onClick={() => handleComplete(task.id)} />
  ));

  const alert = (
    <Alert type="info">
      <CgFlag className="text-xl" />
      No tasks yet!
    </Alert>
  );

  const handleClick = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  if (taskList.length === 0) {
    return <div className="mt-4 px-5 max-w-lg mx-auto flex flex-col">{alert}</div>;
  }

  return (
    <div className="mt-4 px-5 max-w-lg mx-auto">
      <button className="btn btn-warning" onClick={handleClick}>
        <CgErase /> Clear Completed
      </button>

      <hr className="mt-3" />

      <ul className="mt-3 max-w-lg mx-auto flex flex-col">{taskList}</ul>
    </div>
  );
};

export default TaskList;
