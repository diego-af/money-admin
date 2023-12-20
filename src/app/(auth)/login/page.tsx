'use client';

import {useContext, useEffect, useState} from 'react';
import * as S from './Login.styles';
import {MoneyContext, MoneyContextValue} from '@/app/provider';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {toast} from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
export default function Login() {
	const router = useRouter();
	const {requestLoading, setRequestLoading, user, setUser} = useContext(
		MoneyContext
	) as MoneyContextValue;

	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const handleRequest = async () => {
		setRequestLoading(true);
		if (email == '' || password == '') {
			toast.error('Preencha todos os campos');
			setRequestLoading(false);
			return;
		}
		try {
			const response = await axios.post('/api/login', {
				email,
				password
			});

			if (response.data.data.length === 0) {
				toast.error('Email ou senha inválidos');
				setRequestLoading(false);
				return;
			}
			setRequestLoading(false);
			localStorage.setItem('user', JSON.stringify(response?.data?.data));
			console.log(response.data?.data);
			setUser(response?.data?.data[0]);
			router.push(`/dashboard/${response?.data?.data[0].id}`);
		} catch (error) {
			toast.error('Email ou senha inválidos');
			setRequestLoading(false);
		} finally {
		}
	};
	console.log(user);

	useEffect(() => {
		async function getItem() {
			const userItem = localStorage.getItem('user');
			if (userItem) {
				console.log(JSON.parse(userItem));
				const userParse = JSON.parse(userItem);
				setUser(userParse[0]);
				router.push(`/dashboard/${userParse[0].id}`);

				return;
			}
		}
		getItem();
	}, []);
	console.log(user);
	return (
		<S.Container>
			{' '}
			<S.ContentBody>
				<S.Title>
					Login {'  '}{' '}
					<Image src='/money.svg' alt='Logo' width={32} height={32} />
				</S.Title>

				<S.Input
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<S.Input
					placeholder='Senha'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<S.ButtonSubmit
					disabled={requestLoading}
					onClick={handleRequest}
					isopacity={requestLoading}
				>
					{requestLoading ? (
						<ReactLoading type='spin' color='#fff' height={20} width={20} />
					) : (
						'Login'
					)}
				</S.ButtonSubmit>

				<S.RegisterInfo>
					<span>Não possui uma conta?</span>
					<Link href='/register'>Criar conta</Link>
				</S.RegisterInfo>
			</S.ContentBody>
		</S.Container>
	);
}
