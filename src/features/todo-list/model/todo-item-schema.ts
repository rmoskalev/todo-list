import z from 'zod';

export const todoItemStatus = z.enum(['PENDING', 'IN_PROGRESS', 'DONE']);

export type TodoItemStatus = z.infer<typeof todoItemStatus>;

export const todoItemSchema = z.object({
	id: z.uuid(),
	title: z.string(),
	description: z.string(),
	status: todoItemStatus,
	position: z.number().default(0),
	createdAt: z.date(),
});

export type TodoItem = z.infer<typeof todoItemSchema>;

export const todoItemAddSchema = todoItemSchema.pick({
	title: true,
	description: true,
});

export type TodoItemAddSchema = z.infer<typeof todoItemAddSchema>;
