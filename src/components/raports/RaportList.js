import React from 'react';
import { connect } from 'react-redux';
import selectCategory from '../../selectors/selectCategory';
import select from '../../selectors/expenses';
import numeral from 'numeral';
import moment from 'moment';

const RaportListItem = ({category, date, amount}) => (
    <tr>
        <td className="raport--text">
            <div className="raport--title">{category ? category.name : ''}</div>
            <div>{moment(date).format('DD/MM/YYYY')}</div>
        </td>
        <td>{numeral(amount).format('0,0.00')} zł</td>
    </tr>
)

const RaportList = (props) => (
    <table>
        {/* <caption>{props.income ? 'Przychody' : 'Wydatki'}</caption> */}
        <thead>
            <tr>
                <th style={{textAlign: 'left'}}>{props.income ? 'Przychody' : 'Wydatki'}</th>
                <th style={{textAlign: 'right'}}>Wartość</th>
            </tr>
        </thead>
        <tbody>
            {
                props.values.length === 0
                ? <tr>
                    <td colSpan={2} style={{textAlign: 'center', padding: '1rem'}}>{props.income ? 'Brak przychodów' : 'Brak wydatków'}</td>
                </tr>
                : props.values.map(value => {
                    const category = selectCategory(props.categories, value.categoryId)
                    const id = props.income ? value.incomeId : value.expenseId
                    return <RaportListItem key={id} category={category} {...value}/>
                  })
            }
        </tbody>
    </table>
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
