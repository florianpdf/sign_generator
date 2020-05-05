import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Container';
import './index.css'

import Instructions from './Instructions';
import Form from './Form';
import RenderHtml from './RenderHtml'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
  }

  getData(infoUser){
    this.setState(infoUser)
  }

  render() {
    return (
      <React.StrictMode>
        <React.Fragment>
          <CssBaseline />
          <Box component="section" className="instruction">
            <Container maxWidth="lg">
              <Instructions />
            </Container>
          </Box>
          <Box component="section" className="form">
            <Container maxWidth="lg">
              <Form getData={this.getData}/>
            </Container>
          </Box>
          <Box component="section" className="render">
            <Container maxWidth="lg">
              <RenderHtml infoUser={this.state}/>
        </Container>
          </Box>
        </React.Fragment>

      </React.StrictMode>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);