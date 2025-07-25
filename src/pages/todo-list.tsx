import { TodoCard, TodoListAddForm, useTodoList } from '@features/todo-list';
import { todoItemStatus } from '@features/todo-list/model/todo-item-schema';
import { FilterBadge } from '@features/todo-list/ui/filter-badge';
import { Button, Dialog, DialogContent, DialogTrigger } from '@ui';
import { useState, type FC } from 'react';
import { Pagination } from '../shared/ui/paggination';

const PAGE_SIZE = 5;

export const TodoList: FC = () => {
	const { list } = useTodoList();

	const [page, setPage] = useState(1);

	const pageCount = Math.ceil(list.length / PAGE_SIZE);
	const paginatedList = list
		.sort((a, b) => a.position - b.position)
		.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	return (
		<section className="bg-card border-accent flex h-full min-h-screen w-full flex-col gap-6 border p-6 shadow-xl transition sm:rounded-3xl">
			<header className="mb-2">
				<h1 className="text-primary mb-1 text-center text-3xl font-extrabold md:text-4xl">
					To Do List
				</h1>
				<p className="text-muted-foreground text-center">
					SPA приложения для управления задачами
				</p>
			</header>

			<div className="flex justify-end">
				<Dialog>
					<DialogContent>
						<TodoListAddForm />
					</DialogContent>
					<DialogTrigger>
						<Button className="bg-primary text-primary-foreground">
							Добавить задачу
						</Button>
					</DialogTrigger>
				</Dialog>
			</div>

			<div className="flex flex-wrap justify-center gap-2">
				{Object.values(todoItemStatus.enum).map(value => (
					<FilterBadge key={value} value={value} />
				))}
			</div>

			<div className="flex min-h-0 flex-col gap-3 rounded-2xl">
				{paginatedList.length === 0 ? (
					<div className="text-muted-foreground py-12 text-center">
						Нет задач
					</div>
				) : (
					paginatedList.map(item => <TodoCard key={item.id} item={item} />)
				)}
			</div>
			{pageCount > 1 && (
				<Pagination page={page} setPage={setPage} pageCount={pageCount} />
			)}
		</section>
	);
};
