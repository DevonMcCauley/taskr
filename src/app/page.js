import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default async function Home() {
	return (
		<main className="">
			<TaskForm />
			<TaskList />
		</main>
	);
}
