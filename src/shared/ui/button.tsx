import type { ComponentProps, FC } from 'react';

type ButtonVariant = 'primary' | 'destructive' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-primary text-white hover:bg-accent',
	destructive: 'bg-destructive text-white hover:bg-destructive/90',
	secondary: 'bg-muted text-card-foreground hover:bg-muted/80',
};

export const Button: FC<ButtonProps> = ({
	className = '',
	variant = 'primary',
	...props
}) => (
	<button
		className={`rounded-main cursor-pointer px-4 py-2 text-sm font-semibold shadow transition disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className} `}
		{...props}
	/>
);
