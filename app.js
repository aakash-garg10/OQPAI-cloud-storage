// ************************NEWS PAGE ITEMS FOR SWITCHING*******************
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

// **************GOVERNACE PAGE ITEMS FOR SWITCHING ***********************
let governaceListItems = document.querySelectorAll(".governaceListItem");
let governaceListContent = document.querySelectorAll(".governaceListContent");

let newsEvents = 0;
// console.log(listItemEventsPresentation);

// **********************NEWS PAGE (NEWS AND EVENTS&PRESENTATION) NAVIGATION****************
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
      // console.log(listItemEventsPresentation);
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

// ***********************NAVIGATION INSIDE COMPLETE LIST for NEWS PAGE*****************************
console.log(newsCorporateListContent);
function Clicked(elem) {
  newsCorporateListContent.forEach(function (element) {
    element.classList.add("newsCorporateHideDiv");
  });
  newsCorporateListItems.forEach(function (element) {
    element.style.borderBottom = "none";
  });
  elem.style.borderBottom = "2px solid black";
  const idname = elem.getAttribute("name");
  console.log(document.getElementById(idname));
 
  document.getElementById(idname).classList.remove("newsCorporateHideDiv");
  document.getElementById(idname).classList.add("newsCorporateShowDiv");
}
// ****************************************GOVERNACE PAGE LIST NAVIGATION********************************
// console.log(governaceListItems);
// console.log(governaceListContent);
function governaceClicked(elem) {
  governaceListContent.forEach(function (element) {
    element.classList.add("newsCorporateHideDiv");
  });
  governaceListItems.forEach(function (element) {
    element.style.borderBottom = "none";
  });
  elem.style.borderBottom = "2px solid #0d6efd";
  const idname = elem.getAttribute("name");
 
  document.getElementById(idname).classList.remove("newsCorporateHideDiv");
  document.getElementById(idname).classList.add("newsCorporateShowDiv");
}
