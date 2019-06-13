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
    render() {
        return (
            <Grid container centered columns={2} fluid>
                <GridColumn>
                    <Placeholder fluid style={{ height: 200, width: 400 }} centered>
                        <PlaceholderImage />
                    </Placeholder>
                </GridColumn>
                <GridColumn>
                    <Card>

                    </Card>
                    <Placeholder fluid>
                        <Header as="h3">
                            {this.props.title}
                        </Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Button content="Read More" basic floated="right" />
                    </Placeholder>
                </GridColumn>
            </Grid>
        )
    }
}
