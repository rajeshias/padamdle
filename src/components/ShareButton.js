import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

var days = moment().diff("2022-07-09", "days");
const no = `#${days}`

export default function ShareButton({ emoji, won }) {

    const [name, setName] = useState("Share")
    const [result, setResult] = useState("")

    useEffect(() => {
        if (localStorage.getItem("padamdle-result") !== null) {
            setResult(localStorage.getItem("padamdle-result"))
        } else {
            let blackSquares = "";
            for (let i = 0; i < (3 - (emoji.length / 2)); i++) {
                blackSquares += "⬛"
            };
            setResult(`padamdle #1 ${emoji + blackSquares}`)
            localStorage.setItem("padamdle-result", `padamdle ${no} ${emoji + blackSquares}`)
        }
    }, [])


    return (
        <Button
            onClick={() => {
                navigator.clipboard.writeText(result)
                setName("ʕ•́ᴥ•̀ʔっ📋copied")
            }}
            variant="contained"
            color={won ? "success" : "warning"}
            fullWidth
        >{name}</Button>
    )
}
