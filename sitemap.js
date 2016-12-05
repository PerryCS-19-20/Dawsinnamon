/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function buildMap(elementId){
    var theMap = document.getElementById(elementId);
    var list = document.createElement("ul");
    var sublist = document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent = "Class Projects";
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("Biography", "bio.html"));
    theMap.appendChild(list);
    
    list.appendChild(classProjects);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("breakout", "breakout.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("JavaScript Events", "background-change.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pop-Up!", "popup.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("To Do List", "todolist.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic-Tac-Toe", "tic-tac-toe.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Multiplcation Table", "box-calculator.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("More Multiplication Table", "multTable-change.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pythagorean Calculator", "calculator.html"));
    classProjects.appendChild(sublist);
    
    
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href = link;
    element.textContent = title;
    li.appendChild(element);
    return(li);
}