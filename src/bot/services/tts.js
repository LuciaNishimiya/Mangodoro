import https from 'https';
import fs from 'fs';
import googleTTS from 'google-tts-api';


function genFileName() {
  const filePath = './public/tts/';
  const file1 = `${filePath}sus1`;
  const file2 = `${filePath}sus2`;

  if (fs.existsSync(file1)) {
    fs.unlinkSync(file1);
    return file2;
  } else if (fs.existsSync(file2)) {
    fs.unlinkSync(file2);
    return file1;
  } else {
    return file1;
  }
}



function tts({ text }) {
  return new Promise((resolve, reject) => {
    try {
      const audioFileName = genFileName();
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
          resolve(audioFileName); // Devuelve el nombre del archivo cuando la descarga se completa
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
