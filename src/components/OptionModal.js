import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearsSelectedOption}
        contentLabel={props.selectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Options</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearsSelectedOption }>Okay</button>
    </Modal>
)

export default OptionModal