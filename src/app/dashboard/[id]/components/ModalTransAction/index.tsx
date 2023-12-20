'use client';

import Image from 'next/image';
import * as S from './Modal.styles';
import {useContext, useState} from 'react';
import {MoneyContext, MoneyContextValue} from '@/app/provider';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {toast} from 'sonner';

export default function ModalTransAction({id}: {id: string}) {
	const {openModal, setOpenModal, requestLoading, setRequestLoading} =
		useContext(MoneyContext) as MoneyContextValue;

	const [type, setType] = useState<string | null>(null);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [categories, setCategories] = useState('');
	console.log(id);
	const OPTIONSBUTTON = [
		{
			name: 'Entrada',
			icon: '/money-arrow.svg',
			type: 'entry'
		},
		{
			name: 'Saída',
			icon: '/money-arrow-down.svg',
			type: 'out'
		}
	];

	const handleRequest = async () => {
		setRequestLoading(true);
		try {
			const response = await axios.post('/api/add-transactions', {
				description,
				price,
				type,
				categories,
				date: new Date().toISOString(),
				transactionId: id
			});
			toast.success('Transação adicionada com sucesso!');

			setRequestLoading(false);
			setDescription('');
			setPrice(0);
			setCategories('');
			setType(null);
		} catch (error) {
			console.error(error);
			setRequestLoading(false);
		} finally {
			setOpenModal(!openModal);
			setRequestLoading(false);
		}
	};

	return (
		<S.ModalWrapper open={openModal}>
			<S.ModalContent>
				<S.ContentTitle>
					<button onClick={() => setOpenModal(!openModal)}>X</button>
				</S.ContentTitle>

				<S.ContentBody>
					<S.Title>Nova Transação</S.Title>
					<S.Input
						placeholder='Descrição'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<S.Input
						placeholder='Preço'
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
					<S.Input
						placeholder='Categoria'
						value={categories}
						onChange={(e) => setCategories(e.target.value)}
					/>

					<S.ContentButtonOptions>
						{OPTIONSBUTTON.map((option) => (
							<S.ButtonEntry
								key={option.name}
								onClick={() => setType(option.type)}
								selected={type === option.type}
							>
								<Image
									src={option.icon}
									alt={option.name}
									width={24}
									height={24}
								/>
								<span>{option.name}</span>
							</S.ButtonEntry>
						))}
					</S.ContentButtonOptions>

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
				</S.ContentBody>
			</S.ModalContent>
		</S.ModalWrapper>
	);
}
