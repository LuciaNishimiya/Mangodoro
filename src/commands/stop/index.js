export const name = "stop";
export const description = "Para el pomodoro.";
export async function execute({ message, client }) {
  await client.streamClient.leaveVoiceChannel();
  client.player = null;
  message.reply("Se paro el pomodoro");
}
