import React from 'react'
import  useSound  from 'use-sound'
import audiosound from './sounds/audio.wav'
import Form from './Form'

function Audio(props)


{
    const hr = new Date().getHours();
    const [play] = useSound(audiosound)
    
    return (
        <div>

        <h1>{props.gettime}</h1>
        <Form  ghanta = {hr} noise = {play}/>
        </div>
    ) 
}

export default Audio;