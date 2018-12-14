import {
	Chinese,
	English,
	French,
	German,
	Italian,
	Japanese,
	Korean,
	Language,
	Spanish,
} from './languages';
import { getValueFromMap } from './util';

export const Normal = 'Normal';
export const Fire = 'Fire';
export const Water = 'Water';
export const Electric = 'Electric';
export const Grass = 'Grass';
export const Ice = 'Ice';
export const Fighting = 'Fighting';
export const Poison = 'Poison';
export const Ground = 'Ground';
export const Flying = 'Flying';
export const Psychic = 'Psychic';
export const Bug = 'Bug';
export const Rock = 'Rock';
export const Ghost = 'Ghost';
export const Dragon = 'Dragon';
export const Dark = 'Dark';
export const Steel = 'Steel';
export const Fairy = 'Fairy';

export type Type =
	| typeof Normal
	| typeof Fire
	| typeof Water
	| typeof Electric
	| typeof Grass
	| typeof Ice
	| typeof Fighting
	| typeof Poison
	| typeof Ground
	| typeof Flying
	| typeof Psychic
	| typeof Bug
	| typeof Rock
	| typeof Ghost
	| typeof Dragon
	| typeof Dark
	| typeof Steel
	| typeof Fairy;

export const All: ReadonlyArray<Type> = [
	Normal,
	Fire,
	Water,
	Electric,
	Grass,
	Ice,
	Fighting,
	Poison,
	Ground,
	Flying,
	Psychic,
	Bug,
	Rock,
	Ghost,
	Dragon,
	Dark,
	Steel,
	Fairy,
];

const typeToEfectivenessIndex: Map<Type, number> = [
	Normal,
	Fighting,
	Flying,
	Poison,
	Ground,
	Rock,
	Bug,
	Ghost,
	Steel,
	Fire,
	Water,
	Grass,
	Electric,
	Psychic,
	Ice,
	Dragon,
	Dark,
	Fairy,
].reduce((map, type, index) => {
	map.set(type, index);
	return map;
}, new Map());

const getTypeToEfectivenessIndex = (type: Type) =>
	getValueFromMap(typeToEfectivenessIndex, type, 'type effectiveness');

/**
 * [attacking,defending]
 */
