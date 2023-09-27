export const name = 'help';
export const description = 'Muestra la lista de comandos disponibles.';
export function execute({ message, commandsList }) {
    let response = '>>> ##  Lista de comandos:\n';

    commandsList.forEach(command => {
        response += `- **${command.name}**: ${command.description}\n`;
    });

    message.channel.send(response);
}

