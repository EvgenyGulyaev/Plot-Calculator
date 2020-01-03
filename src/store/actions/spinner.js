import { TOGGLE_SPINNER } from '../actionNames';

/** Handle spinner
 * @param data
 * @returns {{data: *, type: string}}
 */
export const toggleSpinner = data => ({
  type: TOGGLE_SPINNER, data,
});
