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
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import * as z from 'zod';
type Input = {
	name: string;
	email: string;
	password: string;
};

const schema = z.object({
	name: z.string().min(3, 'O nome deve conter mais de 3 caracteres'),
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'A senha deve conter mais de 6 caracteres')
});
export default function Register() {
	const router = useRouter();
	const {requestLoading, setRequestLoading} = useContext(
		MoneyContext
	) as MoneyContextValue;
	const {
		handleSubmit,
		register,
		formState: {errors}
	} = useForm<Input>({
		resolver: zodResolver(schema)
	});

	const handleRequest = async (data: Input) => {
		setRequestLoading(true);

		const {name, email, password} = data;

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

			router.push('/login');
			setRequestLoading(false);
		} catch (error) {
			toast.error('Erro ao cadastrar');
			setRequestLoading(false);
		} finally {
		}
	};
	return (
		<S.Container>
			{' '}
			<S.ContentBody onSubmit={handleSubmit((data) => handleRequest(data))}>
				<S.Title>
					Cadastro
					<Image src='/money.svg' alt='Logo' width={32} height={32} />
				</S.Title>
				<S.ContentInput>
					<S.Input placeholder='Name' {...register('name')} />
					{errors.name && (
						<S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
					)}
				</S.ContentInput>
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

				<S.ButtonSubmit
					disabled={requestLoading}
					type='submit'
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
