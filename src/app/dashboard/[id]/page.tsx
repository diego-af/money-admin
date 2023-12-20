'use client';

import {useContext, useEffect} from 'react';
import * as S from './Dashboard.styles';
import CardMoney from './components/CardMoney';
import Header from './components/Header';
import InputFilter from './components/InputFilter';
import Items from './components/Items';
import ModalTransAction from './components/ModalTransAction';
import axios from 'axios';
import {MoneyProvider} from '../../provider';
import {MoneyContext, MoneyContextValue} from '@/app/provider';

export default function Dashboard({params}: {params: {id: string}}) {
	const {user, setUser} = useContext(MoneyContext) as MoneyContextValue;
	console.log(params);
	return (
		<MoneyProvider>
			<S.Container>
				<S.Content>
					<Header />
					<CardMoney />
					<InputFilter />
					<Items id={params.id} />
				</S.Content>
				<ModalTransAction id={params.id} />
			</S.Container>
		</MoneyProvider>
	);
}
