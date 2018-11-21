/**
 * Turn an array of strings into a class name, omitting empty values.
 *
 * @param {array<string>} a - An array of class names.
 * @return {string}
 */
export const makeClassName = a => {
    return (Array.isArray(a) ? a : [a]).filter(c=>c).join(' ');
};

/**
 * Safely traverse nested object and returns item indicated at end of path
 * Examples:
 *
 * Example Object:
 * let obj = {
 *      one: {
 *          two: {
 *              three: [
 *                  {id: 1, name: "test1"},
 *                  {id: 2, name: "test2"}
 *              ]
  *         }
  *     }
  *  }
 *
 * let r = digIn(['one', 'two', 'three'], obj, {})
 * Returns: [ {id: 1, name: "test1"}, {id: 2, name: "test2"} ]
 *
 * Ex 2: let s = digIn(['one', 'two', 'three', 1], obj, {})
 * Returns: {id: 2, name: "test2"}
 *
 * Ex 3: let t = digIn(['one', 'two', 'three', 1, 'name'], obj, {})
 * Returns: "test"
 *
 * Ex 4: let u = digIn(['one', 'two', 'three', 'four'], obj, {})
 * Returns: {} - item four does not exist
 *
 * Ex 5: let v = digIn(['one', 'two', 'three', 1, 'age'], obj, [])
 * Returns: [] - no such key 'age'
 *
 * @param {Array} path - the nested path to the item you wish to return
 * @param {Object} obj - the object to check against
 * @param {*=null} defaultReturn - what to return if item is not found
 * @returns {*}
 */
export const digIn = (path, obj, defaultReturn = null) => {
    for (let key of path) {
        if (obj && (typeof obj == 'object' || Array.isArray(obj)) && key in obj) {
            obj = obj[key]
        }
        else {
            return defaultReturn;
        }
    }
    return obj;
};