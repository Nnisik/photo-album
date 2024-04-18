let galleryContainer = document.getElementById("gallery");
window.onload = () => {
  fetch("../data/data-posts.json")
    .then((response) => response.json())
    .then((json) => {
      json.map((post) => {
        // post container
        const postContainer = document.createElement("section");
        postContainer.setAttribute("data-id", post["id"]);
        postContainer.classList.add("post");
        // post image const
        postImage = document.createElement("img");
        postImage.src = "../assets/IMG_1286.JPG";
        postImage.classList.add("post-img");
        postContainer.appendChild(postImage);
        // post delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.setAttribute("data-like", post["like"]);
        postContainer.appendChild(deleteBtn);
        // post information section
        const postInfoSection = document.createElement("section");
        postInfoSection.classList.add("post-info");
        // post header
        const postHeader = document.createElement("h2");
        postHeader.classList.add("post-header");
        postHeader.textContent = post["name"];
        postInfoSection.appendChild(postHeader);
        // like button
        const likeBtn = document.createElement("div");
        likeBtn.classList.add("like-btn");
        likeBtn.setAttribute("data-like", post["like"]);
        if (post["like"]) {
          likeBtn.classList.toggle("liked");
        }
        postInfoSection.appendChild(likeBtn);
        postContainer.appendChild(postInfoSection);
        document.querySelector("#gallery").appendChild(postContainer);
      });
    });
};
