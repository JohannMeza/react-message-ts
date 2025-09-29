export const APP_AUTH_PATH = {
  SIGN_IN: '/auth/sign-in',
  REGISTER: '/auth/register',
  ACCESS: '/auth/access'
};

export const APP_PROFILE_PATH = {
  ME: '/profile',
  UPDATE: '/profile'
};

export const APP_USER_PATH = {
  ALL: '/users/all',
  FIND_ONE: '/users/find'
};

export const APP_REQUEST_PATH = {
  NEW: '/requests/new',
  LIST: '/requests/all',
  ACCEPT: '/requests/accept',
  REJECT: '/requests/reject',
};

export const APP_CONTACT_PATH = {
  ALL: '/contacts',
  ONE: '/contacts/find',
  STATE: '/contacts/state',
  BLOCKED: 'contacts/blocked',
  UNBLOCKED: 'contacts/unblocked',
};

export const APP_SETTING_PATH = {
  LIST: '/configurations/list',
  UPDATE: '/configurations/update/user'
};

export const APP_MESSAGES_PATH = {
  SEND: '/messages/send',
  CONTACT: '/messages/contact',
  UPDATE: '/messages/edit',
  STATE_READ: '/messages/state_read'
};