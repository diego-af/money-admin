'use client';

import {useContext, useState} from 'react';
import * as S from './Register.styles';
import {MoneyContext, MoneyContextValue} from '@/app/provider';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {toast} from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
export default function Register() {
	const router = useRouter();
	const {requestLoading, setRequestLoading} = useContext(
		MoneyContext
	) as MoneyContextValue;
	const [name, setName] = useState('');
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
			const response = await axios.post('/api/register', {
				name,
				email,
				password
			});
			if (response.data.data.length === 0) {
				toast.error('Email ou senha inválidos');
				setRequestLoading(false);
				return;
			}
			console.log(response.data);
			router.push('/login');
			setRequestLoading(false);
		} catch (error) {
			console.error(error);
			setRequestLoading(false);
		} finally {
		}
	};
	return (
		<S.Container>
			{' '}
			<S.ContentBody>
				<S.Title>
					Cadastro
					<Image src='/money.svg' alt='Logo' width={32} height={32} />
				</S.Title>
				<S.Input
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
						'Cadastrar'
					)}
				</S.ButtonSubmit>

				<S.RegisterInfo>
					<span>Ja possui uma conta?</span>
					<Link href='/login'>Login</Link>
				</S.RegisterInfo>
			</S.ContentBody>
		</S.Container>
	);
}
