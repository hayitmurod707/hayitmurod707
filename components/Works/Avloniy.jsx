import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import styled from 'styled-components';
const StyledElement = styled.a`
	border: 1px solid;
	display: flex;
	height: 450px;
	overflow: hidden;
	width: 400px;
	border-radius: 12px;
	transform: scale(calc(var(--visible-y) * 0.2 + 0.8));
	& .image {
		height: 200px;
		position: relative;
		width: 400px;
		border: 1px solid;
	}
`;
const Avloniy = () => {
	useEffect(() => {
		const s = ScrollOut({
			cssProps: {
				visibleY: true,
				viewportY: true,
			},
		});
		return () => {
			s.teardown();
		};
	}, []);
	return (
		<Link href="/works/avloniy">
			<StyledElement data-scroll>
				<div className="image">
					<Image
						alt="Avloniy"
						layout="fill"
						loader={({ src, width }) => `${src}?w=${width}`}
						objectFit="cover"
						src="/static/avloniy.png"
					/>
				</div>
			</StyledElement>
		</Link>
	);
};
export default Avloniy;
