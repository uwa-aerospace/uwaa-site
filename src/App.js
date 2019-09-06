import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Transition,
  Modal} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import HomePage from './views/homepage';
import TeamView from './views/TeamView';
import OutreachView from './views/OutreachView';
import Launchpad from './views/Launchpad';

import Gallery from './Components/Gallery'

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

const MenuItems = ({mobile}) => (
  <>
    <Dropdown item simple={!mobile} text='Missions'>
      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} to='/launchpad/qad' text='QAD' />
        <Dropdown.Item as={NavLink} to='/launchpad/finley' text='Finley' />
        <Dropdown.Item as={NavLink} to='/launchpad/jeff' text='Jeff' />
        <Dropdown.Item as={NavLink} to='/launchpad/ariel' text="Cupid's Arrow" />
        {/*<Dropdown.Item icon='flask' href="/aurc2018" as="a" text='2019 Science Missions' />*/}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item as={NavLink} to='/team'>Our Team</Menu.Item>
    {/*<Modal 
      centered
      size='large'
      trigger={<Menu.Item as='a'>Media</Menu.Item>} 
      content={<Gallery />}
    />*/}
    <Menu.Item as={NavLink} to='/outreach'>Outreach</Menu.Item>
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
              size='small'
            >
              <MenuItems mobile={true} />
            </Sidebar>
            <Sidebar.Pusher
              dimmed={visible}
              onClick={() => this.handlePusher()}
              style={{ minHeight: "100vh", minWidth:'100vw', overflow: 'visible!important' }}
            >
              <Menu
                fixed={'top'}
                inverted
                size='large'
              >
                <Menu.Item header icon to="/" as={Link}>
                  <Header as='h3' image inverted className='header'><Image size='medium' src={'/media/Logo.png'} />UWA Aerospace</Header>
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
          <Menu
            fixed={'top'}
            inverted
            size='huge'
          >
            <Container>
              <Menu.Item header icon to="/" as={Link}>
                <Header as='h3' image inverted className='header'><Image size='medium' src={'/media/Logo.png'} />UWA Aerospace</Header>
              </Menu.Item>
              <Menu.Menu position='right'>
                <MenuItems mobile={false} />
              </Menu.Menu>
            </Container>
          </Menu>
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
      <BrowserRouter forceRefresh={false}>
        <DesktopContainer>
          <style>
            {`
              #main-container, #second-container, #rocket-container, #outreach-container, #team-container, #banner {
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
            `}
          </style>
          <Container id='main-container' fluid style={{minHeight: '100vh'}}>
            <Route render={({location}) => {
              const {pathname, key} = location;
              return (
                <Transition.Group>
                  <Switch location={location}>
                    <Route exact path="/team" component={TeamView} />
                    <Route exact path="/launchpad/:ref" component={Launchpad} />
                    <Route exact path='/outreach' component={OutreachView} /> 
                    <Route component={HomePage} />  
                  </Switch>
                </Transition.Group>
              )
            }}/>
          </Container>
          <Segment inverted vertical textAlign='center' style={{ padding: '3em 0em' }}>
            <Container>
              <Grid inverted stackable centered stretched>
                <Grid.Row verticalAlign='bottom'>
                  <Grid.Column width={8}>
                    <Header inverted as='h3' content='Contact Us' textAlign='center' />
                    <Grid columns={2} inverted divided verticalAlign='middle'>
                      <Grid.Column>
                        <List link inverted size='large'>
                          <List.Item as='a' href='https://goo.gl/maps/Wm5fVCWFvksBqmoi7' target='_blank'>
                            <Icon name='map outline' /> 35 Stirling Hwy, 6009 Perth WA
                            The University of Western Australia  
                          </List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column>
                        <List link inverted size='large'>
                          <List.Item as='a' href='https://www.facebook.com/UWAAerospace/' target='_blank'>
                            <Icon name='facebook f' />
                            Facebook
                          </List.Item>
                          <List.Item as='a' href='mailto:hello@uwaaerospace.org'>
                            <Icon name='mail square' />
                            hello@uwaerospace.org
                          </List.Item>
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                  {/*<Grid.Column width={12} floated='right'>
                    <List link inverted>
                    <List.Item as='h5' style={{float: 'right'}}>
                      © 2018-{year} - UWA Aerospace
                    </List.Item>
                    </List>
                  </Grid.Column>*/}
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </DesktopContainer>
      </BrowserRouter>
    )
  }
}

export default App;
