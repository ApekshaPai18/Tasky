//  console.log("hello,This is JS");
// var name="Apeksha";
// var year=2002;
// console.log(name);
// console.log(year);


// var num=[1,2,3,4,100,"apeksha"];
// console.log(num);
// console.log(num[2]);


// var obj={
//     name:"Apeksha",
//     id:30,
//     test:["fail","pass","fail"]
// }
// console.log(obj);



// for loop

// for(var i=0;i<=100;i++)
//  console.log(i);

 //while

//  var num=0;
//  while(1){
//     if(num%5==0){
//     console.log(num);
//     }
    
//  }

//do while

// var num=0;
// do{
//     if(num%5===0)
//     {
//         console.log(num);

//     }num++;
// }while(num<=100);


//FUNCTIONS

// const items={
//     food:1000,
//     drinks:100,

// };

// var cart=0;
// function addToCart(item)
// {
//     return cart+item;
// }
//     function addCartValues(item){
//     cart=addToCart(item);
// }

// // addCartValues(items.food);


// addToCart(items.food);
// // addToCart(items.drinks);

// console.log("cart:",cart);
// var cart;


//ARRAYS

// var myArray=[1,2,3,4];
// console.log(myArray);
// myArray.push(7);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);


//recurssive

// var num=0;
// function printNum(){
//     console.log(num);
//     num++;

//     if(num<=10)
//     {
//         printNum();
//     }
//     else{
//         console.log("chal nikal")
//         return;
//     }
// }
// printNum();

// function getArray(){
//     return[1,3];
// }

// const [x,y,z]=getArray();
// console.log(x);
// console.log(y);
// console.log(z);


// var myArray=[1,2,3];
// const newArray=myArray.map((e)=>(e+1));
// console.log(myArray);
// console.log(newArray);



//ES6
// function outPut(name){
//     if(name){
//         console.log("Hello"+name);
//     }
//     else{
//         console.log("hello stranger");
//     }
// }
//     outPut();

// function hello(name="world"){
//     console.log("hello "+name);
// }
// hello();


const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);
const globalStore=[];
const generateNewCard =(taskData)=>
    `
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card" width="420" height="516px">
        <div class="card-header d-flex justify-content-end gap-2" width="150" height="300">
            <button type="button" class="btn btn-outline-success"><i
                    class="fa-solid fa-pencil"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="card-body">
            <img src="${taskData.imageUrl}" class="card-img-top" alt="image" width="150" height="300">
            <h5 class="card-title mt-3 fw-bold text-primary"> ${taskData.taskTitle}</h5>
            <p class="card-text">${taskData.taskDescription}</p>
            <a href="#" class="btn btn-primary">${taskData.taskType}</a>
        </div>
    </div>
</div>
`;


const loadInitialCardData = () => {
    //localstorage to get tasky card data
    const getCardData =localStorage.getItem("taskY");

    //covert to nrmal object
    const {cards} = JSON.parse(getCardData);

    //loop over those arrays of task object to create HTML card,inject it to DOM
    cards.map((cardObject)=> {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

        //update our global store
        globalStore.push(cardObject);
    }
    
    )
};


const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value

    };
    
  

taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("taskY",JSON.stringify({cards:globalStore}));


};

