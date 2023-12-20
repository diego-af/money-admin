import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;

export const Input = styled.input`
	display: none;
	padding: 16px;
	align-items: flex-start;
	gap: 12px;
	flex: 1 0 0;
	color: #e1e1e6;
	border: none;
	background-color: #121214;
	border-radius: 6px;

	&:focus {
		outline: 1px solid #00b37e;
	}
`;

export const Button = styled.button`
	display: none;
	padding: 14px 32px;
	justify-content: center;
	align-items: center;
	gap: 12px;
	background: transparent;
	border-radius: 6px;
	border: 1px solid #00b37e;
	color: #00b37e;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 160%;
	cursor: pointer;
`;
