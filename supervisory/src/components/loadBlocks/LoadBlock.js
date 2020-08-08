// import React from 'react'
// // import './loadBlock.css'

// class LoadBlock extends React.Component {

//     handleClick1 = (e) => {
//         e.preventDefault()
//         alert('foi trolado hahaha')
//     }

//     handleClick = () => {
//         window.location.href ='/firstChart'
//     }

//     render () {
//         return (
//             <Grid
//                 container
//                 direction="column"
//                 justify="flex-start"
//                 alignItems="stretch"
//             >
//             {/* <div className='content'> */}
//                 <div type='submit' className='buttonLoadBlock' onClick={this.handleClick}>
//                     <div className='componentLoadBlock'>
//                         <p>Bloco de carga: 022-7</p>
//                     </div>
//                 </div>
//             {/* </div> */}
//             </Grid>
//         )
//     }
// }

// export default LoadBlock


import React from 'react'
import {
    Card,
    Paper,
    Typography
} from '@material-ui/core'
import './loadBlock.css'

class LoadBlock extends React.Component {

    handleClickFirstChart = () => {
        window.location.href ='/firstChart'
    }

    handleClickFirstSecondChart = () => {
        window.location.href ='/secondChart'
    }

  render () {

    return (
        <div className='componentLoadBlock'>
            <Paper>
                <Card onClick={this.handleClickFirstChart} style={{backgroundImage: 'linear-gradient(to right, #03CDD4, #08D170)', marginBottom: '5px'}} container spacing={2}>
                    <Typography style={{padding: '10px'}} gutterBottom variant="subtitle1">
                        Bloco de carga
                    </Typography>
                    <Typography style={{padding: '10px'}} variant="body2" color="textSecondary">
                        ID: 1032716
                    </Typography>
                </Card>
                <Card onClick={this.handleClickFirstSecondChart} style={{backgroundImage: 'linear-gradient(to right, #03CDD4, #08D170)', marginBottom: '5px'}} container spacing={2}>
                    <Typography style={{padding: '10px'}} gutterBottom variant="subtitle1">
                        Bloco de carga
                    </Typography>
                    <Typography style={{padding: '10px'}} variant="body2" color="textSecondary">
                        ID: 1030114
                    </Typography>
                </Card>
                <Card style={{backgroundImage: 'linear-gradient(to right, #03CDD4, #08D170)', marginBottom: '5px'}} container spacing={2}>
                    <Typography style={{padding: '10px'}} gutterBottom variant="subtitle1">
                        Bloco de carga
                    </Typography>
                    <Typography style={{padding: '10px'}} variant="body2" color="textSecondary">
                        ID: 1271814
                    </Typography>
                </Card>
            </Paper>
        </div>
    )}
}

export default LoadBlock