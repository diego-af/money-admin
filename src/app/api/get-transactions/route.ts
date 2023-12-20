import prisma from '@/app/_lib/database';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url);
	const id = searchParams.get('id');

	console.log(id);
	try {
		const trasactions = await prisma.transaction.findMany({
			orderBy: {
				description: 'asc'
			}
		});
		return NextResponse.json({data: trasactions, mensagem: true});
	} catch (error) {
		return NextResponse.json({data: [], mensagem: false});
	}
}
