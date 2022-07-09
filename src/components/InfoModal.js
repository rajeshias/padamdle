import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "left"
};

export default function InfoModal({ open, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>

                <Typography variant="h5" component="div" gutterBottom>About Padamdle:</Typography>
                <Typography >
                    A game made for Tamil Cinephiles.
                </Typography>
                <br />
                <Typography >
                    Inspired by recenty trending wordle and it's other spinoffs
                </Typography>
                <br />
                <Typography >
                    <strong>Rules are simple: </strong>Everyday, given 3 Frames from a single Tamil movie. You have to guess the name of the movie from the dropdown
                </Typography>


                <br />
                <br />
                <br />
                <Typography variant="caption" display="block" gutterBottom>
                    contact: <a href = "mailto: rajeshk30051@gmail.com">rajesh</a>
                </Typography>
            </Box>
        </Modal >
    )
}


// Tamil film lovers kaaga senja website dhan idhu. Idha senju mudikra mudikka inspire pannadhu, vera edhuvum illa,
// recent ah trend aana wordle game and adhoda spinoffs dhan.

// </Typography>
// <Typography variant="body1" gutterBottom>
// Oru oru naalum oru movie neenga kudkra frame la irundhu guess pannalam,
// Indha project ku pakka balama irundha namma Google kum, IMDB kum nandrigal. Indha website ah ads karumam illama run pandradhuku,
// neenga dhan enakku support seyyanum
// Copyright: Idhula use panna film content oda rights andhandha owners ku dhan poi serum.