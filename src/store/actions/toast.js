import {
  SHOW_TOAST,
  HIDE_TOAST,
} from '../actionNames';

/**
 * Show Toast
 * @param data
 * @returns {{data: *, type: string}}
 */
export const showToast = data => ({
  type: SHOW_TOAST,
  data,
});

/**
 * Hide toast
 * @returns {{type: string}}
 */
export const hideToast = () => ({ type: HIDE_TOAST });
