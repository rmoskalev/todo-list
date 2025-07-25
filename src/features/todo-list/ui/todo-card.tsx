import { Button } from '@ui';
import { Trash2 } from 'lucide-react';
import type { FC } from 'react';
import type { TodoItem } from '../model/todo-item-schema';
import { useTodoList } from '../model/todo-list-hook';
import { StatusSelect } from './status-select';

type TodoCardProps = {
	item: TodoItem;
};

export const TodoCard: FC<TodoCardProps> = ({ item }) => {
	const { updateStatus, remove } = useTodoList();

	return (
		<div
			className="bg-card border-border rounded-main animate-pop-in relative mb-2 border p-4 shadow-md transition hover:shadow-lg"
			key={item.id}
		>
			<div className="flex flex-col gap-2 pr-12">
				{' '}
				<h2 className="text-card-foreground truncate text-lg font-bold">
					{item.title}
				</h2>
				<p className="text-muted-foreground mb-2 text-sm break-words">
					{item.description || (
						<span className="text-muted-foreground italic">Нет описания</span>
					)}
				</p>
				<div className="flex items-center gap-2">
					<StatusSelect
						value={item.status}
						onChangeStatus={e => updateStatus(item.id, e)}
						className="max-w-[180px] min-w-[110px]"
					/>
					<span className="text-muted-foreground ml-2 text-xs">
						{new Date(item.createdAt).toLocaleDateString()}
					</span>
				</div>
			</div>
			<Button
				variant="destructive"
				onClick={() => remove(item.id)}
				className="absolute top-3 right-3 flex items-center justify-center rounded-full p-0 shadow-md transition"
				aria-label="Удалить задачу"
				title="Удалить задачу"
			>
				<Trash2 size={20} />
			</Button>
		</div>
	);
};
