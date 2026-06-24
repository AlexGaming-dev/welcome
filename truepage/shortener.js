export function generateShortLink(url) {
    const code = Math.random().toString(36).substring(7);
    return `https://alexgaming.is-a.dev/truepage/s/?id=${code}`;
}