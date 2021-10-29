import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import selectFiltered from '../../selectors/expenses';
import RaportList from "./RaportList";
// import '../../../public/raport.css';

class RaportPreview extends React.Component {

    render() {
        const raport = this.props.filters.raport
        const income = raport === 'all' || raport === 'incomes'
        const expense = raport === 'all' || raport === 'expenses'

        return (
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className="raport-header">Financify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='raport'>
                                { income && <RaportList mode="income" />}
                                { expense && <RaportList mode='expense' />}
                            </div>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        incomes: selectFiltered(state.incomes, state.filters, state.activeAccount),
        expenses: selectFiltered(state.expenses, state.filters, state.activeAccount),
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(RaportPreview);