import React, {Component} from 'react';
import { Segment, Header, Item, Grid, GridRow, Container, ListItem, ItemGroup} from 'semantic-ui-react';
import { List } from 'antd';

export default class OutreachView extends Component {
    render() {
        return (
            <Grid centered container stackable>
                <GridRow style={{marginTop: '4em'}}>
                    <Container text>       
                        <Header as="h1" horizontal style={{paddingBottom: '1em'}} className='header'>
                            What we Offer
                        </Header>
                        <List>
                            <List.Item>
                                Creative problem solving and teamwork are vital for the modern world. Practical application of these skills is a core part of UWA Aerospace.
                            </List.Item>
                            <List.Item>
                            Our customised rocket program is ideal for school incursions, community groups and corporate teams. It's a great opportunity to learn about real-world science and apply theoretical concepts to the real-world. 
                            </List.Item>
                            <List.Item>
                            Students will design, test and build bottle rockets which will be launched (safely) at the conclusion of the workshop.
                            </List.Item>
                        </List>
                        <Header as='h2' content='Covering Key Learning Outcomes Such As:' />
                        <List>
                        <List.Item>
                            Science Understanding
                            </List.Item>
                            <List.Item>
                             Science Inquiry Skills
                            </List.Item>
                            <List.Item>    
                            Science as a Human Endeavour
                            </List.Item>
                            <List.Item>
                                Earth and Space Sciences
                            </List.Item>
                            <List.Item>
                                Physical Sciences
                            </List.Item>
                        </List>
                        <Header>
                            Requirements
                        </Header>
                        <List>
                            <List.Item>Sports Oval</List.Item>
                            <List.Item>Supportive Teachers</List.Item>
                            <List.Item>Indoor Classroom for Construction</List.Item>
                            <List.Item>Price</List.Item>
                        </List>
                    </Container> 
                </GridRow>
                <Container>
                    <Header as='h2' content='Pictures' />
                </Container>
                <GridRow style={{marginBottom: '2em'}}>
                        <Header as='h2' horizontal content="Feedback from students" />
                        <Item.Group relaxed='very' divided={false}>
                            <Item header='Karen' meta='Year 4' description={<p>It was really fun to make our own models because we got to work as a team with our friends</p>} />
                            <Item header='Cherise' meta='Year 5' description='I think the visit was very interesting'></Item>
                        </Item.Group>
                        Feedback from students (Scrolling quotes, on conveyor thing)
                        “” Karen, Year 4
                        “I think the visit was very interesting” Cherise, Year 5
                        “I liked seeing the rockets that the UWA team made” Imogen, Year 5
                        “It was o̶k̶  awesome we got to work as a team to learn how rockets actually work and fly” Riley, Year 5
                        “It was an amazing time” Lincon, Year 5
                        “At the end of the day, I changed my mind about what I want to be when I’m older!” Seth, Year 5
                        “I think the incursion was really cool and would like to do it again” Tom, Year 5
                        “I think they should come every year” Sierra, Year 4
                        “It was so cool” Scarlett, Year 6
                        “It was awesome, these are the people who should work for NASA" Nina, Year 6
                        “The best part was learning about rockets and seeing how they are made” Taj, Year 4
                        “I liked the visit a lot” Campbell, Year 4
                        “I liked making mistakes and trying to fix them” Lily, Year 4
                </GridRow>
            </Grid>
        )
    }
}