const delay = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener("load", await () => {
    await delay(500);
    document.querySelectorAll("iframe")[1].remove();
});

document.getElementById("submit").addEventListener("click", watch);
document.getElementById("input").addEventListener("input", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        watch();
    }
});

const watch = () => {
    const input = document.getElementById("input").value;

    const video = (() => {
        const match = input.match(
            /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/)|^)([A-Za-z0-9_-]+)(?=\b|[?&]|$)/
        );
        const id = match ? match[1] : null;
        return id;
    })();

    console.log(video);

    document.getElementById("iframe").setAttribute("src", `https://youtube.com/embed/${video}/`);
};