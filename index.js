let form=document.getElementById("form");
let input=document.getElementById("input"); 
let msg=document.getElementById("msg"); 
let posts=document.getElementById("posts"); 

form.addEventListener("submit",(e)=>{ // submit button k fn//
    e.preventDefault();
    console.log("button click");
    formValidation();

})



let formValidation= ()=>{ //text input k fn//
if(input.value===""){
    msg.innerHTML="Post cannot be blank";
console.log("failure");
}
else{
    console.log("success");
    acceptData(); // invoking fn if the input has succeeded//
}

    }

let data ={} // accepting data//
let acceptData=()=>{
data ["text"]=input.value;
console.log("data pushed");
createPost();
};

// right bar me recent posts jo submit honge vo h UPLOADING POSTS ON SCREEN//
let createPost=()=>{ 
posts.innerHTML+=`<div> 
<p>${data.text}</p>
<span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletePost(this)" class="fa-regular fa-trash-can"></i> 
</span>
</div>
`;
input.value="";
}; 
// after posting the the input box will get reset//
// ADDED THIS AS A TEMPLATE CZ NEW POST EK LINE ME ARA THA //
 //+= made prev data to not GET DELETED

// invoked delte function on icon added THIS inside so that it targets to delete that particular post and not rest of them//


let deletePost=(e)=>{
e.parentElement.parentElement.remove();
};
// delete post pure div me invoke hoga kyunki posts delete krni h//

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
// we are targeting <p>${data.text}</p> joki ye parent element k sibling hai//

/* this will capture the clicked folder but to make changes we'll delete the previous it wont show but work fine innerHTML wli line*/