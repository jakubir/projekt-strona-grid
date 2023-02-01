let pop = 150;
if(window.innerWidth > 1000)
    pop = window.pageYOffset;
function scrolling(){
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
window.addEventListener("scroll", scrolling);
document.querySelector("button[type='submit']").addEventListener("click", function(){
    let y = -150;
    if(window.innerWidth < 1001)
        y = -250;
    setTimeout(function(){
        window.scrollBy(0, y);
    }, 10);
})
for(i=0; i<5; i++){ 
    document.querySelectorAll(".skroty ul li, footer .button")[i].addEventListener("click", function(event){
        event.preventDefault();
        let y = document.querySelector(this.childNodes[0].getAttribute("href")).offsetTop;
        if(window.innerWidth < 1001)
            y -= 200;
        else
            y -= 100;
        window.removeEventListener("scroll", scrolling);
        scroll({
            top: y,
            behavior: "smooth"
        });
        if(window.innerWidth > 1000)
            document.getElementById("nav").style.top = "0";
        else 
            document.getElementById("nav").style.top = "-200px";
        setTimeout(function(){
            window.addEventListener("scroll", scrolling);
        }, 800);
    })
}