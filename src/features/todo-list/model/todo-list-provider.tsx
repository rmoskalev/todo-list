import { useEffect, useState, type ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

import {
	todoItemSchema,
	todoItemStatus,
	type TodoItem,
	type TodoItemAddSchema,
} from './todo-item-schema';
import { TodoListContext } from './todo-list-context';

export function TodoListProvider({ children }: { children: ReactNode }) {
	const [list, setList] = useState<TodoItem[]>(() => {
		return JSON.parse(localStorage.getItem('todo-list') ?? '[]');
	});
	const [filter, setFilter] = useState<TodoItem['status'][]>(
		Object.values(todoItemStatus.enum),
	);

	useEffect(() => {
		if (!list) return;
		localStorage.setItem('todo-list', JSON.stringify(list));
	}, [list]);

	const updateStatus = (id: TodoItem['id'], newStatus: TodoItem['status']) => {
		setList(e => {
			const itemIndex = e.findIndex(item => item.id === id);
			if (itemIndex < 0) return e;
			return [
				...e.slice(0, itemIndex),
				{ ...e[itemIndex], status: newStatus },
				...e.slice(itemIndex + 1),
			];
		});
	};

	const add = (data: TodoItemAddSchema) => {
		const item = todoItemSchema.parse({
			...data,
			id: uuid(),
			status: 'PENDING',
			createdAt: new Date(),
		});

		setList(e => [item, ...e]);
	};

	const remove = (id: TodoItem['id']) => {
		setList(e => e.filter(item => item.id !== id));
	};

	const addFilter = (status: TodoItem['status']) => {
		setFilter(e => [...new Set([...e, status])]);
	};

	const removeFilter = (status: TodoItem['status']) => {
		setFilter(e => e.filter(j => j !== status));
	};

	const filteredList = list.filter(e => filter.includes(e.status));

	return (
		<TodoListContext.Provider
			value={{
				list: filteredList,
				add,
				updateStatus,
				remove,
				filter,
				addFilter,
				removeFilter,
			}}
		>
			{children}
		</TodoListContext.Provider>
	);
}
