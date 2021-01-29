export default (categories, { activeAccountId }) => {
    return categories.filter((category) => {
        const accountIdMatch = activeAccountId === category.accountId ? true : false;

        return accountIdMatch;
    });
};