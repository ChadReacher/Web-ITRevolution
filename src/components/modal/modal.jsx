import React from 'react'
import { Modal, Box } from '@mui/material'

const ModalComponent = ({ children, isOpen, handleClose }) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                backgroundColor: '#1782fc',
                borderRadius: '20px'
            }}>
                {children}
            </Box>
        </Modal>
    )
}

export default ModalComponent