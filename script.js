 
 function questao02(){
 let a = 0;
 let b = 1;
 let c = 0;
 let x = true;
 let n = window.prompt("Qual número?");
 while(x){
    console.log(a);
    c = a;
    a = a + b;
    b = c;
    if(a >= n){
        x = false;
        (a == n) ? window.alert("Pertence!") : window.alert("Não pertence!");
    }
 }
}

function questao03(){
    const dados = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]
    let vlrMin = 0;
    let vlrMax = 0;
    let qtdeSupMedia = 0;
    let mediaMensal;
    let vlrs = [];
    let soma = 0;

    for(let itens in dados){
        if((dados[itens]['valor']) > 0){
            vlrs.push(dados[itens]['valor']);
            soma += dados[itens]['valor'];
        }
    }

    vlrMax = Math.max(...vlrs);
    vlrMin = Math.min(...vlrs);
    mediaMensal = Math.round(soma / vlrs.length);

    for(let itens in dados){
        if((dados[itens]['valor']) > mediaMensal){
            qtdeSupMedia++;
        }
    }

    window.alert("Menor valor de faturamento do mês: "+ vlrMin +
                "\nMaior valor de faturamento do mês: "+ vlrMax +
                "\nNúmero de dias com faturamento diário superior à média mensal: "+ qtdeSupMedia);
}

function questao04(){
    let faturamento = [
        {
            estado: "SP",
            valor: 67836.43,
            percentual: "",
        },
        {
            estado: "RJ",
            valor: 36678.66,
            percentual: "",
        },
        {
            estado: "MG",
            valor: 29229.88,
            percentual: "",
        },
        {
            estado: "ES",
            valor: 27165.48,
            percentual: "",
        },
        {
            estado: "Outros",
            valor: 19849.53,
            percentual: "",
        },
    ];
    let total = 0.0;
    let tabela = "";
    for(let itens in faturamento){
        total += faturamento[itens]['valor'];
    }

    for(let itens in faturamento){
        faturamento[itens]['percentual'] = Math.round(100 * faturamento[itens]['valor'] / total) + "%";
        tabela +=  faturamento[itens]['estado'] + " - " + faturamento[itens]['percentual'] + "\n";
    }

    window.alert(tabela);
}

function questao05(){ 
    let x = "";
    let string = window.prompt("Informe a String");
    console.log(string.length);
    for(let i = 0; i <= string.length - 1; i++){
        x += string[string.length - i - 1];
    }
    string = x;
    alert("Inverso: " + string);
}