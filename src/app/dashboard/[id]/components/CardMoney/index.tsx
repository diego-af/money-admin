'use client';

import Image from 'next/image';
import * as S from './CardMoney.styles';
import {useContext} from 'react';
import {ITransaction, MoneyContext, MoneyContextValue} from '@/app/provider';
import {ConvertFunctionMoney} from '@/app/hooks/ConvertMoneyBRL';

export default function CardMoney() {
	const {transactions} = useContext(MoneyContext) as MoneyContextValue;

	const totalTransactions = transactions.reduce(
		(acc: number, item: ITransaction) => acc + Number(item.price),
		0
	);
	const totalTransactionsEntry: number = transactions.reduce(
		(acc: number, item: ITransaction) =>
			item.type === 'entry' ? acc + Number(item.price) : acc,
		0
	);
	const totalTransactionsOut: number = transactions.reduce(
		(acc: number, item: ITransaction) =>
			item.type === 'out' ? acc + Number(item.price) : acc,
		0
	);

	const elementsCards = [
		{
			name: 'Entradas',
			value: ConvertFunctionMoney(totalTransactionsEntry),
			icon: '/money-arrow.svg'
		},
		{
			name: 'Saídas',
			value: ConvertFunctionMoney(totalTransactionsOut),
			icon: '/money-arrow-down.svg'
		},
		{
			name: 'Total',
			value: ConvertFunctionMoney(totalTransactions),
			icon: '/money-cifra.svg'
		}
	];
	return (
		<S.Container>
			{elementsCards.map((card) => (
				<S.Card key={card.name} isColor={card.name === 'Total'}>
					<S.InfoHeader>
						<h3>{card.name}</h3>
						<Image src={card.icon} alt={card.name} width={32} height={32} />
					</S.InfoHeader>
					<S.ValueMoney>{card.value}</S.ValueMoney>
				</S.Card>
			))}
		</S.Container>
	);
}
