"use strict"

class HoverList {
    constructor(span, items, isWow) {
        showHoverList(span, items, isWow);
    }
}

function showHoverList(span, items, isWow) {
    
    let hoverListContainer = document.createElement("div");
    let hoverList = document.createElement("ul");
    hoverListContainer.setAttribute("class", "dropdown");
    span.appendChild(hoverListContainer);
    hoverListContainer.appendChild(hoverList);

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item instanceof Array) {
            addItemsFromArray(item, hoverList, hoverListContainer, i, isWow);
        } else {
            addItem(hoverList, item);
        }
    }
    hoverListContainer.style.top = (span.offsetTop + span.offsetHeight)+ "px";
    hoverListContainer.style.left = (span.offsetLeft - (hoverListContainer.offsetWidth / 2 - span.offsetWidth / 2)) + "px";
}

function addItemsFromArray(items, hoverList, hoverListContainer, i, isWow) {
    let classesHeaders = getClassesHeaders(isWow);
    let secondItemList = setContainers(hoverListContainer, i);
    if (secondItemList) {
        hoverList = secondItemList;
    }
    hoverList.textContent = classesHeaders[i];
    for (let j = 0; j < items.length; j++) {
        addItem(hoverList, items[j]);
    }
}

function getClassesHeaders(isWow) {
    if (isWow) {
        return ["Aliance races:", "Horde races:"];
    } else {
        return ["Republic", "Empire"];
    }
}

function setContainers(hoverListContainer, i) {
    if (i == 0) {
        hoverListContainer.style.width = "auto";
        hoverListContainer.style.display = "flex";
        hoverListContainer.style.justifyContent = "center";
    }
    if (i > 0) {
        let hoverList = document.createElement("ul");
        hoverListContainer.appendChild(hoverList);
        return hoverList;

    }
}

function addItem(hoverList, item) {
    let li = document.createElement("li");
    li.textContent += item;
    hoverList.appendChild(li);  
}

function addEventListeners(itemsList, isWow) {
    let itemList = itemsList;
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
            let hoverList = new HoverList(span, itemList[i], isWow)
        });

        span.addEventListener("mouseleave", onmouseleave);
    }
}