import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Session } from 'next-auth';
import { Poppins } from 'next/font/google';
import Providers from '~lib/Providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	title: 'modzero',
	description: 'Telegram Moderation Platform',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

type DefaultLayoutProps = {
	children: React.ReactNode;
};
type Props = {
	children: React.ReactNode;
	session: Session;
};
export default async function RootLayout(props: DefaultLayoutProps | Props) {
	const { children, session } = {
		...props,
		session: undefined,
	};

	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Providers session={session!}>{children}</Providers>
			</body>
		</html>
	);
}
