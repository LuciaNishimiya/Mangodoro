import ffprobe from "ffprobe-static";
import ffmpeg from "ffmpeg-static";
import { executablePath } from "puppeteer";
import { launch, getStream } from "puppeteer-stream";

export async function StartLive({ client, message, url }) {
  const channel = await message.member.voice.channel;
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
    hwaccel: true,
    kbpsAudio: 9,
    kbpsVideo: 1000,
  });

  client.player.on("finish", () => {
    message.reply("Error playing");
    client.player = null;
  });
}
