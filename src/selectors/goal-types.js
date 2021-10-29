const goalTypes = {
    MONTHLY_INCOMES_LIMIT: { name: 'Oczekiwane miesięczne przychody', mode: 'income' },
    YEARLY_INCOMES_LIMIT: { name: 'Oczekiwane roczne przychody', mode: 'income' },
    MONTHLY_EXPENSES_LIMIT: { name: 'Miesięczny limit wydatków', mode: 'expense' },
    YEARLY_EXPENSES_LIMIT: { name: 'Roczny limit wydatków', mode: 'expense' },
    MONTHLY_BILANCE: { name: 'Miesięczny bilans', mode: 'none' },
    YEARLY_BILANCE: { name: 'Roczny bilans', mode: 'none' },
}

export default goalTypes