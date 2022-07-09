import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import sweat from '../assets/db/Sweat';
import ShareButton from './ShareButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

export default function ResultModal({ open, handleClose, won, emoji }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                {won && <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />}
                <Typography id="modal-modal-title" variant="h8" component="h2">
                    {`You ${won ? "got" : "missed"} it!`}
                </Typography>

                <br />
                <Typography>
                    Today’s padam is <strong>{sweat}</strong>. Thanks for playing - come back tomorrow for another Padamdle!
                </Typography>
                <br />
                <ShareButton won={won} emoji={emoji} />
            </Box>
        </Modal >
    )
}
