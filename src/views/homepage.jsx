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
    Placeholder,
    Responsive,
    Transition,} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import CoverItem from '../Components/CoverItem';

class HomePage extends Component {
    state = {}
  
    render() {
      const { children } = this.props
  
      return (
        <div>
        <Responsive as={Container} {...Responsive.onlyComputer} fluid basic>
            <Image fluid src={"./media/aurc/prep_banner.jpg"} style={{minHeight: "100%", opacity: 0.9}} />
            <Header size="huge" inverted textAlign='center' content="Empowering Western Australian Students" style={{marginTop: '-4em', position: "relative", fontSize: '4em'}} />
        </Responsive>
        <Segment vetrical basic fluid placeholder style={{marginTop: '10em', paddingBottom: '2em'}}>
            <Container textAlign="center" text>
                <Header as="h1" content="UWA Aerospace exists to enable and facilitate the development of young Western Australians in STEM and the Aerospace Industry through the following activities..." />
            </Container>
        </Segment>
        <Segment vetrical basic fluid placeholder>
            <Transition animation='fade' transitionOnMount duration='1000'>
                <CoverItem title={"Rocketry Competitions"} contentUrl={"/media/aurc/success.jpg"} />
            </Transition>
        </Segment>
        <Segment vetrical basic  fluid placeholder>
            <CoverItem title={"Outreach"} contentUrl={"/media/ScotchOutreach/launch3.jpg"} inverted={true} content={<p>UWAA does outreach</p>} />
        </Segment>
        <Segment vetrical fluid basic placeholder>
            <CoverItem title={"Educating Students"} contentUrl={"/media/ScotchOutreach/pres1.jpg"} />
        </Segment>
        <Segment vetrical fluid basic placeholder>
            <CoverItem title={"Engaging Students with Industry"} contentUrl={"/media/indo.jpg"} inverted={true} />
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical basic>
            <Container text>
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
        </Segment>
        <Segment vertical basic>
            <Container text>
            <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '1em'}} className='header'>
                Special Thanks To
            </Header>
            <Grid container centered columns={2} verticalAlign='middle' style={{paddingBottom: '2em'}}>
                <Grid.Column>
                    <Image centered size='medium' href='https://www.riotinto.com/' target='_blank' src={'/media/RioTinto.jpg'} />
                </Grid.Column>
                <Grid.Column>
                    <Image centered size='medium' href='http://wars.org.au' target='_blank' src={'/media/wars.jpg'} />
                </Grid.Column>
                <Grid.Column>
                    <Image centered size='medium' href='http://www.uwa.edu.au' target='_blank' src={'/media/UWALogo.jpg'} />
                </Grid.Column>
            </Grid>
            </Container>
        </Segment>
        </div>
        )
    }
}

export default HomePage