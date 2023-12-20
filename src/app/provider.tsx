import React, {createContext, ReactNode, useState} from 'react';

export interface ITransaction {
	id: number;
	description: string;
	price: string;
	category: string;
	date: string;
	type: string;
	published: boolean;
	transactionId: number;
}

interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
}
export interface MoneyContextValue {
	setOpenModal: (open: boolean) => void;
	openModal: boolean;
	requestLoading: boolean;
	setRequestLoading: (loading: boolean) => void;
	transactions: ITransaction[];
	setTransactions: (transactions: ITransaction[]) => void;
	setUser: (user: IUser) => void;
	user: IUser | undefined;
}

export const MoneyContext = createContext<MoneyContextValue | null>(null);

type MoneyProviderProps = {
	children: ReactNode;
};

export const MoneyProvider = ({children}: MoneyProviderProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [requestLoading, setRequestLoading] = useState(false);
	const [transactions, setTransactions] = useState<ITransaction[]>([]);
	const [user, setUser] = useState<IUser | undefined>();
	return (
		<MoneyContext.Provider
			value={{
				setOpenModal,
				openModal,
				requestLoading,
				setRequestLoading,
				setTransactions,
				transactions,
				user,
				setUser
			}}
		>
			{children}
		</MoneyContext.Provider>
	);
};
