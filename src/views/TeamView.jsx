import React, { Component } from 'react';

import {
    Card,
    Container,
    Step,
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
                <GridRow style={{marginTop: '6em'}}>
                    <Container text>
                        <Header as="h1" horizontal style={{paddingBottom: '1em'}} className='header'>
                            Team Members
                        </Header>
                        <p>UWA Aerospace is a multidisciplinary team of undergraduate and postgraduate students studying at the University of Western Australia. 
                        Our team is primarily comprised of mechanical, software and electrical engineers.</p>
                    </Container> 
                </GridRow>
                <GridRow centered style={{marginBottom: '2em'}}>
                    <GridColumn width={14}>
                        <Card.Group centered itemsPerRow={4} doubling>
                            <Card
                            image={<Image fluid src={'/media/team/James.png'}/>}
                            header={<Card.Header>James Dingley <span style={{float:'right'}}><Icon size='small' corner name='chart line'/></span></Card.Header>}
                            meta='Project Manager'
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
                            meta='Recovery Lead'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Sam.png'}/>}
                            header={<Card.Header>Samuel Heath</Card.Header>}
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/team/Anthony.png'}/>}
                            header={<Card.Header>Anthony Poletto</Card.Header>}
                            meta='Aerostructures & Safety Officer'
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
                            image={<Image fluid src={'/media/team/Akash.png'}/>}
                            header='Conrad Schmidt'
                            meta='Aerostructures & Finance'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Peylin Ng'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Andrew Munt'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Stephan'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Toby Dingey'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='James Oakey'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Calegero Martelli'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Vlad Pavkov'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='William Siebert'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo.png'}/>}
                            header='Thomas Wilkinson'
                            meta='Aerostructures'
                            raised
                            />
                        </Card.Group>
                    </GridColumn>
                </GridRow>
                <GridRow style={{marginBottom: '5em'}}>
                    <Header as='h1' content='Application Process' />
                    <Header as='h4'>
                        We encourage students from all fields of study, not just engineering! However, only UWA students can register interest for joining the team.
                    </Header>
                    <Step.Group fluid size='large' widths={2} ordered stackable='tablet'>
                            <Step>
                                <Step.Title>Fill Out Our Form</Step.Title>
                                <Step.Description>UWA Students can access the application form <a href="https://forms.gle/XBN4GzdspLjGJt1p7">here</a>.</Step.Description>
                            </Step>
                            <Step>
                                <Step.Title>We'll Want to Chat With You!</Step.Title>
                                <Step.Description>
                                    <p>We'll get in touch within 7 days to arrange a time to meet with you.</p>                                
                                </Step.Description>
                            </Step>
                    </Step.Group>
                </GridRow>
            </Grid>
        )
    }
}