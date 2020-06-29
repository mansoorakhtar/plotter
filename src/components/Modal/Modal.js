import React from 'react';
import './Modal.css';

const modal = (props) => {

    let errorDetails = null;
    if (props.inValidLines.length) {
        errorDetails = <p>Please check following line { props.inValidLines.length === 1 ? 'number' : 'numbers' }  { props.inValidLines.join(",") }</p>
    }

    return (
        <div className="custom-modal">
            <div className="container">
                <div className="body">
                    <p>Plotting arguments is not well formed.</p>
                    {errorDetails}
                    <div className="form-group">
                        <div className="col-sm-6 offset-sm-3">
                            <button className="btn btn-primary btn-block" onClick={props.onCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )

}

export default modal;