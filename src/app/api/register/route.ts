import prisma from '@/app/_lib/database';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
	const user = await request.json();
	const {name, email, password} = user;
	try {
		const user = await prisma.user.create({
			data: {
				name: name,
				email: email,
				password: password
			}
		});
		return NextResponse.json({data: user, mensagem: true});
	} catch (error) {
		return NextResponse.json({
			data: [],
			mensagem:
				'Não foi possivel realizar o o cadastro,verifique o email e senha'
		});
	}
}
