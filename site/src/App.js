import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Grid,
  Header,
  Card,
  Embed,
  Image,
  List,
  Menu,
  Label,
  Responsive,
  Segment,
  GridRow,
  GridColumn,
  Icon,
  Rail} from 'semantic-ui-react';
import {Steps} from 'antd';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

const Step = Steps.Step;

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
                <Menu.Item header icon>
                  <Header as='h3' image inverted className='header'><Image size='mini' src={'/media/logo.png'} />UWA Aerospace</Header>
                </Menu.Item>
                {/*<Menu.Item as='a'>Rockets</Menu.Item>
                <Menu.Item as='a'>Team</Menu.Item>
                <Menu.Item as='a'>Contact Us</Menu.Item>*/}
              </Container>
            </Menu>
            {/*<HomepageHeading />*/}
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
      <DesktopContainer>
        <Segment style={{padding: '3em 0em', paddingTop:'5em'}} vertical basic>
          <Grid columns={2} textAlign='center' centered verticalAlign='middle' stackable>
            <Grid.Column>
              <Segment basic compact>
              <Header as='h3' textAlign='center' style={{ fontSize: '2em' }}>
                2018/19 Australian University Rocketry Competition
              </Header>
                <Segment basic>
                  <p style={{ fontSize: '1.33em'}}>
                  The Australian Universities Rocket Competition (AURC) is an inagural competition being organised by the Australian Youth Aerospace Association with support from the Department of Defence. 
                  The competition will take place between the 17th-20th of April in the Queensland in 2019.</p>
                  <p style={{ fontSize: '1.33em' }}>Our target altitude is 10,000 feet (3046m), and we have already flight proven our custom rocket to 2860m under 15g's.
                    The competition will be assessed on technical design of the rocket, and it's performance during the competition which is based on it's closeness to the target height, and the successful recovery of the rocket.
                  </p>
                </Segment>
                <Rail size={'mini'} position={'left'}>
                  <Responsive as={Segment} basic {...Responsive.onlyComputer}>
                    <Header textAlign='center' as='h3' dividing><Icon size={'mini'} name='tasks'/> Progress</Header>
                    <Steps progressDot current={6} style={{marginLeft: '20%'}} direction='vertical' labelPlacement='vertical'>
                      <Step title='Team Formation' description='April 2018'/>
                      <Step title='Research' description=' '/>
                      <Step title='Obtain L1 & L2 Certifications' description=' '/>
                      <Step title='Build Jeff' description=' '/>
                      <Step title='1st Flight of Jeff' description='Apogee: 1400m'/>
                      <Step title='First Progress Update' description=' '></Step>
                      <Step title='2nd Flight of Jeff' description='Apogee: 2860m Max-Velocity: 290m/s Max-G Force: 15g'></Step>
                      <Step title='Second Progress Update' description='10/12/2018'></Step>
                      <Step title='Technical Report' description=' '></Step>
                      <Step title='AURC Competition Launch' description=' '></Step>
                    </Steps>
                  </Responsive>
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid>
          <Responsive as={Segment} centered basic {...Responsive.onlyMobile}>
            <Grid centered>
              <Grid.Row centered columns={1}>
                <Grid.Column width={10}>
                <Header textAlign='center' as='h3' dividing><Icon size='mini' name='tasks' /> Progress</Header>
                  <Steps progressDot current={6} style={{marginLeft: '30%'}} direction='vertical' labelPlacement='vertical'>
                    <Step title='Team Formation' description='April 2018'/>
                    <Step title='Research' description=''/>
                    <Step title='Obtain L1 & L2 Certifications' description=''/>
                    <Step title='Build Jeff' description=''/>
                    <Step title='1st Flight of Jeff' description='Apogee: 1400m'/>
                    <Step title='First Progress Update' description=''></Step>
                    <Step title='2nd Flight of Jeff' description='Apogee: 2860m Max-Velocity: 290m/s Max-G Force: 15g'></Step>
                    <Step title='Second Progress Update' description='10/12/2018'></Step>
                    <Step title='Technical Report' description=''></Step>
                    <Step title='AURC Competition Launch' description=''></Step>
                  </Steps>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical basic>
          <Header as='h3' textAlign='center' style={{ fontSize: '2em' }}>
            The Team
          </Header>
          <Grid container>
            <Grid.Row textAlign='center' centered columns={1}>
              <Grid.Column style={{ paddingBottom: '3em'}} width={12}>
                <p style={{ fontSize: '1.33em' }}>We are a team of driven, and talented students from the University of Western Australia with a huge passion for engineering, rocketry, and the aerospace industry.
                The team is predominantly comprised of multi-disciplinary engineering students with specialisations ranging from Mechanical to Software Engineering.</p>
              </Grid.Column>
              <Grid.Column width={12}>
                <Image centered rounded src={'/media/team.jpg'} 
                  label={<Label basic 
                                attached='bottom' 
                                detail={
                                  <Header textAlign='center' as='h4'>
                                    The UWA Aerospace Team with Jeff before our final launch in preparation for the April 2019 launch window
                                  </Header>}/>} />
                
                  
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered container>
            <GridRow style={{marginTop: '4em'}}>
              <Container text>       
                <Divider as='h2' horizontal style={{paddingBottom: '1em'}} className='header'>
                  Team Members
                </Divider>
              </Container> 
            </GridRow>
            <GridRow centered style={{marginBottom: '2em'}}>
              <GridColumn width={14}>
                <Card.Group centered itemsPerRow={4} doubling>
                  <Card
                    image={<Image fluid src={'/media/team/Sam.png'}/>}
                    header={<Card.Header>Samuel Heath <span style={{float:'right'}}><Icon size='small' corner name='chart line'/></span></Card.Header>}
                    meta='Co-Project Manager & Avionics'
                    raised
                  />
                  <Card
                    image={<Image fluid src={'/media/team/Anthony.jpg'}/>}
                    header={<Card.Header>Anthony Poletto <span style={{float:'right'}}><Icon size='small' name='chart line'/></span></Card.Header>}
                    meta='Co-Project Manager & Aerostructures'
                    raised
                  />
                  <Card
                    image={<Image fluid src={'/media/team/Rowan.png'}/>}
                    header={<Card.Header>Rowan Sobey <span style={{float:'right'}}><Icon size='small' name='band aid'/></span></Card.Header>}
                    meta='Sponsorships & Recovery Lead'
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header={<Card.Header>Joel Tapper <span style={{float:'right'}}><Icon size='small' name='rocket'/></span></Card.Header>}
                    meta={<Card.Meta> Aerostructures Lead</Card.Meta>}
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header={<Card.Header>Talisha Finn <span style={{float:'right'}}><Icon size='small' name='microchip'/></span></Card.Header>}
                    meta='Avionics Lead'
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header={<Card.Header>Sachio Ingrilli  <span style={{float:'right'}}><Icon size='small' name='cloud'/></span></Card.Header>}
                    meta='Aerostructures & Chief Weather Specialist'
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header='Scott Patterson'
                    meta='Aerostructures'
                    raised
                  />
                  <Card
                    image={<Image fluid src={'/media/team/Jamie.jpg'}/>}
                    header='Jamie Nella'
                    meta='Recovery & Flight Analysis'
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header='Steffen Remvik'
                    meta='Recovery & Tallest Member'
                    raised
                  />
                  <Card
                    image={<Image fluid src={'/media/team/Akash.jpg'}/>}
                    header='Vihanga Akash Silva'
                    meta='Avionics'
                    raised
                  />
                  <Card
                    image={<Image style={{opacity: '0.5'}} fluid src={'/media/logo.png'}/>}
                    header='Harrison Hill'
                    meta='Aerostructures'
                    raised
                  />
                </Card.Group>
                <Divider  section/>
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>
        <Divider hidden clearing/>
        <Segment vertical basic>
          <Header as='h3' textAlign='center' style={{ fontSize: '2em', paddingBottom: '1em'}}>Media</Header>
          <Grid container centered>
            <Grid.Row centered>
              <Grid.Column width={14}>
                <Card.Group itemsPerRow={2} doubling>
                  <Card fluid image={<Image fluid rounded src="/media/Windtunnel_testing.jpg" />}/>
                  <Card fluid image={<Image fluid rounded src={"/media/25th_August_Launch.jpg"} />}/>
                  <Card fluid image={<Image fluid rounded src={"/media/Avionics_inspection.jpg"} />}/>
                  <Card fluid image={<Image fluid rounded src="/media/team_ariel.jpg" />}/>
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={14}>
                <Card.Group itemsPerRow={2} doubling>
                  <Card fluid content={<Embed defaultActive content={<video style={{width: '100%', height: '100%'}} controls><source src="/media/25th_August_SlowMo.mp4" type="video/mp4"></source></video>} />}/>
                  <Card fluid content={<Embed defaultActive content={<video style={{width: '100%', height: '100%'}} controls><source src="/media/slowmo.mp4" type="video/mp4"></source></video>} />}/>
                </Card.Group>
                <Divider section/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical basic>
          <Container text>
            <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '1em'}} className='header'>
              Special Thanks To
            </Header>
            <Grid container centered columns={1}>
              <Grid.Row centered>
                <Grid.Column width={4}>
                  <Image centered size='medium' href='http://www.caswa.com' target='_blank' src={'/media/caswa.png'} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical basic>
          <Container text>
            <Divider as='h2' horizontal fitted style={{paddingBottom: '2em'}} className='header'>
              Contact Us
            </Divider>
            <Grid divided container centered relaxed verticalAlign={'middle'} stackable>
              <Grid.Row columns={2}>
                <Grid.Column width={5} textAlign='center'>
                    <Image circular size='small' centered rounded src={'/media/team/Rowan.png'}/>
                    <Header as='h3'>
                      Rowan Sobey
                      <HeaderSubHeader>Sponsorship Coordinator</HeaderSubHeader>
                    </Header>
                </Grid.Column>
                <Grid.Column floated={'right'} mobile={5} textAlign='left'>
                  <List relaxed verticalAlign='top'>
                    <List.Item icon='book' content={<a href='/resources/UWA Aerospace Prospectus.pdf' target='_blank' rel='noopener noreferrer'>Prospectus</a>}/>
                    <List.Item icon='facebook' content={<a href="https://www.facebook.com/UWAAerospace/" target='_blank' rel='noopener noreferrer'>Facebook</a>}/>
                    <List.Item icon='mail' content={<a href='mailto:hello@uwaaerospace.org'>hello@uwaaerospace.org</a>}/>
                    <List.Item icon='linkedin' content={<a href='https://www.linkedin.com/company/uwa-aerospace/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>}/>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment inverted vertical textAlign='center'>
          <Container text>
            <Header textAlign='center' as='h5' image inverted>
              © Copyright {year} - UWAA
            </Header>
          </Container>
        </Segment>
      </DesktopContainer>
    )
  }
}

export default App;
