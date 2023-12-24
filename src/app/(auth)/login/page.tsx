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
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {useForm} from 'react-hook-form';

const schema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'A senha deve conter mais de 6 caracteres')
});

type Input = {
	email: string;
	password: string;
};
export default function Login() {
	const router = useRouter();
	const {requestLoading, setRequestLoading, user, setUser} = useContext(
		MoneyContext
	) as MoneyContextValue;

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors}
	} = useForm<Input>({
		resolver: zodResolver(schema)
	});
	const handleRequest = async (data: Input) => {
		setRequestLoading(true);
		const {email, password} = data;

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

			setUser(response?.data?.data[0]);
			router.push(`/dashboard/${response?.data?.data[0].id}`);
		} catch (error) {
			toast.error('Email ou senha inválidos');
			setRequestLoading(false);
		} finally {
		}
	};

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
			{' '}
			<S.ContentBody onSubmit={handleSubmit((data) => handleRequest(data))}>
				<S.Title>
					Login {'  '}{' '}
					<Image src='/money.svg' alt='Logo' width={32} height={32} />
				</S.Title>

				<S.ContentInput>
					<S.Input placeholder='Email' {...register('email')} />
					{errors.email && (
						<S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
					)}
				</S.ContentInput>
				<S.ContentInput>
					<S.Input
						placeholder='Senha'
						type='password'
						{...register('password')}
					/>
					{errors.password && (
						<S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
					)}
				</S.ContentInput>

				<S.ButtonSubmit disabled={requestLoading} isopacity={requestLoading}>
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
