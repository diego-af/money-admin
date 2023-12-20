'use client';

import {MoneyContext, MoneyContextValue} from '@/app/provider';
import * as S from './Header.styles';
import Image from 'next/image';
import {useContext} from 'react';
import {useRouter} from 'next/navigation';
export default function Header() {
	const router = useRouter();
	const {setOpenModal, openModal} = useContext(
		MoneyContext
	) as MoneyContextValue;

	const getOut = () => {
		localStorage.removeItem('user');
		router.push('/login');
	};
	return (
		<S.Container>
			<S.Content>
				<Image src='/money.svg' alt='Logo' width={32} height={32} />
				<S.Title>DT Money</S.Title>
			</S.Content>

			<S.ContentButton>
				<S.Button onClick={() => setOpenModal(!openModal)}>
					Nova transação
				</S.Button>
				<S.Button onClick={getOut}>Sair</S.Button>
			</S.ContentButton>
		</S.Container>
	);
}
