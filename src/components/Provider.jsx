"use client";

import { TasksProvider, useTasksContext } from "@/contexts/tasksContext";

export function Providers({ children }) {
	return <TasksProvider>{children}</TasksProvider>;
}
