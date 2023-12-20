import styled from 'styled-components';

interface PropsScroll {
	scroll: boolean;
}
export const Container = styled.ul<PropsScroll>`
	display: flex;
	position: relative;
	flex-direction: column;
	margin: 0;
	height: 500px;
	margin-top: 20px;
	padding: 0;
	overflow-y: ${({scroll}) => (scroll ? 'scroll' : '')};

	&::-webkit-scrollbar {
		width: 12px;
		background-color: beige;
		border-radius: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 4px;
	}

	/* Estilos do thumb quando o usuário passa o mouse por cima */
	&::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}

	/* Estilos do track (fundo da barra de rolagem) */
	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	@media (max-width: 578px) {
		height: 400px;
		overflow-y: scroll;
	}
`;

interface ILoadingSimulation {
	loading: boolean;
}
export const LoadingSimulation = styled.div<ILoadingSimulation>`
	position: absolute;
	display: ${({loading}) => (loading ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	margin: 0;
	height: 500px;
	width: 100%;
	padding: 0;
	background: rgba(0, 0, 0, 0.75);
	z-index: 999;
`;
export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
`;
export const Item = styled.li`
	display: flex;
	padding: 20px 32px;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	border-radius: 5px;
	background: #29292e;
	@media (max-width: 578px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;
export const Description = styled.span`
	flex: 1 0 0;
	color: #c4c4cc;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;

interface ValueProps {
	isColor: boolean;
}
export const Value = styled.span<ValueProps>`
	width: 200px;
	color: ${({isColor}) => (isColor ? '#00b37e' : '#f75a68')};
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;
export const Category = styled.span`
	width: 240px;
	color: #c4c4cc;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;
export const Date = styled.span`
	width: 92px;
	color: #c4c4cc;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;
