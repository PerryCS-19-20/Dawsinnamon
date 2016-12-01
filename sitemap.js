/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function buildMap(elementId){
    var theMap = document.getElementById(elementId);
    var list = document.createElement("ul");
    var sublist = document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent = "classProjects";
    
    
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href = link;
    element.textContent = title;
    li.appendChild(Element);
    return(li);
}