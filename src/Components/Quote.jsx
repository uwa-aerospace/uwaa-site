import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react'

export default class Quote extends Component {

    render() {
        return (
            <Container text style={{fontStyle: 'oblique'}}>
                <Header as='h2' style={{opacity: 0.4}}>{this.props.quote}</Header>
                <Header as='h3' style={{float: 'right', opacity: 0.8}}>{this.props.author} - <small>{this.props.meta}</small></Header>
            </Container>
        )
    }
}