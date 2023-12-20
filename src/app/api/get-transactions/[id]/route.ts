import prisma from '@/app/_lib/database';
import {NextRequest, NextResponse} from 'next/server';
import {NextApiRequest} from 'next';

export async function GET(request: NextRequest, context: any) {
	const {params} = context;

	try {
		const trasactions = await prisma.transaction.findMany({
			where: {
				transactionId: params.id
			}
		});
		return NextResponse.json({data: trasactions, mensagem: true});
	} catch (error) {
		return NextResponse.json({data: [], mensagem: false});
	}
}
