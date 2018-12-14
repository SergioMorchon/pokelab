import { Attack, Defense, SpecialAttack, SpecialDefense, Speed } from './stats';

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

export type NatureStat =
	| typeof Attack
	| typeof Defense
	| typeof SpecialAttack
	| typeof SpecialDefense
	| typeof Speed;

export const Hardy = 'Hardy';
export const Lonely = 'Lonely';
export const Adamant = 'Adamant';
export const Naughty = 'Naughty';
export const Brave = 'Brave';
export const Bold = 'Bold';
export const Docile = 'Docile';
export const Impish = 'Impish';
export const Lax = 'Lax';
export const Relaxed = 'Relaxed';
export const Modest = 'Modest';
export const Mild = 'Mild';
export const Bashful = 'Bashful';
export const Rash = 'Rash';
export const Quiet = 'Quiet';
export const Calm = 'Calm';
export const Gentle = 'Gentle';
export const Careful = 'Careful';
export const Quirky = 'Quirky';
export const Sassy = 'Sassy';
export const Timid = 'Timid';
export const Hasty = 'Hasty';
export const Jolly = 'Jolly';
export const Naive = 'Naive';
export const Serious = 'Serious';

export type Nature =
	| typeof Hardy
	| typeof Lonely
	| typeof Adamant
	| typeof Naughty
	| typeof Brave
	| typeof Bold
	| typeof Docile
	| typeof Impish
	| typeof Lax
	| typeof Relaxed
	| typeof Modest
	| typeof Mild
	| typeof Bashful
	| typeof Rash
	| typeof Quiet
	| typeof Calm
	| typeof Gentle
	| typeof Careful
	| typeof Quirky
	| typeof Sassy
	| typeof Timid
	| typeof Hasty
	| typeof Jolly
	| typeof Naive
	| typeof Serious;

export const All: ReadonlyArray<Nature> = [
	Hardy,
	Lonely,
	Adamant,
	Naughty,
	Brave,
	Bold,
	Docile,
	Impish,
	Lax,
	Relaxed,
	Modest,
	Mild,
	Bashful,
	Rash,
	Quiet,
	Calm,
	Gentle,
	Careful,
	Quirky,
	Sassy,
	Timid,
	Hasty,
	Jolly,
	Naive,
	Serious,
];

const statIndex = {
	[Attack]: 0,
	[Defense]: 1,
	[SpecialAttack]: 2,
	[SpecialDefense]: 3,
	[Speed]: 4,
};

/**
 * [increases,decreases]
 */
const statEffects: Nature[][] = [
	[Hardy, Lonely, Adamant, Naughty, Brave],
	[Bold, Docile, Impish, Lax, Relaxed],
	[Modest, Mild, Bashful, Rash, Quiet],
	[Calm, Gentle, Careful, Quirky, Sassy],
	[Timid, Hasty, Jolly, Naive, Serious],
];

export const findNature = (
	increasedStat: NatureStat,
	decreasedStat: NatureStat,
): Nature => statEffects[statIndex[increasedStat]][statIndex[decreasedStat]];

