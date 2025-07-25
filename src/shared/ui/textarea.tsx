import type { ComponentProps, FC } from 'react';

export const Textarea: FC<ComponentProps<'textarea'>> = ({
	className = '',
	...props
}) => (
	<textarea
		className={`rounded-main border-muted bg-muted text-card-foreground placeholder:text-muted-foreground focus:ring-primary block w-full resize-none border px-3 py-2 transition focus:ring-2 focus:outline-none ${className} `}
		{...props}
	/>
);
