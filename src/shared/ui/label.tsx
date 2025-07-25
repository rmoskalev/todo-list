import type { ComponentProps, FC } from 'react';

export const Label: FC<ComponentProps<'label'>> = ({
	className = '',
	...props
}) => (
	<label
		className={`text-card-foreground mb-1 block text-2xl font-semibold ${className}`}
		{...props}
	/>
);
