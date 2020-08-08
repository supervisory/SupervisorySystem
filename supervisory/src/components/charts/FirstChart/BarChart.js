import React from 'react'
import { Bar } from 'react-chartjs-2'

class BarChart extends React.Component {
    render() {
        const { data } = this.props
        
        return (
            <Bar
                data={{
                    labels : data && data.length > 0 ? data.map((item) => item.Data) : [],
                    datasets : [
                        {
                            data : data && data.length > 0  ? data.map((item) => item.TapA) : [],
                            label : 'Tap A',
                            backgroundColor: '#1CD1BB'
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => item.TapB) : [],
                            label : 'Tap B',
                            backgroundColor: '#AD1CD1',
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => item.TapC) : [],
                            label : 'Tap C',
                            backgroundColor: '#2BF905'
                        }
                    ],
                }}
                width={400}
                height={400}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        )
    }
}

export default BarChart