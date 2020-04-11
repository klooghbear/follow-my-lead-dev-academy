import request from 'superagent';

//export and instantiate action types
//example:
//export const REQUEST_USERS = 'REQUEST_USERS'
//export const RECEIVE_USERS = 'RECEIVE_USERS'
//export const ERROR = 'ERROR'
//const URL = 'location'

//define payload methods
//export const requestUsers = () => {
//   return {
//     type: REQUEST_USERS
//   }
// }

//export const receiveUsers = (users) => {
//   return {
//     type: RECEIVE_USERS,
//     payload: users.map(user => users.data)
//   }
// }

//export const receiveError = (err) => {
//   return {
//     type: Error,
//     payload: err
//   }
// }

//API
// export function fetchUsers(argument) {
//   return (dispatch) => {
//     dispatch(requestUsers());
//     return request
//       .get(URL)
//       .then((res) => {
//         dispatch(receiveUsers(res.body));
//       })
//       .catch((err) => {
//         dispatch(reveiveError(err.message));
//       });
//   };
// }
