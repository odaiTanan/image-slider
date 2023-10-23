//Get Elements
let continer=document.querySelector(".continer");
let imgindex=document.querySelector(".imgindex");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
var total=0;
//Get Data From Api
fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(
    (image)=>{ return image.json();}
).then(
    (e)=>{
        for(var i=0;i<e.length;i++){
            let my_image=document.createElement("img");
            my_image.setAttribute("src",`${e[i].url}`);
            my_image.setAttribute("index",`${i+1}`);
            if(i===0){
            my_image.classList.add("activ");
            }
            continer.appendChild(my_image);
        }
        for(var j=1;j<=e.length;j++){
            let li=document.createElement("li");
            li.setAttribute("index",j)
            if(j===1){
                li.classList.add("activ");
            }
            document.querySelector("ul").appendChild(li);
        }
        total=e.length;
        }
        
    );
//Remove Activarion From Prev In The Beggining
prev.classList.remove("activ");
//Next And Previous Handle 
next.onclick=slide;
prev.onclick=slide;
var iint=1;
function slide(e){
if(e.target.innerHTML==='next'){
    //Next Handle Event
    if(iint<total)
        {
            iint++;
            prev.classList.add("activ");
        }
        if(iint===total){
            next.classList.remove("activ");
        }
}
    //Previous Handle Event
else if(e.target.innerHTML==='prev'){
    if(iint>1)
    {
        iint--;
        next.classList.add("activ");
    }
    if(iint===1){
        prev.classList.remove("activ");
    }
    
}
//Set Required Items
imgindex.innerText=`${iint} from ${total}`;
let ima=document.querySelectorAll("img");
let lis=document.querySelectorAll("li");
//Set Activ Bullet
lis.forEach(e=>{
    e.classList.remove("activ");
});
lis[iint-1].classList.add("activ");
//Set Activ Image
ima.forEach(element => {
    element.classList.remove("activ");
});
ima[iint-1].classList.add("activ");
}
