import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
  Responsive,
  Segment} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './views/homepage';
import TeamView from './views/TeamView';
import Comp2018 from './views/Comp2018View';
import OutreachView from './views/OutreachView';

  const HomepageHeading = ({ mobile }) => (
    <Container textAlign='center'>
      <Header
        as='h1'
        textAlign='center'
        content='UWA Aerospace'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: mobile? '1em' : '2em',
          marginTop: mobile ? '1em' : '2em',
        }}
      />
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

class DesktopContainer extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive>
          <Segment
            basic
            inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed={'top'}
              inverted
              pointing
              size='large'
            >
              <Container>
                <Menu.Item header icon href="/">
                  <Header as='h3' image inverted className='header'><Image size='small' src={'/media/logo-plain.png'} />UWA Aerospace</Header>
                </Menu.Item>
                <Dropdown item text='Rockets'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='rocket' href="/aurc2018" as="a" text='2018-2019 AURC' />
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a' href="/team">Team</Menu.Item>
                <Menu.Item as='a' href='/outreach'>Outreach</Menu.Item>
              </Container>
            </Menu>
          </Segment>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class App extends Component {
  render ()  {
    var year = new Date().getFullYear();
    return(
      <Router>
        <DesktopContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/team" component={TeamView} />
          <Route path="/aurc2018" component={Comp2018} />
          <Route path='/outrech' component={OutreachView} />
          
          <Segment inverted vertical textAlign='center'>
            <Container text>
              <Header textAlign='center' as='h5' image inverted>
                © Copyright 2018-{year} - UWAA
              </Header>
            </Container>
          </Segment>
        </DesktopContainer>
        
      </Router>
    )
  }
}

export default App;
