'use client';

import {useRouter} from 'next/navigation';
import {useContext, useEffect} from 'react';
import {MoneyContext, MoneyContextValue} from '../provider';
export default function Dashboard() {
	const {user, setUser} = useContext(MoneyContext) as MoneyContextValue;
	const router = useRouter();

	useEffect(() => {
		const getItem = () => {
			const userItem = localStorage.getItem('user');
			if (userItem) {
				const userParse = JSON.parse(userItem);
				setUser(userParse[0]);
				router.push(`/dashboard/${userParse[0].id}`);
			} else {
				router.push('/login');
			}
		};
		getItem();
	}, []);
	return <div>ola</div>;
}
