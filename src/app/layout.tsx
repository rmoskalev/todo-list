import type { ComponentProps, FC } from 'react';

export const Layout: FC<ComponentProps<'div'>> = props => {
	return (
		<div
			className="m-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center overflow-y-auto sm:px-4"
			{...props}
		/>
	);
};
