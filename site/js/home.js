function calcular_valor(){
    //CALCULO DA PERDA
    var V1 = Number(valor_colheita.value) * 0.2;//20%
    var V2 = Number(valor_colheita.value) - V1;//Valor-20%
    var V3 = V2 / 0.2;//Valor -20% por bandeija
    var VT = V3 * Number(preco.value); //Nº Bandeijas * valor mercado

    //CALCULO DO LUCRO
    var L1 = Number(valor_colheita.value) * 0.2;//20%
    var L2 = Number(valor_colheita.value) + L1;//20% + Valor
    var L3 = L2 / 0.2;//Valor -20% /por bandeija
    var L4 = L3 * Number(preco.value);//Nº de bandeija * valor de mercado
    var LT = VT + L4;//Valor de mercado + lucro sem perdas

    //INVESTIMENTO
    var I1 = Number(area.value) /2;
    var IT = I1 * 40;
    // O 40 é porque o valor do Sensor DHT11 + sensor LDR + Resistor 10k + Placa Arduino Uno + Jumpers + Fonte de alimentação=$40

    resultado.innerHTML = `Em sua última colheita você deixou de  lucrar <b>R$${VT.toFixed(2)}</b> com perdas. Com nosso sistema você lucraria na próxima colheita <b>R$${LT.toFixed(2)}</b>. <br> <br> Seu investimento será a partir de: <b>R$${IT.toFixed(2)}</b>.`;
}