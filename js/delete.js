document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const postId = button.getAttribute.id;

    // connecting to json file
    const data = fs.readFileSync("../data/data-posts.json");
    const jsonData = JSON.parse(data);

    // delete data from JSON file
    delete jsonData[postId - 1];
  });
});
