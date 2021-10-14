export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const raportAll = () => ({
    type: 'RAPORT_ALL'
});

export const raportIncomes = () => ({
    type: 'RAPORT_INCOMES'
});

export const raportExpenses = () => ({
    type: 'RAPORT_EXPENSES'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});