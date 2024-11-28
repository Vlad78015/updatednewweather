function showAdvert() {
    let advertBanner = document.getElementById('advertBanner');
    
    advertBanner.classList.remove('hide');
    advertBanner.classList.add('show');

    setTimeout(() => {
        advertBanner.classList.remove('show');
        advertBanner.classList.add('hide');
    }, 5000); 
}
function startAdvertTimer() {
    setInterval(showAdvert, 10000); 
}
window.onload = startAdvertTimer;

document.getElementById('burger').addEventListener('click', function() {
    let nav = document.getElementById('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
})
let boxMessage = document.querySelector(".message");
let commentArea = document.querySelector(".comment-area");
let nicknameInput = document.querySelector(".nickname-input"); 
let btnSend = document.querySelector(".comment-send");

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => {
        let newMessage = document.createElement("p");
        newMessage.textContent = comment;
        boxMessage.appendChild(newMessage);
    });
}

loadComments();

document.addEventListener("DOMContentLoaded", loadComments);

btnSend.addEventListener('click', function() {
    let nicknameValue = nicknameInput.value.trim();
    let commentAreaValue = commentArea.value.trim();

    if (nicknameValue !== "" && commentAreaValue !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        let formattedComment = `${nicknameValue}: ${commentAreaValue}`; 
        comments.push(formattedComment);
        
        localStorage.setItem("comments", JSON.stringify(comments));
        
        let newMessage = document.createElement("p");
        newMessage.style.color = "lightblue";
        newMessage.style.fontSize = "18px";
        newMessage.style.textShadow = "2px 2px 2px #000";
        newMessage.textContent = formattedComment;
        boxMessage.appendChild(newMessage);
        
        commentArea.value = ""; 
        nicknameInput.value = ""; 
    } else {
        alert("Please enter both your nickname and a comment before sending."); 
    }
});

let arrayComment = ["Today is a pretty weather",
"Nice site!", "Good", "How to connect you?", "OK", "pretty",
"Looks awesome", "Wow", "Finally", "Cool", "Useful app", "Okay", "Powerful"]
let arrayNames = ["Ryan", "Chris", "Ben", "May", "Alex", 
"Andy", "Aaron", "Maria", "Max", "Dan", "Fred", "Felix", "Alex"]
let arrayComCopy = [...arrayComment]
let arrayNameCopy = [...arrayNames]
function randomCom(){
    return Math.floor(Math.random() * (25 - 10 + 1) + 10) * 1000;
}
function getRandomUniqueItem(array) {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    array.splice(index, 1); 
    return item;
}
function writeCom(){
    if(arrayComCopy.length === 0 || arrayNameCopy.length === 0){
        arrayComCopy = [...arrayComment]
        arrayNameCopy = [...arrayNames]
    }
    let newName = getRandomUniqueItem(arrayNames)
    let newComment = getRandomUniqueItem(arrayComment)
    let comTogether = document.createElement("p")
    comTogether.textContent = `${newName}: ${newComment}`
    boxMessage.append(comTogether)
}
function newTime(){
    setInterval(writeCom, randomCom())
}
newTime()

/* function deleteComment(){
    let deleteCom = localStorage.removeItem("comments")
    return deleteCom
}

deleteComment() */