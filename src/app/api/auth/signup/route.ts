import argon from 'argon2';
import prisma from '~lib/prisma';

export async function POST(req: Request) {
	const payload = await req.json();

	// todo: Add zod validation

	const isFirst = (await prisma.user.count()) === 0;

	if (!isFirst) {
		return new Response('Signups are disabled', { status: 403 });
	}

	const hash = await argon.hash(payload.password);

	await prisma.user.create({
		data: {
			username: payload.username,
			passwordHash: hash,
		},
	});

	return new Response('ok');
}
