import React from 'react';
import Button from './Button';

const Typeracer = (props) => {
    const { 
        newWord, 
        inputValue, 
        setInputValue, 
        disabled, 
        time, 
        animation, 
        handleInput,
        handleStart,
    } = props;

    return(
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div className="time">
                <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
            </div>
            <div className="wordValues">
                <input 
                    disabled={disabled && disabled}
                    type="text"
                    value={inputValue}
                    onKeyPress={e => handleInput(e)}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder={disabled ? "" : "Start typing... then Enter"}
                />
                <Button handleStart={handleStart} disabled={disabled} />
            </div>
        </div>
    );
}

export default Typeracer;