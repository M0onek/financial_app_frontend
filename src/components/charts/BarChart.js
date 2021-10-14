import React from 'react';
import { connect } from 'react-redux';
import selectFiltered from '../../selectors/expenses';
import moment from 'moment';
import ChartState from './ChartState';

class BarChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: crypto.randomUUID(),
            chart: null,
        }

        ChartState.onLoad(this.drawChart)
    }

    componentDidUpdate() {
        if (ChartState.loaded) {
            this.drawChart()
        }
    }

    getChartData = () => {
        const data = [['Miesiąc', 'Przychody', 'Wydatki']]
        
        let start = moment()
        let end = moment()

        this.props.incomes.forEach(value => {
            if (moment(value.date).isBefore(start, 'month')) start = value.date
            if (moment(value.date).isAfter(end, 'month')) end = value.date
        })

        this.props.expenses.forEach(value => {
            if (moment(value.date).isBefore(start, 'month')) start = value.date
            if (moment(value.date).isAfter(end, 'month')) end = value.date
        })


        if (moment(start).isAfter(end)) {
            const tmp = moment(start)
            start = end
            end = tmp
        }

        for (let month = moment(start); month.isSameOrBefore(end, 'month'); month.add(1, 'months')) {
            data.push([month.format('YYYY-MM'), 0, 0])
        }

        this.props.incomes.forEach(value => {
            const date = moment(value.date, 'YYYY-MM')

            for (let i = 1; i < data.length; i++) {
                if (moment(data[i][0]).isSame(date)) {
                    data[i][1] += parseFloat(value.amount)
                }
            }
        })

        this.props.expenses.forEach(value => {
            const date = moment(value.date, 'YYYY-MM')

            for (let i = 1; i < data.length; i++) {
                if (moment(data[i][0]).isSame(date)) {
                    data[i][2] += parseFloat(value.amount)
                }
            }
        })

        for (let i = 1; i < data.length; i++) {
            const date = moment(data[i][0])
            data[i][0] = date.format('MMMM YYYY')
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
                chart: new google.visualization.ColumnChart(document.getElementById(this.state.id))
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
        incomes: state.incomes,
        expenses: state.expenses,
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(BarChart);
