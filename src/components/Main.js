import React, { Component } from 'react';
import Text from './Text';
import Container from './Container';
import '../assets/css/s.css';
import '../assets/css/lightbox.min.css';
import Modal from './Modal';

class Main extends Component {
    render() {
        return (
            <div>
                
                <Text></Text>
                <Container></Container>
                <Modal></Modal>

            </div>
        );
    }
}



export default Main;
