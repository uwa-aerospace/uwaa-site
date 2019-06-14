import React, {Component} from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Card,
    Image,
    List,
    Segment,
    GridRow,
    GridColumn,
    Placeholder,
    PlaceholderImage,
    PlaceholderParagraph} from 'semantic-ui-react';


export default class CoverItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inverted: false,
            title: "",
            contentUrl: "",
        }
    }

    render() {
        this.state = this.props;
        return (
            <Grid container centered columns={2} fluid stackable>
                <GridColumn>
                    <Image rounded fluid spaced={"right"} verticalAlign={"middle"} src={this.props.contentUrl} />
                </GridColumn>
                <GridColumn>
                    <Header as="h2">
                        {this.props.title}
                    </Header>
                    <Placeholder fluid>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                    <Button content="Read More" basic floated="right" />
                </GridColumn>
            </Grid>
        )
    }
}
