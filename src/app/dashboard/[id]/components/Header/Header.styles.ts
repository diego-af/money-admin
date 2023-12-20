import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const Title = styled.h3`
	color: #e1e1e6;
	font-size: 25.585px;
	font-style: normal;
	font-weight: 700;
	line-height: 160%;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 5px;
	width: 200px;
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 160%;
	background-color: #00b37e;
	border-radius: 5px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #00b36e;
	}

	@media (max-width: 578px) {
		width: 120px;
		font-size: 13px;
	}
`;

export const ContentButton = styled.div`
	display: flex;
	gap: 10px;

	@media (max-width: 578px) {
		display: flex;
		flex-direction: column;
	}
`;
