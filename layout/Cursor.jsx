import dynamic from 'next/dynamic';
import React from 'react';
const ReactAnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});
const reactAnimatedCursorOptions = {
	clickables: ['a', '.hamburger-react'],
	color: '0, 0, 0',
	innerScale: 1,
	innerSize: 9,
	outerAlpha: 0.4,
	outerScale: 7,
	outerSize: 9,
	trailingSpeed: 7,
};
const Cursor = () => <ReactAnimatedCursor {...reactAnimatedCursorOptions} />;
export default Cursor;
