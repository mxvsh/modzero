'use client';

import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

function ProgressBar() {
	return (
		<AppProgressBar
			height='4px'
			color='#141414'
			options={{ showSpinner: false }}
			shallowRouting
		/>
	);
}

export default ProgressBar;
