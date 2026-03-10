// Browser extension script to capture voice notes and send for transcription
console.log("EchoNote browser extension loaded");

function captureNote() {
    let note = prompt("Record your voice note (simulated as text):");
    if (note) {
        console.log("Captured note: " + note);
        // In real app, send to server for transcription
    }
}
