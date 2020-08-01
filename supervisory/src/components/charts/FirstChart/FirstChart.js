import React from 'react'
import BarChart from './BarChart'

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
            <div
                style={{
                    width: '70%',
                    height: '70%'
                }}
            >
                {this.state.response ? 
                <BarChart data={this.state.response} /> :
                <div />}
            </div>
        )
    }
}

export default FirstChart