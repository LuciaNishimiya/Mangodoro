import tts from './services/tts.js';


async function main() {
    try {
        const url = await tts({ text: 'holaaaaa', fileId: 1 });
        console.log('URL del archivo descargado:', url);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
