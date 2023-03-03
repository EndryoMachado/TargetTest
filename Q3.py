'''
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
'''

import json

with open('dados.json') as arquivo:

    dados = [x for x in json.load(arquivo) if x['valor'] != 0]

maior_valor = max(dados, key=lambda x: x['valor'])
menor_valor = min(dados, key=lambda x: x['valor'])

soma = sum(item['valor'] for item in dados)
media = soma / len(dados)

dias_sup_media = sum(1 for item in dados if item['valor'] > media)