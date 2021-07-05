import {selectCard} from "./selectCard.js";
import {collapsedElement} from "./collapsedElement.js";

document.addEventListener("DOMContentLoaded", e => {
    selectCard();
    collapsedElement();
});

document.addEventListener("click", selectTab);

function selectTab() {
    if(document.getElementById("tab1").checked) {
        document.getElementById("content-tab-1").style.display = "block";
        document.getElementById("content-tab-2").style.display = "none";
    } else {
        document.getElementById("content-tab-2").style.display = "block";
        document.getElementById("content-tab-1").style.display = "none";
    }
}
