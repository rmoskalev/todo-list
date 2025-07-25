import { Button, Input, Label, Textarea } from '@ui';
import type { FormEvent } from 'react';
import { todoItemAddSchema } from '../model/todo-item-schema';
import { useTodoList } from '../model/todo-list-hook';

export const TodoListAddForm = () => {
	const { add } = useTodoList();

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		const form = new FormData(e.currentTarget);
		add(todoItemAddSchema.parse(Object.fromEntries(form.entries())));
		e.currentTarget.reset();
	};

	return (
		<form
			onSubmit={submitHandler}
			className="bg-card rounded-main flex flex-col gap-4"
			autoComplete="off"
		>
			<div className="flex flex-col gap-2">
				<Label htmlFor="title">Заголовок</Label>
				<Input
					name="title"
					id="title"
					placeholder="Введите заголовок задачи"
					required
				/>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="description">Описание</Label>
				<Textarea
					name="description"
					id="description"
					placeholder="Подробное описание"
					rows={3}
				/>
			</div>

			<div className="flex justify-end pt-2">
				<Button type="submit" className="min-w-[120px]">
					Добавить
				</Button>
			</div>
		</form>
	);
};
