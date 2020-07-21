import React from 'react'
import { Radar } from 'react-chartjs-2'

class BarChart extends React.Component {

    render() {
        return (
            <Radar
                data={{
                    labels : ['January','February','March','April','May','June','July'],
                    datasets : [
                        {
                        // backgroundColor: 'rgba(151,187,205,1)',
                        data : [65,59,90,81,56,55,40],
                        label : 'Tigers'
                    },
                    {
                        // backgroundColor: 'rgba(110,80,100,1)',
                        data : [28,48,40,19,96,27,100],
                        label : 'Bears'
                    }
                    ]
                }}
                width={400}
                height={400}
                options={{ maintainAspectRatio: false }}
            />
        )
    }
}

export default BarChart