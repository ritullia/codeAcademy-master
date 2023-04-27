import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const MoodChecker = () => {
    const [message, setMessage] = useState("");

    const onSecondaryClick = () => {
        setMessage("Nieko tokio, viskas bus gerai");
    }

    const onWarningClick = () => {
        setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai");
    }

    const onDanger = () => {
        setMessage("Smagu girdėti, taip ir toliau");
    }

    const onReset = () => {
        setMessage("");
    }

    return (
        <div style={{margin: "50px"}}>
            <h2>Kaip jaučiatės?</h2>
            <Button onClick={onSecondaryClick} variant='secondary'>Jaučiuosi prastai :(</Button>
            <Button onClick={() => setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai")} variant='warning'>Jaučiuosi normaliai : |</Button>
            <Button onClick={onDanger} variant='danger'>Jaučiuosi puikiai :)</Button>
            <p>{message}</p>
        </div>
    )
}