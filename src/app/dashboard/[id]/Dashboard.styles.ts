import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #202024;
	position: relative;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 200px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;
