/**
 * Creates an image element for a post.
 * @param {string} image - The URL of the post's image.
 * @returns {HTMLImageElement} The image element.
 */
function drawPostImage(image) {
  const postImage = document.createElement("img");
  postImage.src = image;  // Set the source URL of the image
  postImage.alt = "Post image";  // Provide a default alt text for accessibility
  postImage.classList.add("post-img");  // Add a class for styling
  return postImage;
}

/**
 * Creates a delete button for the post.
 * @param {number} postId - The unique ID of the post.
 * @returns {HTMLButtonElement} The delete button.
 */
function drawDeleteBtn(postId) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");  // Add class for styling
  deleteBtn.setAttribute("data-id", postId);  // Set a custom data attribute for the post ID
  return deleteBtn;
}

/**
 * Creates the post header (e.g., title).
 * @param {string} text - The text to be displayed in the header.
 * @returns {HTMLHeadingElement} The h2 element for the post header.
 */
function drawPostHeader(text) {
  const postHeader = document.createElement("h2");
  postHeader.classList.add("post-header");  // Add class for styling
  postHeader.textContent = text;  // Set the text content for the header
  return postHeader;
}

/**
 * Creates a like button for the post.
 * @param {number} postId - The unique ID of the post.
 * @param {boolean} likeStatus - Status rather post is liked or not
 * @returns {HTMLInputElement} The checkbox input element for the like button.
 */
function drawLikeBtn(likeStatus, postId) {
  const likeBtn = document.createElement("input");
  likeBtn.type = "checkbox";  // Use checkbox for like functionality
  likeBtn.setAttribute("id", `${postId}`);  // Set the checkbox ID to be the post ID
  likeBtn.classList.add("like-btn");  // Add class for styling
  likeBtn.checked = likeStatus;
  return likeBtn;
}

/**
 * Creates a new post container including the image, delete button, and post info.
 * @param {Object} post - Object containing post details like id, name, image.
 * @returns {HTMLElement} The complete post container (section).
 */
function drawNewPost(post) {
  // Check if the necessary post data is provided
  if (!post || !post.id || !post.image || !post.name) {
    console.warn("Invalid post info:", post);
    return null;  // If the data is incomplete, don't render the post
  }
  // Create the main post container
  const postContainer = document.createElement("section");
  postContainer.setAttribute("data-id", post.id);  // Set post ID for reference
  postContainer.classList.add("post");  // Add class for styling

  // Create and append the post image
  postContainer.appendChild(drawPostImage(post.image));

  // Create and append the delete button
  postContainer.appendChild(drawDeleteBtn(post.id));

  // Create the post info section (like header and like button)
  const postInfoSection = document.createElement("section");
  postInfoSection.classList.add("post-info");

  // Create and append the post header (title)
  postInfoSection.appendChild(drawPostHeader(post.name));

  // Create and append the like button
  postInfoSection.appendChild(drawLikeBtn(post.like, post.id));

  // Append the post info section to the main post container
  postContainer.appendChild(postInfoSection);

  return postContainer;
}


export default async function drawGallery() {
  // Path to the JSON file containing post data
  const JSONFilePath = "./src/json/data-posts.json";

  try {
    // Fetch the post data from the JSON file
    fetch(JSONFilePath)
        .then((response) => {
          // Check if the response is successful (status 200)
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          // Parse the JSON response
          return response.json();
        })
        .then((json) => {
          // If the gallery element exists, append the posts
          if (document.querySelector("#gallery")) {
            // Iterate over each post and append the corresponding post element to the fragment
            json.forEach((post) => {
              const postElement = drawNewPost(post);
              if (postElement) {
                document.querySelector("#gallery").appendChild(postElement);
              }
            });
          }
        })

  } catch (error) {
    // Log any errors that occur during the fetch or rendering process
    console.error("Error fetching posts:", error);
  }
}