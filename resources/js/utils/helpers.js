/**
 * Turn an array of strings into a class name, omitting empty values.
 *
 * @param {array<string>} a - An array of class names.
 * @return {string}
 */
export const makeClassName = a => {
    return (Array.isArray(a) ? a : [a]).filter(c=>c).join(' ');
};