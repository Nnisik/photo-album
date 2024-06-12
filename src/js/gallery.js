function drawNewPost(postInfo) {
  // post container
  const postContainer = document.createElement("section");
  postContainer.setAttribute("data-id", postInfo.id);
  postContainer.classList.add("post");
  
  // post image const
  const postImage = document.createElement("img");
  postImage.src = postInfo.image;
  postImage.classList.add("post-img");
  postContainer.appendChild(postImage);
  
  // post delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("data-id", postInfo.id);
  postContainer.appendChild(deleteBtn);
  
  // post information section
  const postInfoSection = document.createElement("section");
  postInfoSection.classList.add("post-info");
  
  // post header
  const postHeader = document.createElement("h2");
  postHeader.classList.add("post-header");
  postHeader.textContent = postInfo.name;
  postInfoSection.appendChild(postHeader);
  
  // like button
  const likeBtn = document.createElement("input");
  likeBtn.type = "checkbox";
  likeBtn.setAttribute("id", `post-${postInfo.id}`);
  likeBtn.classList.add("like-btn");
  
  postInfoSection.appendChild(likeBtn);
  postContainer.appendChild(postInfoSection);
  return postContainer;
}

export default async function drawGallery() {
  const JSONFilePath = "../src/data/data-posts.json";
  fetch(JSONFilePath)
    .then((response) => response.json())
    .then((json) => {
      json.map((post) => {
        document.querySelector("#gallery").appendChild(drawNewPost(post));
      });
    });
}
