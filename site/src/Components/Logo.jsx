import React, {Component} from 'react';
import { Container, Image } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';


class Logo extends Component {
    state={}

    render() {
        return(
            <Image centered size='medium' href='http://www.caswa.com' target='_blank' src={this.props.image} />
        );
    }
}

export default Logo;