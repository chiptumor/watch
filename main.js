window.addEventListener("error", (e) => {
    window.alert(e.message);
});

const delay = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener("load", async () => {
    await delay(500);
    document.querySelectorAll("iframe")[1].remove();
});

window.addEventListener("load", () => {
    if (window.location.href.includes("?")) {
        document.getElementById("iframe").setAttribute("src", `https://youtube.com/embed/${window.location.search.substring(1)}/`);
    }
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

    window.alert(video);

    document.getElementById("iframe").setAttribute("src", `https://youtube.com/embed/${video}/`);
};

window.addEventListener("load", () => {
    window.alert(document.getElementById("input").getAttribute("src"));
});