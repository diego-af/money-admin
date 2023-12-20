export const ConvertFunctionMoney = (value: number) => {
	return value
		.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		})
		.replace('R$', 'R$ ');
};
