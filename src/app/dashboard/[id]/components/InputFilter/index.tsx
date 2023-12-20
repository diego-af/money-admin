'use client';
import {useContext, useEffect, useState} from 'react';
import * as S from './InputFilter.styles';
import {MoneyContext, MoneyContextValue} from '@/app/provider';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default function InputFilter() {
	const [loadingRefresh, setloadingRefresh] = useState(false);
	const {transactions, setTransactions} = useContext(
		MoneyContext
	) as MoneyContextValue;
	const [fliterWord, setFliterWord] = useState('');
	const filterTrasactions = (word: string) => {
		const filteredTransactions = transactions.filter((transaction) =>
			transaction.description.toLowerCase().includes(word.toLowerCase())
		);
		setTransactions(filteredTransactions);
	};

	// useEffect(() => {
	// 	async function getTransactions() {
	// 		setloadingRefresh(true);
	// 		try {
	// 			const response = await axios.get('/api/get-transactions');
	// 			console.log(response.data.data);
	// 			setTransactions(response.data.data);
	// 			setloadingRefresh(false);
	// 		} catch (error) {
	// 			console.error(error);
	// 			setloadingRefresh(false);
	// 		} finally {
	// 			setloadingRefresh(false);
	// 		}
	// 	}

	// 	if (fliterWord === '') {
	// 		getTransactions();
	// 	}
	// }, [fliterWord]);

	return (
		<S.Container>
			<S.Input
				placeholder='Busque por transações'
				value={fliterWord}
				onChange={(e) => setFliterWord(e.target.value)}
			/>
			<S.Button onClick={() => filterTrasactions(fliterWord)}>Filtrar</S.Button>
		</S.Container>
	);
}
