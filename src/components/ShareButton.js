import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function ShareButton({ emoji, won }) {

    const [name, setName] = useState("Share")
    let blackSquares = "";
    for (let i = 0; i < (3 - (emoji.length / 2)); i++) {
        blackSquares += "⬛"
    };

    return (
        <Button
            onClick={() => {
                navigator.clipboard.writeText(`padamdle #1 ${emoji + blackSquares}`)
                setName("ʕ•́ᴥ•̀ʔっ📋copied")
            }}
            variant="contained"
            color={won ? "success" : "warning"}
            fullWidth
        >{name}</Button>
    )
}
