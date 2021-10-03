import React from 'react';
import { connect } from 'react-redux';
import selectFiltered from '../../selectors/expenses';
import moment from 'moment';

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

class AreaChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: crypto.randomUUID(),
            chart: null,
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

    getChartData = () => {
        const data = [['Dzień', 'Przychody', 'Wydatki']]
        
        let start = this.props.filters.startDate
        let end = this.props.filters.endDate
        let lastDate = moment()

        if (end === null) end = moment()
        else end = moment(end)

        if (start === null) {
            let last = moment()
            
            this.props.incomes.forEach(value => {
                if (moment(value.date).isBefore(last, 'day')) last = value.date
            })

            this.props.expenses.forEach(value => {
                if (moment(value.date).isBefore(last, 'day')) last = value.date
            })

            start = last
        } else start = moment(start)

        if (moment(start).isAfter(end)) {
            const tmp = moment(start)
            start = end
            end = tmp
        }

        for (let day = moment(start); day.isSameOrBefore(end, 'day'); day.add(1, 'days')) {
            data.push([day.format('YYYY-MM-DD'), 0, 0])
        }

        this.props.incomes.forEach(value => {
            const date = moment(value.date, 'YYYY-MM-DD')

            for (let i = 1; i < data.length; i++) {
                if (moment(data[i][0]).isSame(date)) {
                    if (date.isAfter(lastDate, 'day')) lastDate = date
                    data[i][1] += parseFloat(value.amount)
                }
            }
        })

        this.props.expenses.forEach(value => {
            const date = moment(value.date, 'YYYY-MM-DD')

            for (let i = 1; i < data.length; i++) {
                if (moment(data[i][0]).isSame(date)) {
                    if (date.isAfter(lastDate, 'day')) lastDate = date
                    data[i][2] += parseFloat(value.amount)
                }
            }
        })

        let incomesSum = 0
        let expensesSum = 0
        const badDate = moment(start).isAfter(lastDate, 'day')

        for (let i = 1; i < data.length; i++) {
            const date = moment(data[i][0])
            data[i][0] = date.format('D.MM')
            if (date.isAfter(lastDate, 'day') && !badDate) {
                data[i][1] = undefined
                data[i][2] = undefined
            } else {
                incomesSum += data[i][1]
                expensesSum += data[i][2]
                data[i][1] = incomesSum
                data[i][2] = expensesSum
            }
        }

        return data
    }

    drawChart = () => {
        const options = {
            legend: { position: 'none' },
            vAxis: { minValue: 0, maxValue: 10 },
        }

        if (this.state.chart === null) {
            this.setState({
                chart: new google.visualization.AreaChart(document.getElementById(this.state.id))
            }, () => {
                const data = google.visualization.arrayToDataTable(this.getChartData())
                this.state.chart.draw(data, options)
            })
        } else {
            const data = google.visualization.arrayToDataTable(this.getChartData())
            this.state.chart.draw(data, options)
        }
    }

    render() {
        const display = this.props.incomes.length !== 0

        return (
            <div id={this.state.id} style={{
                width: '100%',
                minHeight: '30rem',
                margin: 'auto',
            }}></div>
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

export default connect(mapStateToProps)(AreaChart);
