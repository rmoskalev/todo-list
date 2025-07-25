import type { TodoItemStatus } from '@features/todo-list/model/todo-item-schema';

export function formatStatus(status: TodoItemStatus) {
	switch (status) {
		case 'PENDING':
			return 'Pending';
		case 'IN_PROGRESS':
			return 'In progress';
		case 'DONE':
			return 'Done';
		default:
			return 'none';
	}
}
