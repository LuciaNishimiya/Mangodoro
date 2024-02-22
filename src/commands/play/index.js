const url = "http://lucianishimiya.com/";

import ffprobe from "ffprobe-static";
import ffmpeg from "ffmpeg-static";
import { executablePath } from "puppeteer";
import { launch, getStream } from "puppeteer-stream";

export const name = "play";
export const description =
  "`<tiempo_trabajo>` `<tiempo_descanso>` `<rondas>` - Inicia el Pomodoro";
export async function execute({ message, prefix, client }) {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const timerArgs = args.join(" ").split(" ").map(Number);
  const timers = {
    minWork: timerArgs[1] || 30,
    minBreak: timerArgs[2] || 10,
    nRounds: timerArgs[3] || 10,
  };

  // setTimers({
  //   work: timers.minWork,
  //   breaks: timers.minBreak,
  //   sessions: timers.nRounds,
  //   restart: true,
  // });
  message.reply(
    `>>> ## Se configuro\n Trabajos: ${timers.minWork} Minutos\n Descansos: ${timers.minBreak} Minutos\n Rondas: ${timers.nRounds}`
  );

  const channel = message.member.voice.channel;
  await client.streamClient.joinVoiceChannel(channel, {
    selfDeaf: false,
    selfMute: false,
    selfVideo: "cam",
  });

  if (!client.streamClient.connection)
    return message.reply("No estas conectado a un canal de voz");

  await client.streamClient.connection.createStream(true);

  const browser = await launch({
    defaultViewport: null,
    executablePath: executablePath(),
    args: ["--headless=new"],
  });

  const page = await browser.newPage();
  await page.goto(url);
  const stream = await getStream(page, {
    audio: true,
    video: true,
    mimeType: "video/webm;codecs=vp8,opus",
  });
  client.player = client.streamClient.createPlayer(
    stream,
    client.streamClient.connection?.streamConnection?.udp ||
      client.streamClient.connection.udp,
    {
      ffmpeg: ffmpeg,
      ffprobe: ffprobe.path,
    }
  );
  client.player.play({
    volume: 1,
    hwaccel: false,
    kbpsAudio: 20,
    kbpsVideo: 100,
  });

  client.player.on("finish", () => {
    message.reply("Error playing");
    client.player = null;
  });
}
