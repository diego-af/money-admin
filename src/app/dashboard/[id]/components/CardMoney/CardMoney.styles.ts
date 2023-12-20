import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	gap: 32px;
	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 768px) {
		overflow-x: scroll;
		display: grid;
		grid-template-columns: 300px 300px 300px;
	}
`;
interface ColorProps {
	isColor: boolean;
}
export const Card = styled.div<ColorProps>`
	display: flex;
	flex: 1;
	padding: 24px 24px 24px 32px;
	flex-direction: column;
	gap: 12px;
	border-radius: 6px;
	background: ${({isColor}) => (isColor ? '#015F43' : '#323238')};
`;
export const InfoHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	h3 {
		color: #c4c4cc;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
	}
`;

export const ValueMoney = styled.span`
	color: #e1e1e6;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 140%;
`;
