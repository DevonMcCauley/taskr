"use client";
import React, { ReactNode } from "react";
import { TasksProvider } from "@/contexts/tasksContext";

type ProvidersProps = {
	children: ReactNode,
};

// This component is used to wrap the entire app in the root layout.tsx file
export function Providers({ children }: ProvidersProps) {
	return <TasksProvider>{children}</TasksProvider>;
}
