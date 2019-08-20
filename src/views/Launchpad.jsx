import React, {Component} from 'react';
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react';
import CoverItem from '../Components/CoverItem';

export default class Launchpad extends Component {

    render() {
        return (
            <div>
                <Grid container style={{marginTop: '6em'}}>
                    <Grid.Row>
                        <Segment basic>
                            <CoverItem 
                                title={"Ariel (Cupid's Arrow)"} 
                                contentUrl={"/media/team_ariel.jpg"} 
                                content={
                                    <>
                                    <p>Ariel was the first rocket to be launched by the team on the 28th of July, 2018. The rocket served to educate our members on the general principles of rocketry and how various structural parts of the rocket were assembled as it was assembled from a kit.</p><p>The rocket was used to attain Level 1 and Level 2 certifications on the same day, attaining altitudes of 300m and 1.13km. To date, the rocket has launched thrice successfully and is often used a small payload demonstrator.</p>
                                    </>
                                } 
                                inverted={true} />
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        <Segment basic>
                            <CoverItem 
                                title={"Jeff"} 
                                contentUrl={"/media/25th_August_Launch.jpg"} 
                                inverted={false}
                                content={
                                    <>
                                    <p>'Jeff' is the first prototype rocket to be designed and built by UWA Aerospace. It served to resemble the rocket that would later be built to compete in the Australian Universities Rocket Competition. Jeff’s systems underwent extensive testing prior to its final assembly and debut launch on the 25th of August. The first flight was successful with Jeff soaring to a height of 1.32km.</p>
                                    <p>
                                        A second launch was attempted on the 6th of October on a modified version of Jeff which saw the rocket reach an apogee of 2.94km. The purpose of this more intense launch was to closely emulate the launch profile of the final competition rocket and to ensure the structural integrity of the fuselage. During the descent phase however, the recovery system malfunctioned resulting in a harder than expected landing which weakened the fuselage, and retiring the rocket from flight.
                                    </p>
                                    </>
                                } />
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        <Segment basic>
                            <CoverItem 
                                title={"Finley"} 
                                contentUrl={"/media/aurc/success.jpg"} 
                                content={
                                    <>
                                    <p>
                                        Finley is the result of all the lessons learnt over the 2018 launch season and was the final rocket which would be submitted to compete in the AURC. Countless hours and late nights went into the creation of Finley which would launch twice at the AURC. 
                                    </p>
                                    <p>
                                        An initial test launch on the range in Queensland was a failure however as a stability flaw resulted in the near total loss of the flight vehicle, but with determination, our team managed to modify Finley to be flightworthy in less than 24 hours to continue to compete in the AURC. Finley flew to a height of 2.83km at the AURC placing the team fifth in its category. 
                                    </p>
                                    </>
                                }
                                inverted={true} 
                                moreUrl='/aurc2018'
                            />
                        </Segment>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}