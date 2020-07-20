const input = document.querySelector("#submit");
   
input.addEventListener("click", () =>
{
    //Citation: Email with javascript. stackoverflow.com
    //Link: https://stackoverflow.com/questions/14268796/how-do-i-send-email-with-javascript-without-opening-the-mail-client
    link = "mailto:dinh_k_thai@hotmail.com?subject=Message: "
        +document.getElementById("subject").value
        +"&body="+document.getElementById("message").value
        +"\n\n Email: "+document.getElementById("email").value
        +"\n\n From "+document.getElementById("name").value;
        window.location.href = link;
});

//Citation: JavaScript replace() String Method to Replace Bad Words and Profanity
//Link: https://www.youtube.com/watch?v=Mq5Fg-FZB-0
function block() {
	const textarea = document.getElementById("message");
	let swearwords = /feldercarb|frack|skinjob|vulgacarb/gi;
	let user1 = textarea.value;
	let user2 = user1.replace(swearwords,"######");
	document.getElementById("message").value = user2;
}
document.getElementById("submit").addEventListener("click", block);