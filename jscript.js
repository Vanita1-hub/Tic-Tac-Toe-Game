let main=document.querySelector(".main");
let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector(".new-btn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let turn0="true";
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const resetGame = () =>
{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
     main.classList.remove("hide");
     count=0;
}
const enableBox = () =>
{
    for(let b of box)
    {
        b.disabled = false;
        b.innerText="";
    }
}
let count=0;
box.forEach((b)=>
{
    
    b.addEventListener("click", ()=>{
        console.log(count++);
        console.log("clicked");
        if(turn0)
        {
            b.style.color="blueviolet";
            b.innerText="X";
            turn0=false;
        }
        else
        {
            b.style.color=" rgb(66, 13, 152)";
            b.innerText="O";
            turn0=true;
        }
        b.disabled=true;
        checkWinner();
        if(count===9)
        {
            tieMatch();
            count=0;
        }
        
    })
});
const disablebox = () =>
{
    for(let b of box)
    {
        b.disabled = true;
    }
}
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations! Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    newbtn.classList.remove("hide");
    main.classList.add("hide");
    disablebox();
    
}
const tieMatch=()=>
{
    msg.innerText=`Oops! No Winners..., Try Again.`;
        msgContainer.classList.remove("hide");
    newbtn.classList.remove("hide");
    main.classList.add("hide");
      disablebox();

}
const checkWinner=()=>
{
    for(let pattern of winPatterns)
    {
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!="")
    {
        if(pos1val===pos2val && pos2val===pos3val)
        {
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
        //  else if(!pattern.includes(""))
        // {
        //     tieMatch();
        // }
    }
   
}
}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);