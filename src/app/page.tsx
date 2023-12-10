import TaskForm from "@/components/TaskComponents/TaskForm";
import TaskList from "@/components/TaskComponents/TaskList";
import { NextPage } from 'next'; // Import NextPage type from 'next'

const Home: NextPage = async () => {
  return (
    <main className="">
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default Home;
