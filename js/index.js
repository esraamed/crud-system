var bookmarkName=document.getElementById("name");
var websiteURL=document.getElementById("url");
var SearchInput=document.getElementById("search");
var btnadd=document.getElementById("btnadd");
var btnupdate=document.getElementById("btnupdate");
var indexup=0;
var booklist=[];

if(localStorage.getItem("bookContainer")!= null){
    booklist=JSON.parse(localStorage.getItem("bookContainer"))
displayBook()
}

function addItems(){
 if (validationName()== true && validationurl()==true){
    var item={name:bookmarkName.value,
        url:websiteURL.value
    }
   
    booklist.push(item);
    localStorage.setItem("bookContainer", JSON.stringify(booklist))
    
    displayBook()
    clearData()
 }
 
    

}

function displayBook(){
    var cartona=``;
    for(var i=0;i<booklist.length;i++){
        cartona+=` <tr>
        <td>${i+1}</td>
        <td>${booklist[i].name}</td>
        <td><a href="${booklist[i].url}" target="_blank" class="text-white btn btn-success px-3" ><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button onclick=" deleteItem(${i})" class="text-white btn btn-danger px-3" ><i class="fa-solid fa-trash"></i> Delete</button></td>
        <td><button onclick="setformupdate(${i})" class="text-white btn btn-warning px-3"><i class="fa-solid fa-wrench me-1"></i>Update</button></td>
    </tr>`
    }
    document.getElementById("data").innerHTML=cartona;

}

function clearData(){
    bookmarkName.value=null;
    websiteURL.value=null;

}
function deleteItem(index){
    booklist.splice(index,1);
    displayBook()


}
function validationName(){
   var messagename=document.getElementById("messagename"); 
 var text= bookmarkName.value; 
 var regex= /^[a-z][a-z]{3,20}$/;
 if(regex.test(text) == true){
    bookmarkName.classList.add("is-valid")
    bookmarkName.classList.remove("is-invalid")
    messagename.classList.add("d-none");
    return true;
 }  
 else{
    bookmarkName.classList.add("is-invalid")
    bookmarkName.classList.add("is-valid")
    messagename.classList.remove("d-none");
    return false; 
 }

}
function validationurl(){
    var urlname=document.getElementById("urlname"); 
  var text= websiteURL.value; 
  var regex= /^(ftp|http|https):\/\/[^ "]+$/;
  if(regex.test(text) == true){
     websiteURL.classList.add("is-valid")
     websiteURL.classList.remove("is-invalid")
     urlname.classList.add("d-none");
     return true;
  }  
  else{
     websiteURL.classList.add("is-invalid")
     websiteURL.classList.add("is-valid")
     urlname.classList.remove("d-none");
     return false; 
  }
 
 }
 function Search(){
    var term=SearchInput.value;
    var cartona=``;
    for(var i=0;i<booklist.length;i++){
        if(booklist[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona+=` <tr>
            <td>${i+1}</td>
            <td>${booklist[i].name}</td>
            <td><a href="${booklist[i].url}" target="_blank" class="text-white btn btn-success px-3" ><i class="fa-solid fa-eye"></i> Visit</a></td>
           
            <td><button onclick=" deleteItem(${i})" class="text-white btn btn-danger px-3" ><i class="fa-solid fa-trash"></i> Delete</button></td>
            <td><button onclick="setformupdate(${i})" class="text-white btn btn-warning px-3"><i class="fa-solid fa-wrench me-1"></i>Update</button></td>
        </tr>`
        }
        document.getElementById("data").innerHTML=cartona;
        }
     

 }
function setformupdate(indexupdate){
    bookmarkName.value=booklist[indexupdate].name;
    websiteURL.value=booklist[indexupdate].url;
    btnadd.classList.add("d-none");
    btnupdate.classList.remove("d-none");
    indexup=indexupdate;

    
}
function Update(){
    var item={name:bookmarkName.value,
        url:websiteURL.value
    }
    booklist.splice(indexup,1,item)
    localStorage.setItem("bookContainer", JSON.stringify(booklist))
    
    displayBook()
    clearData()

}
    
