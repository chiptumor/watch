// REGEX:
// (?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/)|^)([A-Za-z0-9_-]+)(?=\b|[?&]|$)
/** SUGGESTED SCRIPT ***
const url = "https://youtu.be/VIDEO?s=1234";

const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/)|^)([A-Za-z0-9_-]{6,})(?=\b|[?&]|$)/);

const videoID = match ? match[1] : null;

console.log(videoID); // Outputs: VIDEO
************************/