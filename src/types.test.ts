import { All as AllLanguages } from './languages';
import {
	All as AllTypes,
	Dark,
	Fairy,
	Fire,
	getEffectiveness,
	getName,
	Ghost,
	Normal,
	Water,
} from './types';

test('Effectiveness', () => {
	expect(getEffectiveness(Water, Fire)).toBe(2);
	expect(getEffectiveness(Fire, Water)).toBe(0.5);
	expect(getEffectiveness(Normal, Ghost)).toBe(0);
	expect(getEffectiveness(Ghost, Normal)).toBe(0);
	expect(getEffectiveness(Fairy, Dark)).toBe(2);
});

test('All types are named for every language', () => {
	for (const language of AllLanguages) {
		for (const type of AllTypes) {
			expect(getName(type, language)).toBeTruthy();
		}
	}
});
