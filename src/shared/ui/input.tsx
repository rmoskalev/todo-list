import type { ComponentProps, FC } from 'react';

export const Input: FC<ComponentProps<'input'>> = ({
	className = '',
	...props
}) => (
	<input
		className={`rounded-main border-muted bg-muted text-card-foreground placeholder:text-muted-foreground focus:ring-primary block w-full border px-3 py-2 transition focus:ring-2 focus:outline-none ${className} `}
		{...props}
	/>
);
