const input = document.querySelector("#submit");
   
input.addEventListener("click", () =>
{
       // https://stackoverflow.com/questions/14268796/how-do-i-send-email-with-javascript-without-opening-the-mail-client
        link = "mailto:dinh_k_thai@hotmail.com?subject=Message from"
                 +document.getElementById("Name").value
                 +"&body="+document.getElementById("Email").value;
        window.location.href = link;
}


    
    
    
    
    
    
    /*console.log("Script starting!");
    // querySelector will use CSS selector syntax to select HTML elements.
    
    // <input type="text">
    const input = document.querySelector("input");
    // <a href="#">Add Item</a>
    const addButton = document.querySelector("a");
    // <p id="error-output"></p>
    const error = document.querySelector("#error-output");

    addButton.addEventListener("click", () =>
        {
            newListItem.innerText = input.value.trim();
        }


    
        function othername() {
            input = document.getElementById("userInput").value;
            alert(input);
        }*/


    /*function myFunction() { 
        var x =  
            document.getElementById("myText").value; 
        
        document.getElementById( 
          "demo").innerHTML = x; 
    }
    */

