import React from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends React.Component {
    render() {
        const { data } = this.props
        console.log('data', data[0])
        return (
            <Line
                data={{
                    labels : data && data.length > 0 ? data.map((item) => item.Data) : [],
                    datasets : [
                        {
                            data : data && data.length > 0  ? data.map((item) =>{
                                if (item.I1A.indexOf(',') > -1) {
                                    return item.I1A.split(',')[0] + item.I1A.split(',')[1]
                                } else {
                                    return item.I1A
                                }
                            }) : [],
                            label : 'I1A',
                            borderColor: '#673AB7',
                            backgroundColor: 'rgba(0, 0, 0, 0)'
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => {
                                if (item.I1B.indexOf(',') > -1) {
                                    return item.I1B.split(',')[0] + item.I1B.split(',')[1]
                                } else {
                                    return item.I1B
                                }
                            }) : [],
                            label :'I1B',
                            borderColor: '#9C27B0',
                            backgroundColor: 'rgba(0, 0, 0, 0)'
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => {
                                if (item.I1C.indexOf(',') > -1){
                                    return item.I1C.split(',')[0] + item.I1C.split(',')[1]
                                } else {
                                    return item.I1C
                                }
                            }) : [],
                            label : 'I1C',
                            borderColor: '#E91E63',
                            backgroundColor: 'rgba(0, 0, 0, 0)'
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

export default LineChart