// app/routes/api.$hello.jsx
import { json } from '@remix-run/node';

export const loader = async () => {
  return json({ message: 'GET API is working now!' });
};
