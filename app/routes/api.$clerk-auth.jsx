// app/routes/api.$hello.jsx
import { json } from '@remix-run/node';
import prisma from '../db.server';

export const loader = async ({request}) => {
  const sessionsWithEmptyEmail = await prisma.session.findMany({
    where: {
      email: "",
    },
  });
  

  return json({ message: 'GET API is working now!'+sessionsWithEmptyEmail });
};
