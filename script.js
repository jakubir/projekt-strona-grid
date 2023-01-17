let pop = 150;
if(window.innerWidth > 1000)
    pop = window.pageYOffset;
window.onscroll = function(){
    let teraz = window.pageYOffset;
    if(pop > teraz)
        document.getElementById("nav").style.top = "0";
    else if(teraz+window.innerHeight >= document.body.offsetHeight-200)
        document.getElementById("nav").style.top = "0";
    else
        document.getElementById("nav").style.top = "-200px";
    if(window.innerWidth > 1000)
        pop = teraz;
}
document.querySelector("button[type='submit']").addEventListener("click", function(){
    let y = -150;
    if(window.innerWidth < 1001)
        y = -250;
    setTimeout(function(){
        window.scrollBy(0, y);
    }, 10);
})
for(i=0; i<3; i++){ 
    document.querySelectorAll(".skroty ul li")[i].addEventListener("click", function(){
        let y = -100;
        if(window.innerWidth < 1001)
            y = -200;
        setTimeout(function(){
            window.scrollBy(0, y);
        }, 10);
    })
}