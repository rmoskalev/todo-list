import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TodoListProvider } from '../features/todo-list/model/todo-list-provider';
import { TodoList } from '../pages/todo-list';
import './index.css';
import { Layout } from './layout';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TodoListProvider>
			<Layout>
				<TodoList />
			</Layout>
		</TodoListProvider>
	</StrictMode>,
);
