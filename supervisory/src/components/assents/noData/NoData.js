import React from 'react'
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp'

class NoData extends React.Component { 

    render() {
        return (
            <div style={{
                textAlign: 'center'
            }}>
                <p>Nenhum dado encontrado</p>
                <ErrorSharpIcon style={{
                    fontSize:'50px'
                    }}
                />
            </div>
        )
    }
}

export default NoData