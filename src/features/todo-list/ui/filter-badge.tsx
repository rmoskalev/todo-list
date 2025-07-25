import type { FC } from 'react';
import type { TodoItem } from '../model/todo-item-schema';
import { useTodoList } from '../model/todo-list-hook';
import { formatStatus } from '../utils/format-status';

type FilterBadgeProps = {
	value: TodoItem['status'];
};

export const FilterBadge: FC<FilterBadgeProps> = ({ value }) => {
	const { filter, removeFilter, addFilter } = useTodoList();
	const isActive = filter.includes(value);

	const color = isActive
		? 'bg-success text-white hover:bg-primary/10'
		: 'bg-destructive text-white';

	return (
		<div
			className={`rounded-main border-border inline-block cursor-pointer border px-4 py-1 text-sm font-semibold transition select-none ${color} `}
			onClick={() => (isActive ? removeFilter(value) : addFilter(value))}
		>
			{formatStatus(value)}
		</div>
	);
};
