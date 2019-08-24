import React, {Component} from 'react';

import {Image, Modal, Button, Embed, Transition} from 'semantic-ui-react';


export default class Gallery extends Component {

    state = {
        image_id: 1,
        images: [
            {type: 'image', src: './media/aurc/banner.jpg'},
            {type: 'image', src: './media/aurc/aurc2018_teamphoto.jpg'},
            {type: 'image', src: './media/aurc/success.jpg'},
            {type: 'image', src: './media/ScotchOutreach/launch3.jpg'},
            //{type: 'video', src: './media/slowmo.mp4'}
        ],
        visible: true,
    }

    click = (event, data) => {
        this.setState({visible: false});
        setTimeout(() => {
            this.setState({image_id: data.id, visible: true});
        }, 500);
    }

    render() {
        const {image_id} = this.state;
        console.log(this.state.images[this.state.image_id])
        return (
            <>
                <Modal.Content>
                    <Transition animation='fade' visible={this.state.visible}>
                        {this.state.images[image_id].type == 'image' ? (
                            <Image fluid src={this.state.images[image_id].src} />
                        ) : (
                            <Embed defaultActive content={<video style={{width: '100%', height: '100%'}} controls><source src={this.state.images[image_id].src} type="video/mp4"></source></video>} />
                        )}
                    </Transition>
                </Modal.Content>
                <Modal.Actions>
                    <Button.Group basic>
                            {this.state.images.map((image, id) => (
                                <Button id={id} onClick={(event, data) => this.click(event, data)} basic compact active={id == image_id}>
                                    {image.type == 'image' ? (
                                        <Image size='tiny' src={image.src} />
                                    ) : (
                                        <Embed placeholder='' />
                                    )}   
                                </Button>   
                            ))}
                    </Button.Group>
                </Modal.Actions>
            </>
        )
    }
}