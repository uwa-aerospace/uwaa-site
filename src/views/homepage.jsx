import React, { Component } from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    Card,
    Image,
    List,
    Segment,
    GridRow,
    GridColumn,
    Placeholder,
    Responsive,} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import CoverItem from '../Components/CoverItem';

class HomePage extends React.Component {
    state = {}
  
    render() {
      const { children } = this.props
  
      return (
        <div>
        <Responsive as={Segment} {...Responsive.onlyComputer} style={{ padding: '0em 0em', height: '80vh' }} inverted placeholder fluid>
            <Placeholder fluid>
                <Placeholder.Image inverted rectangular>

                </Placeholder.Image>
            </Placeholder>
        </Responsive>
        <Divider></Divider>
        <Segment vetrical basic style={{ margin: '4em 0em' }}  fluid placeholder>
            <CoverItem title={"Rocketry Competitions"} />
        </Segment>
        <Segment vetrical basic  fluid placeholder>
            <CoverItem title={"Outreach"} />
        </Segment>
        <Segment vetrical fluid basic placeholder>
            <CoverItem title={"Educating Students"} />
        </Segment>
        <Segment vertical basic>
            <Container text>
            <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '1em'}} className='header'>
                Special Thanks To
            </Header>
            <Grid container centered columns={2} verticalAlign='middle'>
                <Grid.Column>
                    <Image centered size='medium' href='https://www.riotinto.com/' target='_blank' src={'/media/RioTinto.jpg'} />
                </Grid.Column>
                <Grid.Column>
                    <Image centered size='medium' href='http://wars.org.au' target='_blank' src={'/media/wars.jpg'} />
                </Grid.Column>
            </Grid>
            </Container>
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
        </div>
        )
    }
}

export default HomePage