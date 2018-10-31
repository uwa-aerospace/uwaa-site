import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button,
  Container,
  Divider,
  Grid,
  Header,
  Card,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  GridRow,
  GridColumn,
  CardContent,} from 'semantic-ui-react';


  const HomepageHeading = ({ mobile }) => (
    <Container>
      <Header
        as='h1'
        textAlign='center'
        content='UWA Aerospace'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '80vh', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'>
                  Competition
                </Menu.Item>
                <Menu.Item as='a'>Rockets</Menu.Item>
                <Menu.Item as='a'>Team</Menu.Item>
                <Menu.Item as='a'>Contact Us</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

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
    return(
      <DesktopContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container centered column stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Header as='h3' textAlign='center' style={{ fontSize: '2em' }}>
                    2018/19 Australian University Rocketry Competition
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    We can give your company superpowers to do things that they never thought possible.
                    Let us delight your customers and empower your needs... through pure data analytics.
                  </p>
                  <Header as='h5' textAlign='center' style={{ fontSize: '1.5em' }}>Progress</Header>
                  Put a sick timeline here
                </Grid.Column>
              </Grid.Row>
              <Header as='h3' textAlign='center' style={{ fontSize: '2em' }}>Footage</Header>
              <Grid.Row>
                
                <Grid.Column width={16}>
                  <Card.Group itemsPerRow={2}>
                    <Card fluid>
                      <CardContent content={<video style={{width: '100%', height: '100%'}} controls><source src="/slowmo.mp4" type="video/mp4"></source></video>}/>
                    </Card>
                    <Card fluid>
                      <CardContent content={<video style={{width: '100%', height: '100%'}} controls><source src="/slowmo.mp4" type="video/mp4"></source></video>}/>
                    </Card>
                  </Card.Group>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '0em' }} vertical>
            <Grid stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Our Team
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <GridColumn>
                  <Image centered size={'huge'} src={'/team.jpg'}/>
                </GridColumn>
              </Grid.Row>
            </Grid>
            <Grid centered stackable>
              <GridRow style={{marginTop: '4em'}}>
                <Header as='h3' centered style={{ fontSize: '2em' }}>
                  Team Members
                </Header>
              </GridRow>
              <GridRow centered style={{marginBottom: '2em'}}>
                <GridColumn width={10}>
                  <Card.Group centered itemsPerRow={5} doubling>
                    <Card
                      image={<Image fluid size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Samuel Heath'
                      meta='Co-Project Manager & Avionics'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Anthony Poletto'
                      meta='Co-Project Manager & Aerostructures'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Rowan Sobey'
                      meta='Outreach & Recovery Lead'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Joel Tapper'
                      meta='Aerostructures Lead'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Talisha Finn'
                      meta='Avionics Lead'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Scott Patterson'
                      meta='Aerostructures'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Sachio Ingrilli'
                      meta='Aerostructures Wunderkinder & Chief Weather Specialist'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Jamie Nella'
                      meta='Recovery'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Steffen Remvik'
                      meta='Recovery & Tallest Team Member Awardee'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Vihanga Akash'
                      meta='Avionics'
                      description=''
                      raised
                    />
                    <Card
                      image={<Image size={'medium'} src={'/sunnies.jpg'}/>}
                      header='Harrison Hill'
                      meta='Aerostructures'
                      description=''
                      raised
                    />
                  </Card.Group>
                </GridColumn>
              </GridRow>
            </Grid>
          </Segment>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Contact Us
              </Header>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column width>
                    <Icon name={'facebook f'} link/> https://www.facebook.com/UWAAerospace/
                  </Grid.Column>
                  <Grid.Column>
                    <Icon name={'at'} link/> hello@uwaaerospace.org
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Button as='a' size='large'>
                Read More
              </Button>
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
                <a href='#'>Case Studies</a>
              </Divider>
            </Container>
          </Segment>
          <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>Sitemap</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                      <List.Item as='a'>Religious Ceremonies</List.Item>
                      <List.Item as='a'>Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item as='a'>Banana Pre-Order</List.Item>
                      <List.Item as='a'>DNA FAQ</List.Item>
                      <List.Item as='a'>How To Access</List.Item>
                      <List.Item as='a'>Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
      </DesktopContainer>
    )
  }
}

export default App;
