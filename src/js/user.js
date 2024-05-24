fetch("../data/data-users.json")
  .then((response) => response.json())
  .then((json) => {
    document
      .querySelector("#user-info")
      .setAttribute("data-id", Object.keys(json).length);
    
    document.querySelector("#user-info_name").textContent =
      json[Object.keys(json).length - 1]["name"];
    
    document.querySelector("#user-info_description").textContent =
      json[Object.keys(json).length - 1]["description"];
    
    document.querySelector("#user_profile-img").src =
      json[Object.keys(json).length - 1]["img"];
  });
