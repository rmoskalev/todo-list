/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext } from 'react';
import type { TodoItem, TodoItemAddSchema } from './todo-item-schema';

export const TodoListContext = createContext({
	get list(): TodoItem[] {
		return [];
	},
	get filter(): TodoItem['status'][] {
		return [];
	},
	add(_data: TodoItemAddSchema): void {},
	remove(_id: TodoItem['id']): void {},
	updateStatus(_id: TodoItem['id'], _status: TodoItem['status']): void {},
	addFilter(_status: TodoItem['status']): void {},
	removeFilter(_status: TodoItem['status']): void {},
});
