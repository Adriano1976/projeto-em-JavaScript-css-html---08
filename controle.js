function calcular_valor(peso)
{
	var preco = 14.52;
	var valor = peso * preco;
	return valor;
}

function mostrar_valor(form)
{
	var valor = calcular_valor	
		(parseFloat(form.peso.value));		
			alert("Valor á pagar: R$ " + valor.toFixed(2))			
}