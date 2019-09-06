import React, { Component } from 'react';
import {
    Container,
    Divider,
    Dimmer,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Icon,
    Responsive,
    Transition,
    Button,} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import CoverItem from '../Components/CoverItem';

const Banner = ({mobile}) => (
    <Container id='banner' fluid style={{
        backgroundImage: "url(./media/aurc/banner.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh',
        opacity: 0.9,
    }}>
        <Container id='banner-header' textAlign='center'>
            <Transition animation='fade' visible={() => { setTimeout(() => {return true;}, 500); return false;}}>
                <Header
                    inverted
                    as='h1'
                    style={{
                        fontSize: mobile ? '4em' : '8em',
                        fontWeight: 'bold',
                        marginBottom: 0,
                        paddingTop: mobile ? '70%' : '50%',
                    }}>
                    UWA Aerospace
                </Header>
            </Transition>
        </Container>
    </Container>
)

class HomePage extends Component {
    state = {}
  
    render() {
      const { children } = this.props
  
      return (
        <Container fluid id='second-container'>
            <Responsive {...Responsive.onlyMobile}>
                <Banner mobile={true} />
                {/*<Button basic inverted content={<Header inverted as='h1' content='See More' />} style={{position: "absolute", marginTop: '-20vh'}} />
                <Header size="huge" inverted textAlign='center' content="Empowering Western Australian Students" style={{marginTop: '-4em', position: "relative", fontSize: '4em'}} />*/}
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Banner mobile={false} />
                {/*<Button basic inverted content={<Header inverted as='h1' content='See More' />} style={{position: "absolute", marginTop: '-20vh'}} />
                <Header size="huge" inverted textAlign='center' content="Empowering Western Australian Students" style={{marginTop: '-4em', position: "relative", fontSize: '4em'}} />*/}
            </Responsive>
            <Segment vertical padded='very' basic textAlign='center' tertiary>
                <Container text>
                    <Header as='h2'>UWA Aerospace is a student led technical team focused on developing high-powered rocketry capabilities in Western Australia.</Header>
                    <Header as='h2'>We design, build, and launch our rockets for high-altitude research, as well as promote space science and STEM in the Community.</Header>
                </Container>
            </Segment>
            <Container text style={{paddingTop:'6em', paddingBottom: '2em'}} textAlign='center'>
                <Header as='h2' textAlign='center'>
                    <Icon name='ordered list' /> 2019/2020 Objectives 
                </Header>
                <h3>This year we are focussing on creating a low-cost rocket for high-altitude research into atmospheric science and microgravity experiments through the following missions:</h3>
            </Container>
            <Container style={{marginTop: '3em', marginBottom: '3em'}}>
                <Grid centered stackable relaxed='very' columns={4} doubling>
                    <Grid.Column textAlign='center'>
                        <Header as='h2' content="1. QAD" />
                        <h3>Developing an improved recovery system</h3>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Header as='h2' content="2. Echidna" />
                        <h3>Testing an advanced high-altitude avionics system</h3>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Header as='h2' content="3. Platypus" />
                        <h3>Launching our first supersonic rocket</h3>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Header as='h2' content="4. Roo" />
                        <h3>Launching a rocket over 30,000 ft.</h3>
                    </Grid.Column>
                </Grid>
            </Container>
        {/*<Segment vetrical basic fluid placeholder style={{marginTop: '10em', paddingBottom: '2em'}}>
            <Container textAlign="center" text>
                <Header as="h2" content="UWA Aerospace is a technical student team developing skills relevant to engineering in extreme environments. We design, build, test, and launch university-level competitions and as platforms for high-altitude research. We also promote space, science, and STEM to the broader WA Community." />
            </Container>
        </Segment>
        <Segment vertical basic fluid>
            <Container>
                <Header as="h2" textAlign='center'>2019 Mission</Header>
                <Header as="h3" content="This year we are focussing on creating a low-cost rocket for high-altitude research into atmospheric science and microgravity experiments. We’re achieving this through five distinct missions designed to push the frontiers of engineering design." />
            </Container>
        </Segment>
        <Segment vetrical basic fluid placeholder>
            <Transition animation='fade' transitionOnMount duration='1000'>
                <CoverItem title={"Rocketry Competitions"} contentUrl={"/media/aurc/success.jpg"} />
            </Transition>
        </Segment>
        <Segment vetrical fluid basic placeholder>
            <CoverItem title={"Engaging Students with Industry"} contentUrl={"/media/indo.jpg"} inverted={true} />
        </Segment>
        <Segment vetrical basic fluid placeholder>
            <CoverItem title={"Outreach"} contentUrl={"/media/ScotchOutreach/launch3.jpg"} content={<p>We love to share our passion for rockets while promoting STEM education and WA Science</p>} />
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical basic>
            {<Container text>
            <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '1em'}} className='header'>
                Contact Us
            </Header>
            <Grid divided container centered relaxed verticalAlign={'middle'} stackable>
                <Grid.Row columns={2}>
                <Grid.Column width={5} textAlign='center'>
                    <Image circular size='small' centered rounded src={'/media/team/James.png'}/>
                    <Header as='h3'>
                        James Dingley
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
        </Segment>*/}
            <Segment vertical basic>
                <Container text>
                    <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '2em'}} className='header'>
                        Special Thanks To Our Partners
                    </Header>
                    <Grid centered columns={2} verticalAlign='middle' style={{paddingBottom: '2em'}} doubling stackable stretched>
                        <Grid.Column>
                            <Image centered size='medium' href='https://www.riotinto.com/' target='_blank' src={'/media/RioTinto.jpg'} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image centered size='medium' href='http://wars.org.au' target='_blank' src={'/media/wars.jpg'} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image centered size='medium' href='http://www.uwa.edu.au' target='_blank' src={'/media/UWAlogo.jpg'} />
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </Container>
        )
    }
}

export default HomePage