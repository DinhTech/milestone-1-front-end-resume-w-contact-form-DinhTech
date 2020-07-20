const input = document.querySelector("#submit");
   
input.addEventListener("click", () =>
{
    //Citation: Email with javascript. stackoverflow.com
    //Link: https://stackoverflow.com/questions/14268796/how-do-i-send-email-with-javascript-without-opening-the-mail-client
    link = "mailto:dinh_k_thai@hotmail.com?subject=Message: "
        +document.getElementById("subject").value
        +"&body="+document.getElementById("message").value
        +document.getElementById("name").value
        +document.getElementById("email").value;
        window.location.href = link;
});