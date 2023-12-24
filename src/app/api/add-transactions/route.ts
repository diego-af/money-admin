import prisma from '@/app/_lib/database';
import {transformSync} from 'next/dist/build/swc';
import {NextResponse, NextRequest} from 'next/server';

export async function POST(request: NextRequest) {
	const transactions = await request.json();

	const {description, price, type, categories, date, transactionId} =
		transactions;
	const dateNow = new Date(date).toISOString();
	try {
		const transactionsAdd = await prisma.transaction.create({
			data: {
				description: description,
				price: price,
				type: type,
				category: categories,
				date: dateNow,
				transactionId: transactionId
			}
		});

		return NextResponse.json({data: transactionsAdd, sucess: true});
	} catch (error) {
		console.log(error);
		return NextResponse.json({data: [], sucess: false});
	}
}
