import React, {Component} from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react'

const ListItem = ({header, icon, description}) => (
    <Grid.Column textAlign='center'>
        <Icon size='big' name={icon} />
        <Header as='h3' content={header} />
        <p>{description}</p>
    </Grid.Column>
)

export default class GridList extends Component {
    render() {
        return (
            <Grid centered columns={this.props.columns} stackable>
                {this.props.items.map((item) => (
                    <ListItem 
                        header={item.header}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </Grid>
        )
    }

}