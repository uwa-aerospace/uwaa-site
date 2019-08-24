import React, {Component} from 'react';
import { Comment, Header, Image, Grid, GridRow, Container, List, Icon, Segment, GridColumn, Transition} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

import Quote from '../Components/Quote';


const quotes = [
    {author:'Karen', meta: 'Year 4', text:'“It was really fun to make our own models because we got to work as a team with our friends.”'},
    {author:'Imogen', meta: 'Year 5', text:'“I liked seeing the rockets that the UWA team made.”'},
    {author:'Seth', meta: 'Year 5', text:'“At the end of the day, I changed my mind about what I want to be when I am older!”'},
    {author:'Tom', meta: 'Year 6', text:'“I think the incursion was really cool and would like to do it again.”'},
    {author:'Taj', meta: 'Year 5', text:'“The best part was learning about rockets and seeing how they are made.”'},
    {author:'Riley', meta: 'Year 6', text: '“It was awesome! We got to work as a team to learn how rockets actually work and fly.”'},
    {author: 'Sierra', meta: 'Year 4', text: '“I think they should come every year”'},
    {author: 'Lilly', meta: 'Year 4', text: '“I liked making mistakes and trying to fix them”'},


]

const outcomes = [
    {key: 1, icon: 'flask', content: 'Science Understanding'},
    {key: 2, icon: 'lightbulb', content: 'Science Inquiry Skills'},
    {key: 3, icon: 'trophy', content: 'Science as a Human Endeavour'},
    {key: 4, icon: 'leaf', content: 'Earth and Space Sciences'},
    {key: 5, icon: 'paper plane', content: 'Physical Sciences'},
]

export default class OutreachView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quotes,
            quote_num: 0,
            quote_length: 10000,
            visible: true,
        }
    }

    tick() {
        this.setState({visible: false});
        setTimeout(() => {
            this.setState(prevState => ({
                quote_num: (prevState.quote_num + 1) % quotes.length
            }));
            this.setState({visible: true});
        }, 600);
      }

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), this.state.quote_length);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const quote = this.state.quotes[this.state.quote_num];
        return (
            <Container fluid>
                <Container text textAlign='center' style={{marginTop: '6em'}}>       
                    <Header as="h1" style={{paddingBottom: '1em'}} className='header'>
                        What We Offer
                    </Header>
                    <p>Our Outreach Program encourages students to engage in creative problem solving and teamwork, which are vital skills for the modern world.
                    Our customised rocket program is ideal for school incursions, community groups. It's a great opportunity to learn about real-world science and apply theoretical concepts to the real-world.
                    Students will design, test and build bottle rockets which will be launched at the conclusion of the workshop.</p>
                </Container>
                <Container style={{marginTop: '4em'}}>
                    <Grid container columns={2} centered stackable>
                        <List.Header as='h2' content='Learning Outcomes' />
                        <List 
                            relaxed='very' 
                            animated 
                            selection
                            horizontal
                            size='huge' 
                            items={outcomes}
                        />
                        <Container style={{marginTop: '4em'}}>
                            {/*<Header as='h2' horizontal content="Feedback We've Received" textAlign='center' />
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
                            </Grid>*/}
                            <Container raised={false} padded='very' attached='bottom' basic>
                                <Transition animation='fade' visible={this.state.visible}>
                                    <div>
                                        <Quote author={quote.author} meta={quote.meta} quote={quote.text} />
                                    </div>
                                </Transition>
                            {/*<Comment.Group items={this.state.quotes.slice(this.state.quote_num, this.state.quote_num)} size='huge' />*/}
                                    
                            </Container>
                        </Container>
                    </Grid>
                    {/*<Container text style={{paddingBottom: '1em', paddingTop: '3em'}}>
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
                    </Container>*/}
                </Container>
            </Container>
        )
    }
}