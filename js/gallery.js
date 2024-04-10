import postsData from '../data/posts.json';

const drawPostElement = (header, liked, img) => {
    // post container
    const newElement = document.createElement("section");
    newElement.className = "post";
    // post image
    const postImage = document.createElement("img");
    postImage.src = "./assets/IMG_1286.JPG";
    postImage.alt = "post";
    postImage.className = "post-img";
    newElement.appendChild(postImage);
    // post delete button
    const postDeleteButton = document.createElement("button");
    postDeleteButton.className = "delete-btn";
    newElement.appendChild(postDeleteButton);
    // post information section
    const postsInfoSection = document.createElement("section");
    postsInfoSection.className = "post-info";
    const postHeader = document.createElement("h2");
    postHeader.className = "post-header";
    postHeader.innerHTML = header;
    postsInfoSection.appendChild(postHeader);
    const likeStatus = document.createElement("div");
    likeStatus.className = "like-btn";
    if (liked) {
        likeStatus.classList.toggle("liked");
    }
    postsInfoSection.appendChild(likeStatus);
    newElement.appendChild(postsInfoSection);
}

const galleryElement = document.getElementById("gallery");
postsData.reduce((post) => {
    drawPostElement(post.name, post.like, post.image);
});