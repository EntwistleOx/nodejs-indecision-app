import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearsSelectedOption}
        contentLabel={props.selectedOption}
    >
        <h3>Selected Options</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearsSelectedOption }>Okay</button>
    </Modal>
)

export default OptionModal