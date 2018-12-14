export const getValueFromMap = <K, V>(
	map: Map<K, V>,
	key: K,
	mapName: string,
): V => {
	if (!map.has(key)) {
		throw Error(`Unknown ${mapName} key "${key}"`);
	}

	return map.get(key) as V;
};
