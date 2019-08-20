import React, {Component} from 'react';
import { Comment, Header, Image, Grid, GridRow, Container, List, Icon, Segment, GridColumn} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

export default class OutreachView extends Component {
    render() {
        return (
            <Container fluid>
                <Container text textAlign='center' style={{marginTop: '6em'}}>       
                    <Header as="h1" horizontal style={{paddingBottom: '1em'}} className='header'>
                        What We Offer
                    </Header>
                    <p>Our Outreach Program encourages students to engage in creative problem solving and teamwork, which are vital skills for the modern world.
                    Our customised rocket program is ideal for school incursions, community groups. It's a great opportunity to learn about real-world science and apply theoretical concepts to the real-world.
                    Students will design, test and build bottle rockets which will be launched at the conclusion of the workshop.</p>
                    <p>The cost of our 2 hour program is <strong>$300</strong> for <strong>up to 60</strong> students.</p>
                </Container>
                <Container style={{marginTop: '4em'}}>
                    <Grid container columns={2} centered>
                        <GridRow>
                            <GridColumn>
                                <List relaxed='very'>
                                    <List.Header as='h2' content='Covering Key Learning Outcomes' />
                                    <List.Item>
                                        <List.Icon name='flask' /> Science Understanding
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='lightbulb' /> Science Inquiry Skills
                                    </List.Item>
                                    <List.Item>    
                                        <List.Icon name='trophy' /> Science as a Human Endeavour
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='leaf' /> Earth and Space Sciences
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='paper plane' /> Physical Sciences
                                    </List.Item>
                                </List>
                            </GridColumn>
                            <GridColumn>
                                <List relaxed='very' floated='right'>
                                    <List.Header as='h2' content='Requirements' />
                                    <List.Item>Sports Oval</List.Item>
                                    <List.Item>Please provide teacher supervision and enthusiastic students!</List.Item>
                                    <List.Item>Indoor Classroom for Construction</List.Item>
                                    <List.Item>We provide all materials</List.Item>
                                </List>
                            </GridColumn>
                        </GridRow>
                        <Container style={{marginTop: '4em'}}>
                            <Header as='h2' horizontal content="Feedback We've Received" textAlign='center' dividing />
                            <Grid stackable columns={2} centered>
                                <GridColumn>
                                    <Comment.Group size='large'>
                                        <Comment>
                                            <Comment.Author>Seth <Comment.Metadata>Year 5</Comment.Metadata></Comment.Author>
                                            <Comment.Text>
                                                <p>At the end of the day, I changed my mind about what I want to be when I am older!</p>
                                            </Comment.Text>
                                        </Comment>
                                        <Comment>
                                            <Comment.Author>Tom <Comment.Metadata>Year 6</Comment.Metadata></Comment.Author>
                                            <Comment.Text>
                                                <p>I think the incursion was really cool and would like to do it again.</p>
                                            </Comment.Text>
                                        </Comment>
                                        <Comment>
                                            <Comment.Author>Taj <Comment.Metadata>Year 5</Comment.Metadata></Comment.Author>
                                            <Comment.Text>
                                                <p>The best part was learning about rockets and seeing how they are made.</p>
                                            </Comment.Text>
                                        </Comment>
                                    </Comment.Group>
                                </GridColumn>
                                <GridColumn>
                                    <Comment.Group size='large'>
                                        <Comment>
                                            <Comment.Content>
                                                <Comment.Author>Karen <Comment.Metadata><div>Year 4</div></Comment.Metadata></Comment.Author>
                                                <Comment.Text>
                                                    <p>It was really fun to make our own models because we got to work as a team with our friends.</p>
                                                </Comment.Text>
                                            </Comment.Content>    
                                        </Comment>
                                        <Comment>
                                            <Comment.Author>Imogen <Comment.Metadata>Year 5</Comment.Metadata></Comment.Author>
                                            <Comment.Text>
                                                <p>Liked seeing the rockets that the UWA team made.</p>
                                            </Comment.Text>
                                        </Comment>
                                        <Comment>
                                            <Comment.Author>Riley <Comment.Metadata>Year 6</Comment.Metadata></Comment.Author>
                                            <Comment.Text>
                                                <p>It was awesome we got to work as a team to learn how rockets actually work and fly.</p>                                    </Comment.Text>
                                        </Comment>
                                    </Comment.Group>
                                </GridColumn>
                            </Grid>
                        </Container>
                    </Grid>
                    <Container text style={{paddingBottom: '1em', paddingTop: '3em'}}>
                        <Header textAlign='center' as='h2' style={{paddingBottom: '1em', paddingTop: '1em'}} className='header'>
                            Contact Us
                        </Header>
                        <Grid divided container centered relaxed verticalAlign={'middle'} stackable>
                            <Grid.Row columns={2}>
                            <Grid.Column width={5} textAlign='center'>
                                <Image circular size='small' centered rounded src={'/media/team/James.png'}/>
                                <Header as='h3'>
                                    James Dingley
                                </Header>
                            </Grid.Column>
                            <Grid.Column floated={'right'} mobile={5} textAlign='left'>
                                <List relaxed verticalAlign='top'>
                                <List.Item icon='facebook' content={<a href="https://www.facebook.com/UWAAerospace/" target='_blank' rel='noopener noreferrer'>Facebook</a>}/>
                                <List.Item icon='mail' content={<a href='mailto:hello@uwaaerospace.org'>hello@uwaaerospace.org</a>}/>
                                
                                </List>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Container>
            </Container>
        )
    }
}