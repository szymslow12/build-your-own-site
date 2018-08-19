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

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item instanceof Array) {
            addItemsFromArray(item, hoverList, hoverListContainer, i);
        } else {
            addItem(hoverList, item);
        }
    }
    hoverListContainer.style.top = (span.offsetTop + span.offsetHeight)+ "px";
    hoverListContainer.style.left = (span.offsetLeft - (hoverListContainer.offsetWidth / 2 - span.offsetWidth / 2)) + "px";
}

function addItemsFromArray(items, hoverList, hoverListContainer, i) {
    let classesHeaders = ["Aliance races:", "Horde races:"];
    setContainers(hoverList, hoverListContainer, i);
    hoverList.textContent = classesHeaders[i];
    for (let j = 0; j < items.length; j++) {
        addItem(hoverList, items[j]);
    }
}

function setContainers(hoverList, hoverListContainer, i) {
    if (i == 0) {
        hoverListContainer.style.width = "auto";
        hoverListContainer.style.display = "flex";
        hoverListContainer.style.justifyContent = "center";
    }
    if (i > 0) {
        hoverList = document.createElement("ul");
        hoverListContainer.appendChild(hoverList);
    }
}

function addItem(hoverList, item) {
    let li = document.createElement("li");
    li.textContent += item;
    hoverList.appendChild(li);  
}

function addEventListeners() {
    let itemList = [['The Burning Crusade', 'Wrath of the Litch King', 'Cataclysm',
    'Mist of the Pandaria', 'Draenor', 'Legion', 'Battle of Azeroth'], 
    ["Warrior", "Paladin", "Hunter", "Rouge", "Priest", "Death Knight",
    "Shaman", "Mage", "Warlock", "Monk", "Druid", "Demon Hunter"],
    [["Human", "Dwarf", "Night Elf", "Gnome", "Draenei", "Worgen", "Pandaren",
    "Dark Iron Dwar", "Lightforged Draenei", "Void Elf"], ["Orc", "Undead", "Tauren", 
    "Troll", "Blood Elf", "Goblin", "Pandaren", "Highmountain Tauren", "Mag'har Orc", "Nightborne"]]];

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