import React, {Component} from 'react';
import { Button, Header, Image, Grid, GridRow, Container, List, Icon, Segment, GridColumn, Transition, Responsive} from 'semantic-ui-react';
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
            <Container fluid id='outreach-container'>
                <Segment 
                    inverted
                    textAlign='center'
                    style={{ minHeight: 200, padding: '1em 0em' }}
                    vertical
                    secondary>
                    <Container text>
                        <Header
                        as='h1'
                        content='Outreach'
                        inverted
                        style={{
                            fontSize:'3.5em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em',
                        }}
                        />
                    </Container>
                </Segment>
                <Container text textAlign='center' style={{marginTop: '6em'}}>       
                    <Header as="h1" style={{paddingBottom: '1em'}} className='header'>
                        What We Offer
                    </Header>
                    <p>Our Outreach Program encourages students to engage in creative problem solving and teamwork, which are vital skills for the modern world.
                    Our customised rocket program is ideal for school incursions, community groups. It's a great opportunity to learn about real-world science and apply theoretical concepts to the real-world.
                    Students will design, test and build bottle rockets which will be launched at the conclusion of the workshop.</p>
                </Container>
                <Container style={{marginTop: '6em'}}>
                    <Grid container columns={2} centered stackable>
                        <List.Header as='h2' content='Learning Outcomes' />
                        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                            <List 
                                relaxed='very' 
                                horizontal
                                size='huge' 
                                items={outcomes}
                            />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile}>
                            <List 
                                relaxed='very'
                                size='huge' 
                                items={outcomes}
                            />
                        </Responsive>
                        <Container style={{marginTop: '8em', marginBottom: '8em', minHeight: '10em'}}>
                            <Container padded='very'>
                                <Transition animation='fade' visible={this.state.visible}>
                                    <div>
                                        <Quote author={quote.author} meta={quote.meta} quote={quote.text} />
                                    </div>
                                </Transition>
                            {/*<Comment.Group items={this.state.quotes.slice(this.state.quote_num, this.state.quote_num)} size='huge' />*/}
                            </Container>
                        </Container>
                    </Grid>
                </Container>
                {/*<Segment tertiary attached='bottom' basic textAlign='center' padded='very' vertical>
                    <Header as='h2' content='For enquiries you can contact us' />
                    <Button href='mailto:hello@uwaaerospace.org' icon primary size='huge'><Icon name='mail outline' /> Here</Button>
                    </Segment>*/}
            </Container>
        )
    }
}