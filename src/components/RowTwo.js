import React, { Component } from 'react';
import PicCOne from './PicCOne'
import PicCTwo from './PicCTwo'

class RowTwo extends Component {
    render() {
        return (
            <div>
                ***

                <PicCOne></PicCOne>
                <PicCTwo></PicCTwo>
                ***
            </div>
        );

    }
}
export default RowTwo;