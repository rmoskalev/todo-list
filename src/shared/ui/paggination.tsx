import { Button } from '@ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
	page: number;
	setPage: (p: number) => void;
	pageCount: number;
};

export const Pagination = ({ page, setPage, pageCount }: PaginationProps) => {
	const buttons = [];

	const start = Math.max(1, page - 2);
	const end = Math.min(pageCount, start + 4);
	for (let i = start; i <= end; i++) {
		buttons.push(
			<Button
				key={i}
				variant={i === page ? 'primary' : 'secondary'}
				className={`mx-1 min-w-[36px] ${i === page ? 'pointer-events-none' : ''}`}
				onClick={() => setPage(i)}
				disabled={i === page}
			>
				{i}
			</Button>,
		);
	}

	return (
		<div className="mt-2 flex items-center justify-center gap-2">
			<Button
				variant="secondary"
				className="flex items-center justify-center p-0"
				onClick={() => setPage(page - 1)}
				disabled={page === 1}
				aria-label="Предыдущая страница"
			>
				<ChevronLeft size={18} />
			</Button>
			{buttons}
			<Button
				variant="secondary"
				className="flex items-center justify-center p-0"
				onClick={() => setPage(page + 1)}
				disabled={page === pageCount}
				aria-label="Следующая страница"
			>
				<ChevronRight size={18} />
			</Button>
		</div>
	);
};
