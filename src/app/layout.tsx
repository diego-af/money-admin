'use client';

import StyledComponentsRegistry from './_lib/registry';
import {Roboto} from 'next/font/google';
import {MoneyProvider} from './provider';
import {Toaster} from 'sonner';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin']
});
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html className={roboto.className}>
			<body style={{margin: 0, padding: 0, height: '100vh'}}>
				<MoneyProvider>
					<StyledComponentsRegistry>
						{children}
						<Toaster position='top-center' />
					</StyledComponentsRegistry>
				</MoneyProvider>
			</body>
		</html>
	);
}
