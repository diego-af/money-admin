'use client';
import {useContext, useEffect, useState} from 'react';
import * as S from './Items.styles';
import axios from 'axios';
import {ConvertFunctionMoney} from '@/app/hooks/ConvertMoneyBRL';
import ReactLoading from 'react-loading';
import {MoneyContext, MoneyContextValue} from '@/app/provider';
import {parseISO, format} from 'date-fns';
import {Trash2Icon} from 'lucide-react';

export default function Items({id}: {id: string}) {
	const [loadingRefresh, setloadingRefresh] = useState(false);

	const {
		transactions,
		setTransactions,
		requestLoading,
		setRequestLoading,
		openModal
	} = useContext(MoneyContext) as MoneyContextValue;

	async function getTransactions() {
		setRequestLoading(true);
		try {
			const response = await axios.get(`/api/get-transactions/${id}`);

			setTransactions(response.data.data);
		} catch (error) {
			console.error(error);
			setRequestLoading(false);
		} finally {
			setRequestLoading(false);
		}
	}
	useEffect(() => {
		getTransactions();
	}, [openModal]);

	const deleteTransaction = async (id: string) => {
		setRequestLoading(true);
		try {
			const response = await axios.delete(`/api/deletetransaction/${id}`);

			if (response.data) {
				getTransactions();
			}
		} catch (error) {
			console.error(error);
		} finally {
			setRequestLoading(false);
		}
	};

	const formatDate = (date: string) => {
		const formatedDate = parseISO(date);

		const dateNew = format(formatedDate, 'dd/MM/yyyy');

		return dateNew;
	};

	if (transactions.length === 0) {
		return (
			<S.LoadingContainer>
				<S.Description>Não existem transações</S.Description>
			</S.LoadingContainer>
		);
	}
	if (requestLoading) {
		return (
			<S.LoadingContainer>
				<ReactLoading type='spin' color='#fff' height={70} width={70} />
			</S.LoadingContainer>
		);
	}
	return (
		<S.Container scroll={transactions.length > 5}>
			<S.LoadingSimulation loading={loadingRefresh && !requestLoading}>
				<ReactLoading type='spin' color='#fff' height={70} width={70} />
			</S.LoadingSimulation>
			{transactions?.map((transaction) => (
				<S.Item>
					<Trash2Icon
						color='#b33434'
						size={20}
						className='cursor-pointer'
						onClick={() => deleteTransaction(String(transaction.id))}
					/>
					<S.Description>{transaction.description}</S.Description>

					<S.Value isColor={transaction.type === 'entry'}>
						{ConvertFunctionMoney(Number(transaction.price))}
					</S.Value>
					<S.Category>{transaction.category}</S.Category>
					<S.Date>{formatDate(transaction.date)}</S.Date>
				</S.Item>
			))}
		</S.Container>
	);
}
