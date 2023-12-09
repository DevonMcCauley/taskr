import TaskForm from "@/components/TaskComponents/TaskForm";
import TaskList from "@/components/TaskComponents/TaskList";

export default async function Home() {
	return (
		<main className="">
			<TaskForm />
			<TaskList />
		</main>
	);
}
