//  Define UI vars

const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clrbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');

// loadEventListener();

// function loadEventListener()
// {
//   document.addEventListener('DOMContentLoaded',gettasks);  
//   form.addEventListener('submit',addTask);
//   tasklist.addEventListener('click',removeTask);
//   clrbtn.addEventListener('click',clearTask);
//   filter.addEventListener('keyup',filterTask);
// }


// function addTask(e)
// {

// if(taskinput.value === ''){

//     alert('Add  a Task');

// }

//   const li=document.createElement("li");

//   li.className="collection-item";
   
//    li.appendChild(document.createTextNode(taskinput.value));
//   const link=document.createElement('a');
   
//   link.className='delete-item secondary-content';

//   link.innerHTML = '<i class="fa fa-remove"></i>';
  
//   li.appendChild(link);

//   tasklist.appendChild(li);

//   storeInLocalStorage(taskinput.value);

//   taskinput.value="";

//   e.preventDefault();

// }

// function gettasks()
// {
//     let tasks;
// if(localStorage.getItem('tasks')===null){
//     tasks=[];
// }else{
//     tasks=JSON.parse(localStorage.getItem('tasks'));
// }

// tasks.forEach(function(task)
// {
//     const li=document.createElement("li");

//     li.className="collection-item";
     
//      li.appendChild(document.createTextNode(task))   ;
//     const link=document.createElement('a');
     
//     link.className='delete-item secondary-content';
  
//     link.innerHTML = '<i class="fa fa-remove"></i>';
    
//     li.appendChild(link);
  
//     tasklist.appendChild(li);
// })
// }

// function storeInLocalStorage(task)
// {
// let tasks;
// if(localStorage.getItem('tasks')===null){
//     tasks=[];
// }else{
//     tasks=JSON.parse(localStorage.getItem('tasks'));
// }

// tasks.push(task);

//    localStorage.setItem('tasks',JSON.stringify(tasks));

// }

// function removeTask(e)
// {
//   if(e.target.parentElement.classList.contains('delete-item')){
//       if(confirm("Are You Sure ? Do You Want To Delete ? ")){
//         e.target.parentElement.parentElement.remove();
//         removefromLocalstorage(e.target.parentElement.parentElement);    
//       }
//     }
// }

// function removefromLocalstorage(elmnt)
// { 
//     let tasks;
// if(localStorage.getItem('tasks')===null){
//     tasks=[];
// }else{
//     tasks=JSON.parse(localStorage.getItem('tasks'));
// }

// tasks.forEach(function(task,index){
//     if(elmnt.textContent===task){
//         tasks.splice(index,1);
//     }

// })
//   localStorage.setItem('tasks',JSON.stringify(tasks));       
// }

// function filterTask(e)
// {
//  const text=e.target.value.toLowerCase();

//  document.querySelectorAll('.collection-item').forEach(function(task){
//     const item=task.firstChild.textContent;
//     if(item.toLowerCase().indexOf(text) != -1){
//         task.style.display="block"
//     }
//     else
//     {
//         task.style.display="none";
//     }
//  } );

//   e.preventDefault();
// }

// function clearTask(e)
// {
//    if(confirm("Are you Sure Do You Want To Delete all")){
//     while(tasklist.firstChild){
//         tasklist.removeChild(tasklist.firstChild);
//       }
//     }

//     localStorage.clear();

//    e.preventDefault();
// }








loadeventlistener();

function loadeventlistener() {
     document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit', addTask);
    tasklist.addEventListener('click', removeTask);
    clrbtn.addEventListener('click', cleartasks);
    filter.addEventListener('keyup', filtertask);
}

// Get Task From LS

function getTasks(){
    let tasks;
    
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        // ADD class
        li.className = 'collection-item';
        // create Text Node
        li.appendChild(document.createTextNode(task));
        // create new link elemenet 
        const link = document.createElement('a');
    
        link.className = 'delete-item secondary-content';
    
        link.innerHTML = '<i class="fa fa-remove"></i>';
    
        li.appendChild(link);
    
        tasklist.appendChild(li);
    })
}

//

function addTask(e) {

    if (taskinput.value === "") {
        alert("Add a task")
    }
    // create a li Element
    const li = document.createElement('li');
    // ADD class
    li.className = 'collection-item';
    // create Text Node
    li.appendChild(document.createTextNode(taskinput.value));
    // create new link elemenet 
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    tasklist.appendChild(li);

    storeTaskInLocalStorage(taskinput.value);

    taskinput.value = '';

    e.preventDefault();

}

function storeTaskInLocalStorage(task){

    let tasks;
    
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

function removeTask(e) {

    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure do you want to delete?")) {
            e.target.parentElement.parentElement.remove();
            removefromlocalstorage( e.target.parentElement.parentElement);
        }
    }
}

function removefromlocalstorage(item){
    let tasks;
    
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task,index){
        if(item.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function cleartasks(e) {

    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
    
     clearFromLocal();
    taskinput.value = '';
}
function clearFromLocal(){

    localStorage.clear();
}

function filtertask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
  }
