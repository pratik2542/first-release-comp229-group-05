/*
 Group Name: Modern Developers
Student Name - Student ID
1. Meetkumar Patel - 301220141
2. Prit Patel - 301219548
3. Kinjalkumari Dhimmar - 301239901
4. Pratiksinh Makwana - 301219863
5. Sohyeon Song - 301145311
*/


//testing script

console.log('Testing My WebSite !!');

//delete
"use strict";
(function () {
    function confirmDelete() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/list';
            }
        });
    }
    function Start() {
        console.log("App Started");
        confirmDelete();
    }
    window.addEventListener("load", Start);
})();

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                // Cancels the action
                event.preventDefault();
            }
        });
    }
}



