// const regex = {
//   emptyField: /(.|\s)*\S(.|\s)*/,
//   email:
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   // contain at least 1 lowercase character, 1 uppercase character, 1 number, 1 special character and min 8 characters in total
//   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
// };

// /**
//  * Validator input, true when haveError
//  * @param  {String} input
//  * @param  {('emptyField'|'email'|'min8Characters'|'min2Characters'|'password'|'finnishPhoneNo')} validatorType
//  * @returns Boolean
//  */

// export const validator = (input, validatorType) => {
//   if (regex[validatorType] === undefined) {
//     throw new Error("validatorType is not exists");
//   }
//   return !regex[validatorType].test(input);
// };

// /**
//  * Checks if a JavaScript value is empty
//  * @example
//  *    isEmpty(null); // true
//  *    isEmpty(undefined); // true
//  *    isEmpty(''); // true
//  *    isEmpty([]); // true
//  *    isEmpty({}); // true
//  * @param {any} value - item to test
//  * @returns {boolean} true if empty, otherwise false
//  */

// export const isEmpty = (value) => {
//   return (
//     value === null || // check for null
//     value === undefined || // check for undefined
//     value === "" || // check for empty string
//     (Array.isArray(value) && value.length === 0) || // check for empty array
//     (typeof value === "object" && Object.keys(value).length === 0) // check for empty object
//   );
// };
