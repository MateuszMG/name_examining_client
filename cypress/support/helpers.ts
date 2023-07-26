export const domainUrl = `http://localhost:3013`;

export const CYPRESS_ID_TO_DELETE = 'CYPRESS_ID_TO_DELETE';

export const createId = () =>
  CYPRESS_ID_TO_DELETE + Math.random().toFixed(5).slice(2);

export const testId = (testId: string | number) => `[data-testid="${testId}"]`;

export const loginData = {
  username: 'username' + CYPRESS_ID_TO_DELETE,
  password: 'StrongPassword1!',
};
