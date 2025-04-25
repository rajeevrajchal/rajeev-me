import type { Visitor, CustomAtRules } from 'lightningcss';
import { Variables, Breakpoints } from './variables';

function flatten(obj: unknown | Record<string, unknown>, depth = 0) {
	const toReturn: Record<string, unknown> = {};
	if (typeof obj != 'object') return {};
	if (!obj) return {};

	const keys = Object.keys(obj);
	const values = Object.values(obj);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (!Object.hasOwnProperty.call(obj, key)) continue;
		const val = values[i];

		if (typeof val == 'object' && val !== null) {
			if (depth > 4) {
				console.warn('FlattenObject: Max depth reached', key);
				continue;
			}
			const flatObject = flatten(val, depth + 1);
			for (const deeperKey in flatObject) {
				if (!flatObject.hasOwnProperty(deeperKey)) continue;

				const newKey = key + '-' + deeperKey;
				toReturn[newKey] = flatObject[deeperKey];
			}
		} else {
			toReturn[key] = val;
		}
	}

	return toReturn;
}

export const FlattenToEnvironment = (obj: unknown | Record<string, unknown>) => {
	if (typeof obj != 'object') return {};
	if (!obj) return {};

	const flattened = flatten(obj);

	const result: Record<string, () => { raw: string }> = {};

	for (const key in flattened) {
		result[`--${key}`] = () => ({ raw: `${flattened[key]} ` });
	}

	return result;
};

export const variablesVisitor: Visitor<CustomAtRules> = {
	EnvironmentVariable: FlattenToEnvironment(Variables),
	MediaQuery: (query) => {
		// boolean feature query is the same type as the spec for custom media queries
		// https://lightningcss.dev/transpilation.html#custom-media-queries
		// so we use it here until LightningCSS supports defining the custom media queries in the config
		if (!query.condition) return;
		if (query.condition.type !== 'feature') return;
		if (query.condition.value.type !== 'boolean') return;

		// remove the -- prefix of CSS dashed idents
		const key = query.condition.value.name.replace(/^--/, '') as keyof typeof Breakpoints;

		if (Breakpoints[key]) {
			return {
				raw: Breakpoints[key]
			};
		} else {
			console.warn('Custom env variable not found : ' + query.condition.value.name);
		}
	}
};
