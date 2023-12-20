import styled from 'styled-components';
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

	@media (max-width: 768px) {
		width: 335px;
		padding: 12px;
	}
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
`;
export const ContentBody = styled.div`
	padding: 24px;

	display: flex;
	flex-direction: column;
	gap: 16px;
`;
export const Input = styled.input`
	display: flex;
	padding: 16px;
	align-items: flex-start;
	gap: 8px;
	align-self: stretch;
	border-radius: 6px;
	background: #121214;
	border: none;
	color: #fff;

	&:focus {
		outline: 1px solid #00b37e;
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
`;
