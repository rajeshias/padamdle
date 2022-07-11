import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Grid, Typography } from '@mui/material';
import styles from "./style/Enter.module.css"
import styled from "styled-components";
import sweat from '../assets/db/Sweat';
import ResultModal from './ResultModal';
import { createFilterOptions } from '@mui/material/Autocomplete';
import Countdown from 'react-countdown';
import ShareButton from './ShareButton';

var today = new Date();

var localKey = "padamdle-" + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


const filterOptions = createFilterOptions({
    matchFrom: 'any',
    limit: 7,
});

const WhiteBorderTextField = styled(TextField)`
& label.Mui-focused {
  color: white;
}
& .MuiOutlinedInput-root {
  &.Mui-focused fieldset {
    border-color: white;
  }
}
`;
const textFieldColor = "white"
const textFieldSX = {
    input: {
        "-webkit-text-fill-color": `${textFieldColor} !important`,
        color: `${textFieldColor} !important`,
    },
};


export default function Enter({ tries, setTries }) {

    const [value, setValue] = useState();
    const [attempt, setAttempt] = useState();
    const [result, setResult] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [open, setOpen] = useState(false);
    const [won, setWon] = useState();
    const [emoji, setEmoji] = useState("");

    useEffect(() => {
        if (localStorage.getItem(localKey) !== null) {
            setTries(JSON.parse(localStorage.getItem(localKey)))
        }
    }, [])

    useEffect(() => {
        if (gameOver & tries.length < 3) {
            setTries([
                ...tries,
                "dummy",
                "dummy2"
            ])
        }
    }, [gameOver])

    useEffect(() => {
        if (tries.length > 2) {
            setResult(true);
            setGameOver(true)
        }
        console.log("set runb")
    }, [tries])

    const checkAttempt = () => {
        if (attempt === undefined || value === "") {
            return
        }
        // setEmoji(emoji + "🎬")
        if (attempt?.label === sweat) {
            setTries([
                ...tries,
                `✅ ${attempt?.label}`
            ]
            )
            localStorage.setItem(localKey, JSON.stringify([
                ...tries,
                `✅ ${attempt?.label}`
            ]))
            setResult(true)
            setGameOver(true)
            setWon(true)
            setEmoji(emoji + "🟩")
        } else {
            setTries([
                ...tries,
                `❌ ${attempt?.label}`
            ])
            localStorage.setItem(localKey, JSON.stringify([
                ...tries,
                `❌ ${attempt?.label}`
            ]))
            setEmoji(emoji + "🎬")
        }
        setValue()
    };

    const handleClose = () => setResult(false);

    return (
        <Grid container>
            {
                !gameOver
                && <>
                    <Grid item xs={10}>
                        <Autocomplete
                            style={{ background: "white" }}
                            disablePortal
                            options={tamilFilms}
                            renderInput={(params) => <WhiteBorderTextField {...params} />}
                            size="small"
                            onChange={(event, newValue) => {
                                setAttempt(newValue);
                            }}
                            inputValue={value}
                            onInputChange={(event, newValue) => {
                                if (newValue.length > 2) {
                                    setOpen(true)
                                }
                                setValue(newValue);
                            }}
                            disabled={tries.length > 2 || gameOver}
                            filterOptions={filterOptions}
                            open={open}
                            onClose={() => setOpen(false)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            onClick={() => checkAttempt()}
                            className={styles.submit}
                            color="secondary"
                            variant="contained"
                            fullWidth
                            disabled={tries.length > 2 || gameOver}
                        >Submit</Button>
                    </Grid>
                </>
            }
            <br />
            <br />
            {tries.map((eachTry, index) => {
                if (eachTry.startsWith("dummy")) {
                    return
                }
                return <>
                    <Grid key={index} item xs={12}>
                        <TextField sx={textFieldSX} value={eachTry} disabled size="small" fullWidth />
                    </Grid>
                    <br />
                    <br />
                </>
            })}
            <br />
            {
                !gameOver
                    ?
                    <Grid item xs={12}>
                        <span>{`${3 - tries.length} guess left`}</span>
                    </Grid>
                    : <>
                        <Grid item xs={8}>
                            <Typography style={{ paddingTop: "5px" }} variant="h9" component="h3">
                                {`${sweat} - ${won ? "🏆You got" : "You missed"} it!`}
                            </Typography >
                        </Grid>
                        <Grid item xs={4}>
                            <ShareButton emoji={emoji} won={won} />
                        </Grid>
                    </>
            }
            {
                gameOver &&
                <>
                    <Grid item xs={12}>
                        <br />
                        <span>Next Padam:</span>
                    </Grid>
                    <Grid item xs={12}>
                        <strong><Countdown date={new Date().setHours(24, 0, 0, 0)} daysInHours><span>Please refresh this page to continue!</span></Countdown></strong>
                    </Grid>
                </>
            }
            <ResultModal open={result} handleClose={handleClose} won={won} emoji={emoji} />
        </Grid >
    )
}

const tamilFilms = require('../assets/db/tamilMovies.json'); 