let taskadd = () => {let taskNew = new objectTask();}

function objectTask() {
    let task = document.getElementById('textinput')["value"];
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    let itemText = document.createTextNode(task);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
}

function deleteCheckBox() {
    let ul = document.getElementById('place');
    let li = ul.children;
    for (let i=0; i < li.length; i++) {
        while(li[i]["children"][0].checked) {
            ul.removeChild(li[i]);
        }
    }
}