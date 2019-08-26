import React, {Component} from 'react';
import { Container, Image, Grid, Header, Divider, Label, List, Segment } from 'semantic-ui-react';
import CoverItem from '../Components/CoverItem';


class RocketDetailComponent extends Component {
    render() {
        const {src, rocketName, labels, content, statistics, refer} = this.props;
        return (
            <>
                <Grid.Column>
                    <Image src={src} centered circular size='medium' />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h1'>
                        {rocketName}
                        <Label.Group style={{float: 'right'}}>
                            {labels.map((l) => (
                                <Label color={l.color}>{l.label}</Label>
                            ))}
                        </Label.Group>
                    </Header>
                    {content}
                    <List 
                        animated 
                        selection 
                        size='medium' 
                        horizontal
                        verticalAlign='bottom' 
                        style={{marginTop: '3em'}}>
                        <List.Header content='Statistics' as='h3' />
                        <List.Item><List.Icon name='tachometer alternate' /> Max speed: {statistics.maxSpeed}m/s</List.Item>
                        <List.Item><List.Icon name='stopwatch'/> Max acceleration: {statistics.maxAccel}m/s<sup>2</sup></List.Item>
                        <List.Item><List.Icon name='weight' /> Dry mass: {statistics.weight}kg</List.Item>
                        <List.Item><List.Icon name='arrows alternate horizontal' /> Length: {statistics.length}cm</List.Item>
                        <List.Item><List.Icon name='check circle' /> Launches: {statistics.launches}</List.Item>
                    </List>
                </Grid.Column>
            </>
        )
    }
}

export default class Launchpad extends Component {
    constructor(props) {
        super(props);
        this.cupid = React.createRef();
        this.jeff = React.createRef();
        this.finley = React.createRef();
        this.qad = React.createRef();
        this.mapping = {
            'ariel': this.cupid,
            'jeff': this.jeff,
            'finley': this.finley,
            'qad': this.qad,
        }
    }

    componentDidMount () {
        const handle = this.props.match.params.ref;
        console.log(handle)
        if (handle != undefined && handle != null) {
            //this.mapping[handle].current.scrollIntoView({ behavior: 'smooth' });
            const ref = this.mapping[handle]
            console.log(ref.current.offsetTop)
            ref.current.scrollIntoView({ behavior: 'smooth' });
            //window.scrollTo(0, ref.current.offsetBottom)
        }
    }

    render() {
        const padding = '3em'
        return (
            <Container fluid id='rocket-container'>
                <Segment 
                    inverted
                    textAlign='center'
                    style={{ minHeight: 200, padding: '1em 0em' }}
                    vertical
                    secondary>
                    <Container text>
                        <Header
                        as='h1'
                        content='Rockets'
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
                <Container>
                <div ref={this.cupid}></div>
                <Grid 
                    container 
                    style={{marginTop: '6em', marginBottom: '3em'}} 
                    columns={2} 
                    verticalAlign='middle'
                    stackable
                    relaxed='very'>
                    <Grid.Row style={{paddingTop: padding, paddingBottom: padding}}>
                        <RocketDetailComponent 
                            refer={this.cupid}
                            src='/media/rockets/cupidsarrow.jpg'
                            rocketName="Cupid's Arrow"
                            labels={
                                [{color: 'green', label:'0.35km'}, {color: 'green', label: '1.31km'}]} 
                            content={
                                <>
                                    <p>‘Cupid's Arrow’ was the first rocket to be launched by the team on the 28th of July, 2018. The rocket served to educate our members on the general principles of rocketry and how various parts of the system functioned. It was assembled from a kit and was used to attain Level 1 and Level 2 certifications on the same day.</p>
                                </>
                                }
                            statistics={{maxSpeed: '184', maxAccel: 73, weight: '1.44', length: '148', launches:3}}
                            />
                    </Grid.Row>
                    <Divider clearing section/>
                    <div ref={this.jeff}></div>
                    <Grid.Row style={{paddingTop: padding, paddingBottom: padding}}>
                        <RocketDetailComponent 
                            src='/media/rockets/jeff.png'
                            rocketName='Jeff' 
                            labels={
                                [{color: 'green', label:'1.32km'}, {color: 'yellow', label: '2.86km'}]} 
                            content={
                                <>
                                    <p>Jeff is the first prototype rocket to be designed and built by UWA Aerospace. It resembled the rocket that would later be built to compete in the inaugural 2019 Australian Universities Rocket Competition (AURC). Jeff's systems underwent extensive testing prior to its final assembly and debut launch on the 25th of August, 2018.</p>
                                    <p>
                                        A second launch was attempted on the 6th of October on a modified version of Jeff. The purpose of this launch was to closely emulate the flight profile of the final competition rocket and to ensure the structural integrity of the fuselage. During descent, however, the recovery system malfunctioned resulting in a rough landing, weakening the fuselage.
                                    </p>
                                </>
                                }
                            statistics={{maxSpeed: '288', maxAccel: 230, weight: '6.16', length: '169', launches: 2}}
                            />
                    </Grid.Row>
                    <Divider clearing section />
                    <div ref={this.finley}></div>
                    <Grid.Row style={{paddingTop: padding, paddingBottom: padding}}>
                        <RocketDetailComponent 
                            src='/media/rockets/finley.jpg'
                            rocketName='Finley' 
                            labels={
                                [{color: 'yellow', label:'2.3km'}, {color: 'green', label: '2.94km'}]} 
                            content={
                                <>
                                    <p>
                                        Finley is the result of all the lessons learnt over the 2018 launch season and was the rocket to be submitted to compete in the AURC.
                                    </p>
                                    <p>
                                        Its initial test launch on the range in Queensland was a failure due to a stability flaw resulting in the near total loss of the flight vehicle, but with determination, our team managed to modify Finley to be flightworthy in less than 24 hours to continue to compete in the AURC renamed as Finley Reborn.
                                    </p>
                                </>
                                }
                            statistics={{maxSpeed: '197', maxAccel: 95.7, weight: '8.79', length: '200', launches: 2}}
                            />
                    </Grid.Row>
                    <Divider clearing section />
                    <div ref={this.qad}></div>
                    <Grid.Row style={{paddingTop: padding, paddingBottom: padding}}>
                        <RocketDetailComponent 
                            src='/media/rockets/QAD.jpg'
                            rocketName='QAD' 
                            labels={
                                [{color: 'green', label: '2.94km'}]} 
                            content={
                                <>
                                    <p>
                                        A “Quick and Dirty” (QAD) launch to test out our new team and experiment with an improved fuselage and system layout. This was motivated by the need to simplify the current recovery system design and proved to be a success as it soared into the sky for the first time on the 4th of August.
                                    </p>
                                </>
                                }
                            statistics={{maxSpeed: '178', maxAccel: 70, weight: '1.40', length: '89', launches: 1}}
                            />
                    </Grid.Row>
                </Grid>
                </Container>
            </Container>
        );
    }
}