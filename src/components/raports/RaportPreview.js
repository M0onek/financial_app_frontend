import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import selectFiltered from '../../selectors/expenses';
import RaportList from "./RaportList";

class RaportPreview extends React.Component {

    render() {
        return (
            <div className='raport'>
                <h1>Przychody</h1>
                <RaportList mode="income" />

                <h1>Wydatki</h1>
                <RaportList mode='expense' />
            </div>
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