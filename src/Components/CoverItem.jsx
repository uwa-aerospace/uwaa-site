import React, {Component} from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    GridColumn,
    Responsive} from 'semantic-ui-react';
import { Link } from "react-router-dom";


class SummaryText extends Component {
    render() {
        var buttonText = this.props.buttonText == undefined ? "Read More" : this.props.buttonText;

        return (
            <Container fluid>
                <Header as="h2">
                    {this.props.title}
                </Header>
                {this.props.content}
                {this.props.moreUrl ? 
                    (<Button as={Link} to={this.props.moreUrl} content={buttonText} floated="right" />) : (<></>)
                }
            </Container>
        )
    }
}

const CoverContent = ({props, inverted}) => (
    <>
        <Grid container centered columns={2} fluid stackable verticalAlign='middle'>
            <GridColumn>
                {!inverted ? 
                    (<Image rounded fluid spaced={"right"} verticalAlign={"middle"} src={props.contentUrl} />) :
                    (<SummaryText title={props.title} content={props.content} buttonText={props.buttonText} moreUrl={props.moreUrl} />)
                }
            </GridColumn>
            <GridColumn>
                {!inverted ? 
                    (<SummaryText title={props.title} content={props.content} buttonText={props.buttonText} moreUrl={props.moreUrl} />) :
                    (<Image rounded fluid spaced={"left"} verticalAlign={"middle"} src={props.contentUrl} />)
                }
            </GridColumn>
        </Grid>
    </>
)

export default class CoverItem extends Component {
    render() {
        return (
            <>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <CoverContent props={this.props} inverted={this.props.inverted} />
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <CoverContent props={this.props} inverted={false} />
                </Responsive>
            </>
        )
    }
}
