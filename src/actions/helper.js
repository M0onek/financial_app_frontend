store.dispatch(signup(
    {
        name: 'name',
        email: 'email@gmail.com',
        password: 'haselko'
    }
));

store.dispatch(login({
    email: 'email@gmail.com',
    password: 'haselko'
}))

store.dispatch(logout());

store.dispatch(logoutAll());

store.dispatch(editUser({
    name: 'jaja'
}))

store.dispatch(removeUser());


store.dispatch(addAccount({ name: 'cash' }));
store.dispatch(addAccount({ name: 'credit card' }));
store.dispatch(editAccount({ id: '1741a030-edab-4a3c-a08c-ab267befecfd' }, { name: 'credit carsd' }));
store.dispatch(removeAccount({ id: 'fdc110ab-118e-4eea-8438-7b25b64eb4fe' }));

store.dispatch(getAccounts());
store.dispatch(getOneAccount({ id: '7879c24e-bdbd-4584-af9e-999ed61d4c9e' }));



store.dispatch(addExpenseCategory({ id: '27da73bb-7772-40ab-ac86-4611fed215b9'}, { name: 'Loan' }));
store.dispatch(addIncomeCategory({ id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, { name: 'Salary' }));

store.dispatch(editExpenseCategory({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '77aa636b-71e9-4f61-b951-d12fb48b9628'}, {name: 'No longer loan'}));
store.dispatch(editIncomeCategory({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '039e5556-9d2b-487b-9cf9-7c4020064f3a'}, {name: 'lalal bu'}))

store.dispatch(removeExpenseCategory({ id: '70612475-3cbb-46bd-9da3-ca25458e667b' }, { id: 'ebd0c0e3-21ff-4955-ba0d-792d319b401e' }))
store.dispatch(removeIncomeCategory({ id: '70612475-3cbb-46bd-9da3-ca25458e667b' }, { id: '5fb8f0fb-2833-4561-8c9d-951f60696b68' }))

store.dispatch(getExpenseCategories({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}))
store.dispatch(getIncomeCategories({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}))

store.dispatch(getOneExpenseCategory({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: 'f75bbec3-356a-4952-9071-566592e6f180'}))
store.dispatch(getOneIncomeCategory({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '212bbcba-cf56-4cf6-a91c-9d4f3fbe4c1a'}))



store.dispatch(addExpense({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, { amount: '500', comment: 'first loan', date: '2021-01-24', categoryId: 'f75bbec3-356a-4952-9071-566592e6f180' }))
store.dispatch(addIncome({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, { amount: '3000', comment: 'got extra this month', date: '2021-01-25', categoryId: '212bbcba-cf56-4cf6-a91c-9d4f3fbe4c1a' }))

store.dispatch(editExpense({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '56886e01-f587-40f5-a070-bca45b67002c'}, { amount: '1000' }))
store.dispatch(editIncome({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '1992705a-4175-4739-b265-ca3331665dbb'}, { amount: '2000' }))

store.dispatch(removeExpense({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '56886e01-f587-40f5-a070-bca45b67002c'}))
store.dispatch(removeIncome({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '1992705a-4175-4739-b265-ca3331665dbb'}))

store.dispatch(getExpenses({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}));
store.dispatch(getIncomes({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}))

store.dispatch(getOneExpense({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '77e3a941-8230-48f7-90fc-f0c013779646'}));
store.dispatch(getOneIncome({id: '70612475-3cbb-46bd-9da3-ca25458e667b'}, {id: '7ed36c3c-3222-45e9-9ba6-6e161c6ee0e4'}))