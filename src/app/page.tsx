'use client';

import {useRouter} from 'next/navigation';
import * as S from './pages.styles';
import Image from 'next/image';
import {useContext, useEffect} from 'react';
import {MoneyContext, MoneyContextValue} from './provider';

export default function Home() {
	const router = useRouter();
	const {setUser} = useContext(MoneyContext) as MoneyContextValue;

	useEffect(() => {
		async function getItem() {
			const userItem = localStorage.getItem('user');
			if (userItem) {
				const userParse = JSON.parse(userItem);
				setUser(userParse[0]);
				router.push(`/dashboard/${userParse[0].id}`);

				return;
			}
		}
		getItem();
	}, []);

	return (
		<S.Container>
			<S.Card>
				<div className='container'>
					<Image src='/money.svg' alt='Logo' width={32} height={32} />
					<span> Bem vindo ao DT Money</span>
				</div>
				<S.Button onClick={() => router.push('/login')}>Entrar</S.Button>
			</S.Card>
		</S.Container>
	);
}
