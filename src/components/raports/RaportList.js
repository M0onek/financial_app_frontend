import React from 'react';
import { connect } from 'react-redux';
import selectCategory from '../../selectors/selectCategory';
import select from '../../selectors/expenses';
import numeral from 'numeral';
import moment from 'moment';

const RaportListItem = ({category, date, amount}) => (
    <tr>
        <td className="raport--text">{category ? category.name : ''}</td>
        <td>{moment(date).format('DD/MM/YYYY')}</td>
        <td>{numeral(amount).format('0,0.00')} zł</td>
    </tr>
)

const RaportList = (props) => (
    <div className="raport">
        <table className="raport__table">
            <thead>
                <tr>
                    <th>{props.income ? 'Przychody' : 'Wydatki'}</th>
                    <th>Data</th>
                    <th>Wartość</th>
                </tr>
            </thead>
            <tbody>
                {props.values.map(value => {
                    const category = selectCategory(props.categories, value.categoryId)
                    const id = props.income ? value.incomeId : value.expenseId
                    return <RaportListItem key={id} category={category} {...value}/>
                })}
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state, props) => {
    const income = props.mode === 'income'
    
    return {
        values: select(income ? state.incomes : state.expenses, state.filters, state.activeAccount),
        categories: income ? state.incomeCategories : state.expenseCategories,
        mode: props.mode,
        income
    }
}

export default connect(mapStateToProps)(RaportList);
