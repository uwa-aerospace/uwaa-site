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
    Icon,
    Rail,
    Segment,} from 'semantic-ui-react';

const expertises = [
    {key: 1, icon: 'chart line', header: 'Management', description: 'We help ensure the team meets its deadlines, on-time and on-budget.'},
    {key: 2, icon: 'rocket', header: 'Aerostructures', description:'We design, simulate, and manufacture rocket fuselages with Carbon Fiber and Fibreglass'},
    {key: 3, icon: 'microchip', header: 'Avionics', description:'We build custom flight loggers and computers to track our rockets and record key statistics about their performance.'},
    {key: 4, icon: 'band aid', header: 'Recovery', description: 'We build custom parachutes for our rockets to ensure their successful recovery after breaking the sound barrier.'},
]

export default class TeamView extends Component {
    render() {
        return (
            <Grid centered container stackable relaxed='very'>
                <GridRow style={{marginTop: '6em'}}>
                    <Container text>
                        <Header as="h1" style={{paddingBottom: '1em'}} className='header'>
                            About Us
                        </Header>
                        <p>UWA Aerospace is a multidisciplinary team of undergraduate and postgraduate students studying at the University of Western Australia. 
                        Our team is primarily comprised of mechanical, software and electrical engineers.</p>
                    </Container> 
                </GridRow>
                
                <Header as='h2' content='Areas of Expertise' />
                <GridRow centered columns='4'>
                    {expertises.map((item) => 
                    <Grid.Column key={item.key} textAlign='center'>
                        <Icon circular bordered name={item.icon} size='big'/>
                        <Header content={item.header} as='h3'/>
                        <p>{item.description}</p>
                    </Grid.Column>
                    )}
                </GridRow>
                
                <Header as="h1" style={{paddingBottom: '1em'}} className='header'>
                    Team Members
                </Header>
                <GridRow centered style={{marginBottom: '2em'}}>
                    <GridColumn width={14}>
                        <Card.Group centered itemsPerRow={4} doubling>
                            <Card
                            image={<Image fluid src={'/media/team/James.png'} />}
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
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Peylin Ng'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Andrew Munt'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Stephan'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Toby Dingey'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='James Oakey'
                            meta='Avionics'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Calegero Martelli'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Vlad Pavkov'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='William Siebert'
                            meta='Aerostructures'
                            raised
                            />
                            <Card
                            image={<Image fluid src={'/media/logo-old.png'}/>}
                            header='Thomas Wilkinson'
                            meta='Aerostructures'
                            raised
                            />
                        </Card.Group>
                    </GridColumn>
                </GridRow>
                <Rail position='left' size='massive'>
                    <Segment basic padded='very'>
                        <Container fluid>
                        <Header as='h1' content='Application Process' />
                        <Header as='h4'>
                            We encourage students from all fields of study, not just engineering! However, only UWA students can register interest for joining the team.
                        </Header>
                        <Step.Group fluid size='large' widths={2} ordered stackable='tablet' vertical>
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
                        </Container>
                    </Segment>
                </Rail>
            </Grid>
        )
    }
}