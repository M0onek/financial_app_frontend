const ChartState = {
    loaded: false,
    promise: new Promise((resolve) => {
        google.charts.load('current', {'packages':['corechart']})
        google.charts.setOnLoadCallback(() => {
            ChartState.loaded = true
            resolve()
        })
    }),
    onLoad: (callback) => {
        ChartState.promise = ChartState.promise.then(() => {
            callback()
        })
    }
}

export default ChartState