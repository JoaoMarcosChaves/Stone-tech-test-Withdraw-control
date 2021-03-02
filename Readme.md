#### Controle saque de valores disponíveis de transação ####

## Será avaliado
- Simplicidade;
- Consistência da visão das regras de negócio;
- Manutenção;
- Testabilidade.

É necessário que o controle dos saques de valores transacionados em um meio de pagamento sejam gerenciados.
Para iniciar este gerenciamento os seguintes objetivos devem ser alcançados ao realizar a implementação
de sua regra de negócio.

## Objetivos

1 - Criar um endpoint do tipo POST que recebe um objeto com data de inicio e fim, para poder consultar
todas as transações que ainda não foram sacadas e estão disponíveis.
O response deste endpoint deve possuir a lista de transações exibindo os valores, a somatória dos valores de todas as transações
e a somatória dos valores das transações com a taxa de saque aplicada a cada uma.

Body do request do objetivo 1: {
    initial_date: 'YYYY-MM-DD',
    till_date: 'YYYY-MM-DD',
}

2 - Criar um endpoint tipo PUT que recebe uma lista de transações que estão sendo sacadas na data
do request. A regra de negócio deste endpoint deve atualizar cada transação na base de dados modificando
seu status e data de saque.

Body do request do objetivo 2: {
    transactions_list: [
        {
            transaction_id: ID da transação
        }
    ]
}

### Taxas por modalidade de pagamento

Taxas de pagamento de cada tipo de transação
- Débito: 1,5% do valor da transação;
- Crédito: 2% do valor da transação;

### Estrutura da base de dados

{
    id: integer,
    amount: float, // Valor da transação
    operation_type_name: string, // Modalidade de pagamento -> credito ou debito
    amount_available_on_date: date (YYYY-MM-DD), // Data de disponibilidade para saque
    withdraw_status: string, // Status do saque -> done = sacado; available = disponível para saque; unavailable = indisponível para saque
    withdraw_date: date (YYYY-MM-DD), // Data que o saque foi realizado
}