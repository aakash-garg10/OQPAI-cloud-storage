let listItemNews = document.querySelector("#listItemNews");
let listItemEventsPresentation = document.querySelector(
  "#listItemEventsPresentation"
);
let divisionItemNews = document.querySelector("#divisionItemNews");
let divisonItemEventsPresentation = document.querySelector(
  "#divisonItemEventsPresentation"
);
let newsCorporateListItems = document.querySelectorAll(
  ".newsCorporateListItems"
);
let newsCorporateListContent = document.querySelectorAll(
  ".newsCorporateListContent"
);

let newsEvents = 0;
// console.log(listItemEventsPresentation);

[listItemNews, listItemEventsPresentation].forEach(function (element) {
  element.addEventListener("click", () => {
    if (newsEvents == 1) {
      listItemEventsPresentation.style.color = "#777777";
      listItemEventsPresentation.style.borderBottom = "0";
      listItemNews.style.color = "black";
      listItemNews.style.borderBottom = "2px solid black";
      divisonItemEventsPresentation.style.display = "none";
      divisionItemNews.style.display = "block";
      newsEvents = 0;
      console.log(listItemEventsPresentation);
    } else {
      listItemEventsPresentation.style.color = "black";
      listItemEventsPresentation.style.borderBottom = "2px solid black";
      listItemNews.style.color = "#777777";
      listItemNews.style.borderBottom = "0";
      divisonItemEventsPresentation.style.display = "block";
      divisionItemNews.style.display = "none";
      newsEvents = 1;
    }
  });
});
// console.log(newsCorporateListItems);

console.log(newsCorporateListContent)
function Clicked(elem) {
  newsCorporateListContent.forEach(function (element) {
    // element.classList.add("d-none");
    element.style.display = "none";
  });

  const idname = elem.getAttribute("name");
  console.log(document.getElementById(idname));
//   const contDiv=document.getElementById(idname).classList.add("newsCorporateShowDiv");
  document.getElementById(idname).classList.add("newsCorporateShowDiv");
}
// newsCorporateListItems.forEach(function (element) {
//   element.addEventListener("click", () => {
//     const idx = newsCorporateListItems.indexOf(this);
//     console.log(idx);
//     console.log("printing");
//     element.classList.add("newsCorporateShowDiv");
//   });
// });

// listItemEventsPresentation.addEventListener("click",()=>{
//     if ( newsEvents == 1) {
//         divisonItemEventsPresentation.style.display = "block";
//         divisionItemNews.style.display = "none";
//         newsEvents = 0;
//         console.log(listItemEventsPresentation);
//       } else {
//         divisonItemEventsPresentation.style.display = "block";
//         divisionItemNews.style.display = "none";
//         newsEvents = 1;
//       }
// })
