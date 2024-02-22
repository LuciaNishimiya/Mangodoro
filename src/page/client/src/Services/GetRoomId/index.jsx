export function getRoomId() {
    const urlParts = window.location.pathname.split('/');

    const roomIndex = urlParts.indexOf('room');

    // If 'room' is in the URL and there is a value after it, return that value as ID
    if (roomIndex !== -1 && urlParts.length > roomIndex + 1) {
        return urlParts[roomIndex + 1];
    }
    return null;
}
