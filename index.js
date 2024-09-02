const speech = require('@google-cloud/speech');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

process.env.GOOGLE_APPLICATION_CREDENTIALS='codingiwthado.json';

async function transcribeAudio(audioFile){
    try {
        const speechClient = new speech.SpeechClient();

        const file = fs.readFileSync(audioFile);
        const audioBytes = file.toString('base64');

        const audio = {
            content: audioBytes
        }

        const config = {
            encoding: 'LINEAR16',
            sampleRateHertz: 441000,
            languageCode: 'en-US'
        }

        return new promise((resolve, reject)=>{
            speechClient.recognize({audio, config})
            .then(data=>{
                resolve(data);
            })
            .catch(error=>{
                reject(error);
            })
        })
    } catch (error) {
        console.error('ERROR: ', error)
    }
}

(async()=>{
    const data = await transcribeAudio('');
    console.log(data);
})