import moment from 'moment';

export default (expenses, { sortBy, startDate, endDate }, { activeAccountId }) => {
    return expenses.filter((expense) => {
        const dateMoment = moment(expense.date);
        const startDateMatch = startDate ? startDate.isSameOrBefore(dateMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(dateMoment, 'day') : true;
        const accountIdMatch = activeAccountId === expense.accountId ? true : false;

        return startDateMatch && endDateMatch && accountIdMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};