import React from 'react';
import { connect } from 'react-redux';
import selectFiltered from '../../selectors/expenses';

const chartState = {
    loaded: false,
    promise: new Promise((resolve) => {
        google.charts.load('current', {'packages':['corechart']})
        google.charts.setOnLoadCallback(() => {
            chartState.loaded = true
            resolve()
        })
    }),
}

class PieChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: crypto.randomUUID()
        }

        chartState.promise = chartState.promise.then(() => {
            this.drawChart()
        })
    }

    componentDidUpdate() {
        if (chartState.loaded) {
            this.drawChart()
        }
    }

    getCategoryAmount = (category) => {
        let categoryAmount = 0
        this.props.values.forEach(val => {
            if (val.categoryId === category.categoryId) {
                let amount = parseFloat(val.amount)
                categoryAmount += amount
            }
        })
        return categoryAmount
    }

    getChartData = () => {
        const data = [['Category', 'Amount']]
        if (this.props.values.length === 0) return data

        this.props.categories.forEach(category => {
            data.push([category.name, this.getCategoryAmount(category)])
        })
        return data
    }

    drawChart = () => {
        const data = google.visualization.arrayToDataTable(this.getChartData())
        const chart = new google.visualization.PieChart(document.getElementById(this.state.id))
        chart.draw(data)
    }

    render() {
        const display = this.props.values.length !== 0

        return (
            <div id={this.state.id} style={{
                maxWidth: '600px',
                minHeight: '30rem',
                margin: 'auto',
                opacity: display ? 1 : 0,
            }}></div>
        )
    }
    
}

const mapStateToProps = (state, props) => {
    const income = props.mode === "income"
    
    return {
        income,
        values: selectFiltered(income ? state.incomes : state.expenses, state.filters, state.activeAccount),
        categories: income ? state.incomeCategories : state.expenseCategories,
    }
}

export default connect(mapStateToProps)(PieChart);
