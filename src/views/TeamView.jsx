import React, { Component } from 'react';

import {
    Card,
    Container,
    Divider,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
    Icon,} from 'semantic-ui-react';

export default class TeamView extends Component {
    render() {
        return (
            <Grid centered container stackable>
                <GridRow style={{marginTop: '4em'}}>
                    <Container text>       
                    <Header as="h1" horizontal style={{paddingBottom: '1em'}} className='header'>
                        Team Members
                    </Header>
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
                            image={<Image fluid src={'/media/team/Anthony.png'}/>}
                            header={<Card.Header>Anthony Poletto <span style={{float:'right'}}><Icon size='small' name='chart line'/></span></Card.Header>}
                            meta='Co-Project Manager & Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Talisha.png'}/>}
                            header={<Card.Header>Talisha Finn <span style={{float:'right'}}><Icon size='small' name='microchip'/></span></Card.Header>}
                            meta='Avionics Lead'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Joel.png'}/>}
                            header={<Card.Header>Joel Tapper <span style={{float:'right'}}><Icon size='small' name='rocket'/></span></Card.Header>}
                            meta={<Card.Meta> Aerostructures Lead</Card.Meta>}
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Rowan.png'}/>}
                            header={<Card.Header>Rowan Sobey <span style={{float:'right'}}><Icon size='small' name='band aid'/></span></Card.Header>}
                            meta='Sponsorships & Recovery Lead'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Sachio.png'}/>}
                            header={<Card.Header>Sachio Ingrilli  <span style={{float:'right'}}><Icon size='small' name='cloud'/></span></Card.Header>}
                            meta='Aerostructures & Chief Weather Specialist'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Scott.png'}/>}
                            header='Scott Patterson'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Jamie.png'}/>}
                            header='Jamie Nella'
                            meta='Recovery & Flight Analysis'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/James.png'}/>}
                            header='James Dingley'
                            meta='Project Manager'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Steffen.png'}/>}
                            header='Steffen Remvik'
                            meta='Recovery & Tallest Member'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Akash.png'}/>}
                            header='Vihanga Akash Silva'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Harrison Hill'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Peylin Ng'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Andrew Munt'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Stephan '
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Harrison Hill'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Harrison Hill'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Stephan '
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Harrison Hill'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Harry.png'}/>}
                            header='Harrison Hill'
                            meta='Aerostructures'
                            raised
                            />
                        </Card.Group>
                    </GridColumn>
                </GridRow>
            </Grid>
        )
    }
}