'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { Session } from 'next-auth';

import { trpc } from './client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';

function TrpcProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: '/api/trpc',
				}),
			],
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}

function Providers({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session;
}) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='light'
			disableTransitionOnChange
		>
			<SessionProvider session={session}>
				<Toaster />
				<NextUIProvider>
					<TrpcProvider>{children}</TrpcProvider>
				</NextUIProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}

export default Providers;
