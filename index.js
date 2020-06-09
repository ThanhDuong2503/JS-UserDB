const addUserButton = document.getElementById("addUser");
addUserButton.addEventListener("click", ()=> addUser());

const undoUserButton = document.getElementById("popUser");
undoUserButton.addEventListener("click", ()=> undoUser());

const findUserNameButton = document.getElementById("findUserName");
findUserNameButton.addEventListener("click", ()=> findUserByName(getSearchValue()));

const userDb = [];

function addUser() {
    let newUser= {};
    newUser.id= Number(prompt("please enter the id:"));
    newUser.name= prompt("please enter the username:");
    userDb.push(newUser);
    console.log(userDb);
}

function undoUser(){
    const deleteUser = userDb.pop();
    console.log("user deleted");
    console.log(deleteUser);
    console.log(userDb);
}

function getSearchValue() {
    return prompt("please enter search value:").toLowerCase();
}

function findUserByName(userName){
    console.log(userDb.find(userDBentry => userDBentry.name.toLowerCase() === userName));
}