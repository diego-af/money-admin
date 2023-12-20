import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #202024;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	padding: 20px;
	width: 350px;
	background-color: #323238;

	display: flex;
	flex-direction: column;
	gap: 12px;
	justify-content: center;
	align-items: center;

	.container {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	span {
		color: #f8f8f8;
		font-size: 25.585px;
	}
`;
export const Button = styled.button`
	padding: 14px 32px;
	background-color: #00b37e;
	border-radius: 6px;
	border: none;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
`;
