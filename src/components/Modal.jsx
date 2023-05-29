// import React from 'react';
import styled from 'styled-components'

const ModalStyle = styled.div`
    background-color: red;
`

const Modal = ({info}) => {
    return (
        <ModalStyle>
            {info}
        </ModalStyle>
    );
}

export default Modal;
