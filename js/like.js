document.querySelectorAll(".post").forEach((post) => {
    post.onclick = () => {
        if (post.classList.contains("liked")) {
            // TODO: change post info in json file
        }
        post.classList.toggle("liked");
    }
});