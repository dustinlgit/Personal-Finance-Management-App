document.addEventListener("DOMContentLoaded", function() {
    var dropdown_button = document.querySelector(".dropdown-button");
    var dropdown_content = document.querySelector(".dropdown-content");
    
    var add_category_from_library = document.querySelector(".dropdown-choice1");
    var add_new_category = document.querySelector(".dropdown-choice2");
    var import_from_excel_file = document.querySelector(".dropdown-choice3");

    dropdown_button.addEventListener("click", function() {
        if (dropdown_content.style.display === "block") {
            dropdown_content.style.display = "none";
            dropdown_button.textContent = "+"; 
        } else {
            dropdown_content.style.display = "block";
            dropdown_button.textContent = "-"; 
        }
    });

    if(add_category_from_library){
        add_category_from_library.addEventListener("click", function(){
            
        });
    }

    if(add_new_category){
        add_new_category.addEventListener("click", function(){
            
        });
    }

    if(import_from_excel_file){
        import_from_excel_file.addEventListener("click", function(){
            
        });
    }
});