const passwordBox=document.getElementById("Password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const specialcharacter="@#$%&!?";
const allchar=uppercase+lowercase+numbers+specialcharacter;
 
function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialcharacter[Math.floor(Math.random()*specialcharacter.length)];
    while(length>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordBox.value=password;

}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");

}