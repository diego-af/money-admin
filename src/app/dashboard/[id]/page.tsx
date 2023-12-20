'use client';

import {useContext, useEffect} from 'react';
import * as S from './Dashboard.styles';
import CardMoney from './components/CardMoney';
import Header from './components/Header';
import InputFilter from './components/InputFilter';
import Items from './components/Items';
import ModalTransAction from './components/ModalTransAction';

import {MoneyProvider} from '../../provider';

export default function Dashboard({params}: {params: {id: string}}) {
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
