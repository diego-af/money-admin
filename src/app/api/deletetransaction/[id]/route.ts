import prisma from '@/app/_lib/database';
import {NextRequest, NextResponse} from 'next/server';

export async function DELETE(request: Request, context: any) {
	const {params} = context;

	try {
		const trasactionsFind = await prisma.transaction.findMany({
			where: {
				id: params.id
			}
		});

		if (trasactionsFind) {
			const trasactions = await prisma.transaction.delete({
				where: {
					id: params.id
				}
			});
			return NextResponse.json({data: trasactions, mensagem: true});
		}

		return NextResponse.json({
			data: [],
			mensagem: 'Não foi encionado um erro, tente novamente mais tarde'
		});
	} catch (error) {
		return NextResponse.json({
			data: [],
			mensagem: 'Não foi encionado um erro, tente novamente mais tarde'
		});
	}
}
