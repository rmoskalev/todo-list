import { useContext } from 'react';
import { TodoListContext } from './todo-list-context';

export function useTodoList() {
	return useContext(TodoListContext);
}
