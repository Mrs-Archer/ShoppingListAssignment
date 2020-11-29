const $inputField = $(".la-shopping-list-input")

const $buttonAddNewItem = $(".la-button")

$inputField.keydown(function(e){
    if(e.keyCode === 13){
        addNewTask()
    }
})

function createTaskListItem(){

    const $taskListItemContainer = $(document.createElement("div"))
    .addClass("la-task-list-item-container")

    
    const $taskListItem = $(document.createElement("div"))
    .addClass("la-shopping-list")
    .html($inputField.val())
    .click(function(){
        $checkBox.click();
    })

    const $checkBox = $(document.createElement("input"))
    .addClass("la-check-box")
    .prop("type", "checkbox") 
    .on("click" , function(){
        $taskListItem.toggleClass("la-cross-out-item")  
    })

    const $removeButton = $(document.createElement("button"))
    .addClass("la-task-item-remove")
    .html('Delete')
    .on("click", function(){
        $taskListItemContainer.remove();
    });

   return $taskListItemContainer.append( $checkBox, $taskListItem, $removeButton)
}

function addNewTask(){
    $(".la-warning-message").remove()

    if(!$inputField.val()){
        $(".la-input-container")
        .append("<div class='la-warning-message'>Please Enter Task Name!!!!</div>")
        return;
    }

    $(".la-all-elements").append(createTaskListItem())

    $inputField.val("")
}

$buttonAddNewItem.click(function(){
    addNewTask()
}); 


