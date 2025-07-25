import { X } from 'lucide-react';
import {
	createContext,
	use,
	useState,
	type ComponentProps,
	type FC,
} from 'react';
import { Button } from './button';

const DialogContext = createContext({
	isOpen: false,
	open() {},
	close() {},
	toggle() {},
});

export const DialogContent: FC<ComponentProps<'dialog'>> = ({
	children,
	...props
}) => {
	const { isOpen, close } = use(DialogContext);
	return (
		<dialog open={isOpen} onClose={close} {...props} className="z-50">
			<div className="fixed inset-0 flex items-center justify-center bg-black/40">
				<div className="bg-card border-border rounded-main animate-pop-in relative z-10 w-full max-w-md border p-6 shadow-xl">
					{children}
					<Button
						variant="destructive"
						className="absolute top-2 right-2 flex items-center justify-center rounded-full"
						onClick={close}
					>
						<X size={24} />
					</Button>
				</div>
			</div>
		</dialog>
	);
};

export const Dialog: FC<
	Pick<ComponentProps<'dialog'>, 'open' | 'children'>
> = ({ children, open: initialIsOpen = false }) => {
	const [isOpen, setIsOpen] = useState(initialIsOpen);

	const open = () => void setIsOpen(true);

	const close = () => void setIsOpen(false);

	const toggle = () => void setIsOpen(e => !e);

	return (
		<>
			<DialogContext.Provider value={{ isOpen, open, close, toggle }}>
				{children}
			</DialogContext.Provider>
		</>
	);
};

export const DialogTrigger: FC<ComponentProps<'div'>> = props => {
	const { open } = use(DialogContext);
	return <div onClickCapture={open} {...props} />;
};
