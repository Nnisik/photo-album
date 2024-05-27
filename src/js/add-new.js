export default function createNewPost() {
   // connecting to json file
   const data = fs.readFileSync('../data/data-posts.json');
   const jsonData = JSON.parse(data);
   
   // get data from input fields
   const nameInput = document.getElementById("add-new_name-input");
   const nameInputData = nameInput.value;
   
   const imgLinkInput = document.getElementById("add-new_img-input");
   const imgLinkInputData = imgLinkInput.value;
   
   // push data to JSON file
   jsonData.push(
     {
       id: Object.keys(jsonData).length + 1,
       name: nameInputData,
       Image: imgLinkInputData,
       like: false
     }
   );
   fs.writeFileSync('../data/data-posts.json', JSON.stringify(jsonData));
}