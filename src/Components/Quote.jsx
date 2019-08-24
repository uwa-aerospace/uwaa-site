import React, {Component} from 'react';
import { Container } from 'semantic-ui-react'

export default class Quote extends Component {

    render() {
        return (
            <Container text>
                <h2 style={{fontStyle: 'oblique'}}>{this.props.quote}</h2>
                <h3 style={{float: 'right'}}>{this.props.author} - <small>{this.props.meta}</small></h3>
            </Container>
        )
    }
}