const natureNames = {
	[Adamant]: {
		[English]: 'Adamant',
		[Japanese]: 'いじっぱり',
		[French]: 'Rigide',
		[German]: 'Hart',
		[Italian]: 'Decisa',
		[Spanish]: 'Firme',
		[Korean]: '고집',
		[Chinese]: '固執 / 固执',
	},
	[Bashful]: {
		[English]: 'Bashful',
		[Japanese]: 'てれや',
		[French]: 'Pudique',
		[German]: 'Zaghaft',
		[Italian]: 'Ritrosa',
		[Spanish]: 'Tímida',
		[Korean]: '수줍음',
		[Chinese]: '害羞',
	},
	[Bold]: {
		[English]: 'Bold',
		[Japanese]: 'ずぶとい',
		[French]: 'Assuré',
		[German]: 'Kühn',
		[Italian]: 'Sicura',
		[Spanish]: 'Osada',
		[Korean]: '대담',
		[Chinese]: '大膽 / 大胆',
	},
	[Brave]: {
		[English]: 'Brave',
		[Japanese]: 'ゆうかん',
		[French]: 'Brave',
		[German]: 'Mutig',
		[Italian]: 'Audace',
		[Spanish]: 'Audaz',
		[Korean]: '용감',
		[Chinese]: '勇敢',
	},
	[Calm]: {
		[English]: 'Calm',
		[Japanese]: 'おだやか',
		[French]: 'Calme',
		[German]: 'Still',
		[Italian]: 'Calma',
		[Spanish]: 'Serena',
		[Korean]: '차분',
		[Chinese]: '溫和 / 温和',
	},
	[Careful]: {
		[English]: 'Careful',
		[Japanese]: 'しんちょう',
		[French]: 'Prudent',
		[German]: 'Sacht',
		[Italian]: 'Cauta',
		[Spanish]: 'Cauta',
		[Korean]: '신중',
		[Chinese]: '慎重',
	},
	[Docile]: {
		[English]: 'Docile',
		[Japanese]: 'すなお',
		[French]: 'Docile',
		[German]: 'Sanft',
		[Italian]: 'Docile',
		[Spanish]: 'Dócil',
		[Korean]: '온순',
		[Chinese]: '坦率',
	},
	[Gentle]: {
		[English]: 'Gentle',
		[Japanese]: 'おとなしい',
		[French]: 'Gentil',
		[German]: 'Zart',
		[Italian]: 'Gentile',
		[Spanish]: 'Amable',
		[Korean]: '얌전',
		[Chinese]: '溫順 / 温顺',
	},
	[Hardy]: {
		[English]: 'Hardy',
		[Japanese]: 'がんばりや',
		[French]: 'Hardi',
		[German]: 'Robust',
		[Italian]: 'Ardita',
		[Spanish]: 'Fuerte',
		[Korean]: '노력',
		[Chinese]: '勤奮 / 勤奋',
	},
	[Hasty]: {
		[English]: 'Hasty',
		[Japanese]: 'せっかち',
		[French]: 'Pressé',
		[German]: 'Hastig',
		[Italian]: 'Lesta',
		[Spanish]: 'Activa',
		[Korean]: '성급',
		[Chinese]: '急躁',
	},
	[Impish]: {
		[English]: 'Impish',
		[Japanese]: 'わんぱく',
		[French]: 'Malin',
		[German]: 'Pfiffig',
		[Italian]: 'Scaltra',
		[Spanish]: 'Agitada',
		[Korean]: '장난꾸러기',
		[Chinese]: '淘氣 / 淘气',
	},
	[Jolly]: {
		[English]: 'Jolly',
		[Japanese]: 'ようき',
		[French]: 'Jovial',
		[German]: 'Froh',
		[Italian]: 'Allegra',
		[Spanish]: 'Alegre',
		[Korean]: '명랑',
		[Chinese]: '爽朗',
	},
	[Lax]: {
		[English]: 'Lax',
		[Japanese]: 'のうてんき',
		[French]: 'Lâche',
		[German]: 'Lasch',
		[Italian]: 'Fiacca',
		[Spanish]: 'Floja',
		[Korean]: '촐랑',
		[Chinese]: '樂天 / 乐天',
	},
	[Lonely]: {
		[English]: 'Lonely',
		[Japanese]: 'さみしがり',
		[French]: 'Solo',
		[German]: 'Solo',
		[Italian]: 'Schiva',
		[Spanish]: 'Huraña',
		[Korean]: '외로움',
		[Chinese]: '怕寂寞',
	},
	[Mild]: {
		[English]: 'Mild',
		[Japanese]: 'おっとり',
		[French]: 'Doux',
		[German]: 'Mild',
		[Italian]: 'Mite',
		[Spanish]: 'Afable',
		[Korean]: '의젓',
		[Chinese]: '慢吞吞',
	},
	[Modest]: {
		[English]: 'Modest',
		[Japanese]: 'ひかえめ',
		[French]: 'Modeste',
		[German]: 'Mäßig',
		[Italian]: 'Modesta',
		[Spanish]: 'Modesta',
		[Korean]: '조심',
		[Chinese]: '內斂 / 内敛',
	},
	[Naive]: {
		[English]: 'Naive',
		[Japanese]: 'むじゃき',
		[French]: 'Naïf',
		[German]: 'Naiv',
		[Italian]: 'Ingenua',
		[Spanish]: 'Ingenua',
		[Korean]: '천진난만',
		[Chinese]: '天真',
	},
	[Naughty]: {
		[English]: 'Naughty',
		[Japanese]: 'やんちゃ',
		[French]: 'Mauvais',
		[German]: 'Frech',
		[Italian]: 'Birbona',
		[Spanish]: 'Pícara',
		[Korean]: '개구쟁이',
		[Chinese]: '頑皮 / 顽皮',
	},
	[Quiet]: {
		[English]: 'Quiet',
		[Japanese]: 'れいせい',
		[French]: 'Discret',
		[German]: 'Ruhig',
		[Italian]: 'Quieta',
		[Spanish]: 'Mansa',
		[Korean]: '냉정',
		[Chinese]: '冷靜 / 冷静',
	},
	[Quirky]: {
		[English]: 'Quirky',
		[Japanese]: 'きまぐれ',
		[French]: 'Bizarre',
		[German]: 'Kauzig',
		[Italian]: 'Furba',
		[Spanish]: 'Rara',
		[Korean]: '변덕',
		[Chinese]: '浮躁',
	},
	[Rash]: {
		[English]: 'Rash',
		[Japanese]: 'うっかりや',
		[French]: 'Foufou',
		[German]: 'Hitzig',
		[Italian]: 'Ardente',
		[Spanish]: 'Alocada',
		[Korean]: '덜렁',
		[Chinese]: '馬虎 / 马虎',
	},
	[Relaxed]: {
		[English]: 'Relaxed',
		[Japanese]: 'のんき',
		[French]: 'Relax',
		[German]: 'Locker',
		[Italian]: 'Placida',
		[Spanish]: 'Plácida',
		[Korean]: '무사태평',
		[Chinese]: '悠閒 / 悠闲',
	},
	[Sassy]: {
		[English]: 'Sassy',
		[Japanese]: 'なまいき',
		[French]: 'Malpoli',
		[German]: 'Forsch',
		[Italian]: 'Vivace',
		[Spanish]: 'Grosera',
		[Korean]: '건방',
		[Chinese]: '自大',
	},
	[Serious]: {
		[English]: 'Serious',
		[Japanese]: 'まじめ',
		[French]: 'Sérieux',
		[German]: 'Ernst',
		[Italian]: 'Seria',
		[Spanish]: 'Seria',
		[Korean]: '성실',
		[Chinese]: '認真 / 认真',
	},
	[Timid]: {
		[English]: 'Timid',
		[Japanese]: 'おくびょう',
		[French]: 'Timide',
		[German]: 'Scheu',
		[Italian]: 'Timida',
		[Spanish]: 'Miedosa',
		[Korean]: '겁쟁이',
		[Chinese]: '膽小 / 胆小',
	},
};

export const getName = (nature: Nature, language: Language) =>
	natureNames[nature][language];
