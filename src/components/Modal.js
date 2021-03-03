import React from 'react'
import RModal from 'react-modal'

import '../css/modal.css'

export const Modal = ({ isOpen, onRequestClose, children, }) =>
  <RModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel='Modal'
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close',
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close',
    }}
    shouldCloseOnOverlayClick
    closeTimeoutMS={300}
  >
    {children}
  </RModal>

if (typeof(window) !== 'undefined') {
  RModal.setAppElement('body')
}
