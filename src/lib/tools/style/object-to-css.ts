/* eslint-disable @typescript-eslint/no-explicit-any */

const capitalRegex = /[A-Z]/g;

//
// Very nice function to flatten an object
// Slightly adjusted from this answer
// https://stackoverflow.com/a/53739792
//
// Mainly added a depth limit to prevent infinite recursion
// Also added a handler for Color classes
// And changed the key formatting to kebab-case
//
function flattenObject(obj: any, camel: boolean = false, depth = 0) {
  const toReturn: { [key: string]: any } = {};

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (!obj.hasOwnProperty(key)) continue;
    const val = obj[key];

    if (typeof val == 'object' && val !== null) {
      if (depth > 4) {
        console.warn('FlattenObject: Max depth reached');
        continue;
      }
      const flatObject = flattenObject(obj[key], camel, depth + 1);
      for (const deeperKey in flatObject) {
        // eslint-disable-next-line no-prototype-builtins
        if (!flatObject.hasOwnProperty(deeperKey)) continue;

        let newKey = key + '-' + deeperKey;
        if (camel) newKey = key + deeperKey.charAt(0).toUpperCase() + deeperKey.slice(1);
        toReturn[newKey] = flatObject[deeperKey];
      }
    } else {
      toReturn[key] = obj[key];
    }
  }
  return toReturn;
}

export const objectToCssVariables = (
  obj: { [key: string]: any },
  prefix = '--',
  camelCase = false
) => {
  if (!obj) return '';
  if (typeof obj !== 'object') return '';

  const flattened = flattenObject(obj, camelCase);
  const result = [];
  for (const key in flattened) {
    const value = flattened[key];
    const convertedKey = camelCase
      ? key
      : key.replace(capitalRegex, (letter) => `-${letter.toLowerCase()}`);
    result.push(`${prefix}${convertedKey}:${value}`);
  }
  return result.join(';') + ';';
};
