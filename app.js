var list = document.getElementById("thoughts");
var add = document.getElementById("addButton");
add.addEventListener("click", addThought);

var processed; //current element

function addThought(){
    var inputThought = document.getElementById("inputThought").value;
    var li = document.createElement("li");
    var content =  '<a href="#choose" data-toggle="modal" data-target="#choose" >' + inputThought + '</a>';
    li.innerHTML = content;
    listener(li);
    list.insertBefore(li, list.firstChild);
    document.querySelector("#formthought").reset();
}

//addlistener
function listener(el){
   el.addEventListener("click", function(){
       processed = el;
   });
   console.log(processed);
}

//removebutton
function removeThought(){
    processed.remove();
    $('#choose').modal('toggle');
}
document.getElementById("removebutton").addEventListener("click", removeThought);


//editbutton
function editButton(){
   var edit=  document.getElementById("editThought");
    edit.value = processed.firstChild.innerHTML;
    document.getElementById("savebutton").addEventListener("click", function(){
        processed.firstChild.innerHTML = edit.value;
        $('#edit').modal('toggle');
    });
   edit.addEventListener("keydown", function (e) {
        if(e.keyCode == 13){
            e.preventDefault();
            processed.firstChild.innerHTML = edit.value;
            $('#edit').modal('toggle');
        };
     });
    
}
document.getElementById("editbutton").addEventListener("click", editButton);

//enter key
document.getElementById("inputThought").addEventListener("keydown",function (e) {
    if(e.keyCode == 13){
        e.preventDefault();
        addThought();
    };
 });




//add listener to all
var allcontent = document.querySelectorAll("li");
for (let i = 0; i<allcontent.length; i++){
    listener(allcontent[i]);
}

