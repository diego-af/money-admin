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
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 200px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;

interface Modal {
	open: boolean;
}
export const ModalWrapper = styled.div<Modal>`
	position: fixed;
	top: 0;
	display: ${({open}) => (open ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background: rgba(0, 0, 0, 0.75);
	h3 {
		color: #e1e1e6;
	}
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 535px;
	height: 528px;
	padding: 24px;
	border-radius: 6px;
	background: #202024;
	box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.8);
`;

export const ContentTitle = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	button {
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		background: transparent;
		border: none;
		color: #7c7c8a;
	}
`;
export const Title = styled.h3`
	color: #e1e1e6;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 140%;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
export const ContentBody = styled.form`
	padding: 24px;
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
export const Input = styled.input`
	display: flex;
	padding: 16px;
	align-items: flex-start;
	gap: 8px;
	width: 100%;
	border-radius: 6px;
	background: #121214;
	border: none;
	color: #fff;

	&:focus {
		outline: 1px solid #00b37e;
	}
	@media (max-width: 578px) {
		width: 90%;
	}
`;
export const ContentButtonOptions = styled.div`
	display: flex;
	gap: 24px;
`;
interface PropsSelect {
	selected: boolean;
}
export const ButtonEntry = styled.button<PropsSelect>`
	display: flex;
	padding: 16px 24px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	flex: 1 0 0;
	border-radius: 6px;
	background: #29292e;
	border: none;
	outline: ${({selected}) => (selected ? '1px solid #00b37e' : 'none')};
	color: #c4c4cc;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
	cursor: pointer;
`;
export const ButtonOut = styled(ButtonEntry)``;

interface PropsOpacity {
	isopacity: boolean;
}
export const ButtonSubmit = styled.button<PropsOpacity>`
	display: flex;
	width: 100%;
	padding: 16px 32px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 6px;
	background: #00875f;
	border: none;
	color: #fff;
	opacity: ${({isopacity}) => (isopacity ? '0.7' : '1')};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 160%;
	cursor: pointer;

	&:hover {
		background: #00874f;
	}
	@media (max-width: 578px) {
		padding: 8px 12px;
	}
`;
export const RegisterInfo = styled.div`
	display: flex;
	width: 100%;
	gap: 4px;
	align-items: center;
	justify-content: center;

	span {
		color: #fff;
	}

	a {
		margin: 0;
		padding: 0;
		color: #00b37e;
		text-decoration: none;

		&:hover {
			color: #00b37e;
			opacity: 0.8;
		}
	}
`;
export const ErrorMessage = styled.p`
	color: #f75a68;
	font-size: 12px;
`;
export const ContentInput = styled.div`
	position: relative;
	width: 368px;
	@media (max-width: 578px) {
		width: 100%;
	}
`;
