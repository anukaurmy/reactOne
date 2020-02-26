import React, { Component } from 'react';




class Modal extends Component {
    render() {
        const btmFlot={
            float:'left'
        }

        const picSize={
            width:'100px'
        }
        return (
            <div>
                <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

               
                <div class="modal-header">

                    <table>
                        <tr>
                            <td><img src="images/W-B.jpg" alt="Avatar" style={picSize}/> </td>
                            <td>
                                <div>
                                <h2 class="modal-title">Modal Heading</h2>
                                </div>
                                <div>
                                    <p>1d</p>
                                </div>
                            
                            </td>
                            <td class="ex1"><button type="button" class="btn btn-success">Follow</button></td>
                        </tr>
                        <tr>
                            <td>Modal body..</td>
                        </tr>
                    </table>

                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                </div>
                
                <div class="modal-body">


                    <button type="button" class="btn btn-light" style={btmFlot}>Report</button>
                </div>

            </div>
        </div>
    </div>

                
                    
                
            </div>
                );
            }
        }
        
export default Modal;