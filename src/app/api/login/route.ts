import prisma from '@/app/_lib/database';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
	const user = await request.json();
	const {email, password} = user;
	try {
		const trasactions = await prisma.user.findMany({
			where: {
				email: email,
				password: password
			}
		});
		return NextResponse.json({data: trasactions, mensagem: true});
	} catch (error) {
		return NextResponse.json({
			data: [],
			mensagem: 'Não foi possivel realizar o login,verifique o email e senha'
		});
	}
}
