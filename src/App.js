import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group-v2";

import HomePage from './views/homepage';
import TeamView from './views/TeamView';
import Comp2018 from './views/Comp2018View';
import OutreachView from './views/OutreachView';
import Launchpad from './views/Launchpad';

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

const MenuItems = () => (
  <>
    <Dropdown item text='Missions'>
      <Dropdown.Menu>
        <Dropdown.Item icon='rocket' href="/launchpad" as="a" text='Launchpad' />
        <Dropdown.Item icon='trophy' href="/aurc2018" as="a" text='2018-2019 AURC' />
        {/*<Dropdown.Item icon='flask' href="/aurc2018" as="a" text='2019 Science Missions' />*/}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item as='a' href="/team">Our Team</Menu.Item>
    <Menu.Item as='a' href='/outreach'>Outreach</Menu.Item>
  </>
)


class DesktopContainer extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props
    const {visible} = this.state

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <style>
            {`
              #id_pushable {
                overflow: visible !important;
              }
            `}
          </style>
          <Sidebar.Pushable>
            <Sidebar
              id='id_pushable'
              as={Menu}
              direction='left'
              animation="overlay"
              icon="labeled"
              inverted
              vertical
              visible={visible}
            >
              <MenuItems />
            </Sidebar>
            <Sidebar.Pusher
              dimmed={visible}
              onClick={() => this.handlePusher()}
              style={{ minHeight: "100vh", overflow: 'visible!important' }}
            >
              <Menu
                fixed={'top'}
                inverted
                size='small'
              >
                <Menu.Item header icon href="/">
                  <Header as='h3' image inverted className='header'><Image size='small' src={'/media/logo-plain.png'} />UWA Aerospace</Header>
                </Menu.Item>
                <Menu.Item onClick={() => this.handleToggle()} position='right'>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment
            basic
            inverted
            textAlign='center'
            vertical>
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
                <MenuItems />
              </Container>
            </Menu>
          </Segment>
          {children}
        </Responsive>
      </div>
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
          <Container fluid style={{minHeight: '100vh', marginTop: "5em"}}>
              <Route exact path="/" component={HomePage} />
              <Route path="/team" component={TeamView} />
              <Route path="/aurc2018" component={Comp2018} />
              <Route path="/launchpad" component={Launchpad} />
              <Route path='/outreach' component={OutreachView} />
          </Container>

          <Segment inverted vertical textAlign='center' attached='top'>
            <Container text>
              <Header textAlign='center' as='h5' image inverted>
                © Copyright 2018-{year} - UWA Aerospace
              </Header>
            </Container>
          </Segment>
        </DesktopContainer>
      </Router>
    )
  }
}

export default App;
