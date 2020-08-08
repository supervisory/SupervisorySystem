import React from 'react'
import LineChart from './LineChart'
import Card from '@material-ui/core/Card'
import NoData from '../../assents/noData/NoData'

class FirstChart extends React.Component {      
    state = {
        response: null
    }

    async componentDidMount() {
        await fetch('http://localhost:3030/apiQuery')
          .then(res => res.json())
          .then((result) => {
                return this.setState({
                    response: result
                })
            },
            (error) => {
              console.log('errer', error)
            }
          )
      }

    render() {
        return (
            <Card
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >

                {this.state.response ? 
                <LineChart data={this.state.response} />:
                <NoData />}
            </Card>
        )
    }
}

export default FirstChart