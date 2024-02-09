'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { Session } from 'next-auth';

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
				<NextUIProvider>{children}</NextUIProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}

export default Providers;
