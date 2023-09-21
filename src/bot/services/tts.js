import https from 'https';
import fs from 'fs';
import googleTTS from 'google-tts-api';


import { exec } from 'child_process';

function playAudio(audioFileName) {
  exec(`mpg321 ${audioFileName}`, (stdout) => {

    return stdout
  });
}



function tts({ text }) {
  return new Promise((resolve, reject) => {
    try {
      const audioFileName = './tts.mp3'
      const audioFile = fs.createWriteStream(audioFileName);

      const audioUrl = googleTTS.getAudioUrl(text, {
        lang: 'es-PY',
        slow: false,
        host: 'https://translate.google.com',
      });

      const response = https.get(audioUrl, (response) => {
        response.pipe(audioFile);

        audioFile.on('finish', () => {
          audioFile.close();
          resolve(playAudio(audioFileName));
        });
      });

      response.on('error', (error) => {
        reject(error);
      });
    } catch (error) {
      console.error(`Error al descargar o procesar el archivo tts: ${error.message}`);
      reject(error);
    }
  });

}


export default tts;
