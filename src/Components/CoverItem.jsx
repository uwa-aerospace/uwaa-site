import React, {Component} from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    GridColumn,} from 'semantic-ui-react';


class SummaryText extends Component {
    render() {
        var buttonText = this.props.buttonText == undefined ? "Read More" : this.props.buttonText;

        return (
            <Container fluid>
                <Header as="h2">
                    {this.props.title}
                </Header>
                {this.props.content}
                <Button content={buttonText} basic floated="right" />
            </Container>
        )
    }
}


export default class CoverItem extends Component {
    render() {
        return (
            <Grid container centered columns={2} fluid stackable>
                <GridColumn>
                    {!this.props.inverted ? 
                        (<Image rounded fluid spaced={"right"} verticalAlign={"middle"} src={this.props.contentUrl} />) :
                        (<SummaryText title={this.props.title} content={this.props.content} buttonText={this.props.buttonText} />)
                    }
                </GridColumn>
                <GridColumn>
                    {!this.props.inverted ? 
                        (<SummaryText title={this.props.title} content={this.props.content} buttonText={this.props.buttonText} />) :
                        (<Image rounded fluid spaced={"left"} verticalAlign={"middle"} src={this.props.contentUrl} />)
                    }
                </GridColumn>
            </Grid>
        )
    }
}
