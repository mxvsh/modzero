'use client';
import { useEffect } from 'react';
import { useAppStore } from '~lib/store';

function UpdateAppTitle({ title }: { title: string }) {
	const { setAppTitle } = useAppStore();

	useEffect(() => {
		setAppTitle(title);
	}, [setAppTitle, title]);

	return null;
}

export default UpdateAppTitle;
