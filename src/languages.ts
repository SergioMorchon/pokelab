export const Japanese = 'Japanese';
export const English = 'English';
export const German = 'German';
export const Spanish = 'Spanish';
export const French = 'French';
export const Italian = 'Italian';
export const Korean = 'Korean';
export const Chinese = 'Chinese';

export type Language =
	| typeof Japanese
	| typeof English
	| typeof German
	| typeof Spanish
	| typeof French
	| typeof Italian
	| typeof Korean
	| typeof Chinese;

export const All: ReadonlyArray<Language> = [
	Japanese,
	English,
	German,
	Spanish,
	French,
	Italian,
	Korean,
	Chinese,
];
