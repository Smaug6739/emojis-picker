interface IOptions {
	button: string;
	output: string;
	text: string;
}
interface IEmoji {
	name: string;
	emoji: string;
}

interface IObject {
	[index: string]: string
}

export type { IOptions, IEmoji, IObject }