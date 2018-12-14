import {
	Dark,
	Fairy,
	Fire,
	getEffectiveness,
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
