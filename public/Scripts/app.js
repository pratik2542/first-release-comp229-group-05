/* Group Name: Modern Developers
Student Name - Student ID
1. Meetkumar Patel - 301220141
2. Prit Patel - 301219548
3. Kinjalkumari Dhimmar - 301239901
4. Pratiksinh Makwana - 301219863
5. Sohyeon Song - 301145311
 */


(function () {
    
    function Start()
    {
        console.log("Web pages displayed...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        // prevents the automatic deletion 
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Delete?")) 
                {
                    event.preventDefault();
                    window.location.assign('/survey-list');
                }
            });
        }
    }


    window.addEventListener("load", Start); 

})();