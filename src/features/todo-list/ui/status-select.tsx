import type { ComponentProps, FC } from 'react';
import { todoItemStatus, type TodoItem } from '../model/todo-item-schema';
import { formatStatus } from '../utils/format-status';

type StatusSelectProps = {
	onChangeStatus: (status: TodoItem['status']) => void;
} & Omit<ComponentProps<'select'>, 'onChange'>;

export const StatusSelect: FC<StatusSelectProps> = ({
	onChangeStatus,
	className = '',
	...props
}) => (
	<select
		onChange={e => onChangeStatus(e.target.value as TodoItem['status'])}
		className={`rounded-main border-muted bg-muted text-card-foreground w-full cursor-pointer border px-3 py-2 ${className} `}
		{...props}
	>
		{Object.values(todoItemStatus.enum).map(value => (
			<option key={value} value={value}>
				{formatStatus(value)}
			</option>
		))}
	</select>
);
