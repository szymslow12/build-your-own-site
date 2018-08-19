"use strict"

class HoverList {
    constructor(span, items, event) {
        showHoverList(span, items, event);
    }
}

function showHoverList(span, items) {
    let hoverListContainer = document.createElement("div");
    let hoverList = document.createElement("ul");
    hoverListContainer.setAttribute("class", "dropdown");
    span.appendChild(hoverListContainer);
    hoverListContainer.appendChild(hoverList);
    hoverListContainer.style.top = (span.offsetTop + span.offsetHeight)+ "px";
    hoverListContainer.style.left = (span.offsetLeft - span.offsetWidth / 2) + "px";
    for (let item of items) {
        let li = document.createElement("li");
        li.textContent += item;
        hoverList.appendChild(li);
    }
    
}

function addEventListeners() {
    let itemList = [['The Burning Crusade', 'Wrath of the Litch King', 'Cataclysm',
    'Mist of the Pandaria', 'Draenor', 'Legion', 'Battle of Azeroth']];
    let hoverItemLists = document.getElementsByClassName("hover-item-list");
    let onmouseleave = (e) => {
        for (let dropdown of document.getElementsByClassName("dropdown")) {
            e.target.removeChild(dropdown);
        }
    };

    for (let i = 0; i < hoverItemLists.length; i++) {
        let span = hoverItemLists[i];
        span.addEventListener("mouseover", (event) => {
            onmouseleave(event);
            let hoverList = new HoverList(span, itemList[i], event)
        });

        span.addEventListener("mouseleave", onmouseleave);
    }
}

addEventListeners();