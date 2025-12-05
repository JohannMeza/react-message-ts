export const APP_AUTH_PATH = {
  SIGN_IN: '/auth/sign-in',
  REGISTER: '/auth/register',
  ACCESS: '/auth/access'
};

export const APP_PROFILE_PATH = {
  ME: '/profile',
  UPDATE: '/profile',
  UPLOAD: '/profile/upload'
};

export const APP_PROFILE_USER_PATH = {
  PROFILE: '/profile-user/find',
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
  ALL_CONTACTS: '/contacts/find/all',
  ONE: '/contacts/find',
  STATE: '/contacts/state',
  BLOCKED: 'contacts/blocked',
  UNBLOCKED: 'contacts/unblocked',
};

export const APP_GROUP_PATH = {
  ALL: '/groups/all',
  FIND_ONE: '/groups/find',
  CREATE: '/groups/new',
  UPLOAD: '/groups/upload',
  PROFILE: '/groups/profile',
};

export const APP_SETTING_PATH = {
  LIST: '/configurations/list',
  UPDATE: '/configurations/update/user'
};

export const APP_MESSAGES_PATH = {
  SEND: '/messages/send',
  SEND_GROUP: '/messages/send-group',
  CONTACT: '/messages/contact',
  GROUP: '/messages/group',
  UPDATE: '/messages/edit',
  UPDATE_GROUP: '/messages/edit_group',
  STATE_READ: '/messages/state_read'
};