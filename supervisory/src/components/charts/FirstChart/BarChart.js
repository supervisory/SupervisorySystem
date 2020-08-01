import React from 'react'
import { Bar } from 'react-chartjs-2'
import _ from 'lodash'

class BarChart extends React.Component {
    // state = {
    //     label: null,
    //     data: null
    // }

    componentDidMount = () => {
        // this.selector()
    }

    // selector = () => {
    //     const { data } = this.props

    //     if (!!data) {
    //         data.reduce((acc, crr) => {
    //             console.log('crr', crr)
    //         })
    //     }
    // }

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
                            backgroundColor: 'gray'
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => item.TapB) : [],
                            label : 'Tap B',
                            backgroundColor: 'blue',
                        },
                        {
                            data : data && data.length > 0  ? data.map((item) => item.TapC) : [],
                            label : 'Tap C',
                            backgroundColor: 'red'
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