const efectiveness = [
	[1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
	[1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
	[1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
	[1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
	[1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
	[1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
	[0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
	[1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
	[1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
	[1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
	[1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
	[1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
	[1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
	[1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
	[1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1],
];

export const getEffectiveness = (attackingType: Type, defendingType: Type) =>
	efectiveness[getTypeToEfectivenessIndex(attackingType)][
		getTypeToEfectivenessIndex(defendingType)
	];

const typeNames = {
	[Normal]: {
		[Chinese]: '一般',
		[English]: 'Normal',
		[French]: 'Normal',
		[German]: 'Normal',
		[Italian]: 'Normale',
		[Japanese]: 'ノーマル',
		[Korean]: '노말',
		[Spanish]: 'Normal',
	},
	[Fire]: {
		[Chinese]: '火',
		[English]: 'Fire',
		[French]: 'Feu',
		[German]: 'Feuer',
		[Italian]: 'Fuoco',
		[Japanese]: 'ほのお (炎)',
		[Korean]: '불꽃',
		[Spanish]: 'Fuego',
	},
	[Water]: {
		[Chinese]: '水',
		[English]: 'Water',
		[French]: 'Eau',
		[German]: 'Wasser',
		[Italian]: 'Acqua',
		[Japanese]: 'みず (水)',
		[Korean]: '물',
		[Spanish]: 'Agua',
	},
	[Electric]: {
		[Chinese]: '電 / 电',
		[English]: 'Electric',
		[French]: 'Électrik',
		[German]: 'Elektro',
		[Italian]: 'Elettro',
		[Japanese]: 'でんき (電気)',
		[Korean]: '전기',
		[Spanish]: 'Eléctrico',
	},
	[Grass]: {
		[Chinese]: '草',
		[English]: 'Grass',
		[French]: 'Plante',
		[German]: 'Pflanze',
		[Italian]: 'Erba',
		[Japanese]: 'くさ (草)',
		[Korean]: '풀',
		[Spanish]: 'Planta',
	},
	[Ice]: {
		[Chinese]: '冰',
		[English]: 'Ice',
		[French]: 'Glace',
		[German]: 'Eis',
		[Italian]: 'Ghiaccio',
		[Japanese]: 'こおり (氷)',
		[Korean]: '얼음',
		[Spanish]: 'Hielo',
	},
	[Fighting]: {
		[Chinese]: '格鬥 / 格斗',
		[English]: 'Fighting',
		[French]: 'Combat',
		[German]: 'Kampf',
		[Italian]: 'Lotta',
		[Japanese]: 'かくとう (格闘)',
		[Korean]: '격투',
		[Spanish]: 'Lucha',
	},
	[Poison]: {
		[Chinese]: '毒',
		[English]: 'Poison',
		[French]: 'Poison',
		[German]: 'Gift',
		[Italian]: 'Veleno',
		[Japanese]: 'どく (毒)',
		[Korean]: '독',
		[Spanish]: 'Veneno',
	},
	[Ground]: {
		[Chinese]: '地面',
		[English]: 'Ground',
		[French]: 'Sol',
		[German]: 'Boden',
		[Italian]: 'Terra',
		[Japanese]: 'じめん (地面)',
		[Korean]: '땅',
		[Spanish]: 'Tierra',
	},
	[Flying]: {
		[Chinese]: '飛行 / 飞行',
		[English]: 'Flying',
		[French]: 'Vol',
		[German]: 'Flug',
		[Italian]: 'Volante',
		[Japanese]: 'ひこう (飛行)',
		[Korean]: '비행',
		[Spanish]: 'Volador',
	},
	[Psychic]: {
		[Chinese]: '超能力',
		[English]: 'Psychic',
		[French]: 'Psy',
		[German]: 'Psycho',
		[Italian]: 'Psico',
		[Japanese]: 'エスパー',
		[Korean]: '에스퍼',
		[Spanish]: 'Psíquico',
	},
	[Bug]: {
		[Chinese]: '蟲 / 虫',
		[English]: 'Bug',
		[French]: 'Insecte',
		[German]: 'Käfer',
		[Italian]: 'Coleottero',
		[Japanese]: 'むし (虫)',
		[Korean]: '벌레',
		[Spanish]: 'Bicho',
	},
	[Rock]: {
		[Chinese]: '岩石',
		[English]: 'Rock',
		[French]: 'Roche',
		[German]: 'Gestein',
		[Italian]: 'Roccia',
		[Japanese]: 'いわ (岩)',
		[Korean]: '바위',
		[Spanish]: 'Roca',
	},
	[Ghost]: {
		[Chinese]: '幽靈 / 幽灵',
		[English]: 'Ghost',
		[French]: 'Spectre',
		[German]: 'Geist',
		[Italian]: 'Spettro',
		[Japanese]: 'ゴースト',
		[Korean]: '고스트',
		[Spanish]: 'Fantasma',
	},
	[Dragon]: {
		[Chinese]: '龍 / 龙',
		[English]: 'Dragon',
		[French]: 'Dragon',
		[German]: 'Drache',
		[Italian]: 'Drago',
		[Japanese]: 'ドラゴン',
		[Korean]: '드래곤',
		[Spanish]: 'Dragón',
	},
	[Dark]: {
		[Chinese]: '惡 / 恶',
		[English]: 'Dark',
		[French]: 'Ténèbres',
		[German]: 'Unlicht',
		[Italian]: 'Buio',
		[Japanese]: 'あく (悪)',
		[Korean]: '악',
		[Spanish]: 'Siniestro',
	},
	[Steel]: {
		[Chinese]: '鋼 / 钢',
		[English]: 'Steel',
		[French]: 'Acier',
		[German]: 'Stahl',
		[Italian]: 'Acciaio',
		[Japanese]: 'はがね (鋼)',
		[Korean]: '강철',
		[Spanish]: 'Acero',
	},
	[Fairy]: {
		[Chinese]: '妖精',
		[English]: 'Fairy',
		[French]: 'Fée',
		[German]: 'Fee',
		[Italian]: 'Folletto',
		[Japanese]: 'フェアリー',
		[Korean]: '페어리',
		[Spanish]: 'Hada',
	},
};

export const getName = (type: Type, language: Language) =>
	typeNames[type][language];
