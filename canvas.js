var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
var cWidth = window.innerWidth;
var canX = cWidth * 0.5 - 200;
var body = document.body;
window.onresize = function(){
    cWidth = window.innerWidth;
    canX = cWidth * 0.5 - 200;
}


ctx.fillRect(90,30,50,50);

ctx.fillRect(20,100,50,50);

ctx.fillRect(40,200,50,50);

ctx.fillRect(90,290,50,50);

var recN = {
    0 : {
        x : 90,
        y : 30
    },
    1 : {
        x : 20,
        y : 100
    },
    2 : {
        x : 40,
        y : 200
    },
    3 : {
        x : 90,
        y : 290
    }, 
};

document.addEventListener("mousemove",function(e){
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    for(let i = 0; i < 4; i++){
        let rec = recN[i];
        let divNum = "div" + i;
        let haveDiv = document.getElementById(divNum);
        let trueX = rec.x + canX;
        let divX = trueX + 70;
        let divY = rec.y + 10;
        let tipTitle;
        let tipContent;
        switch(i) {
            case 0 : 
                tipTitle = xGetContent("Head top points:");
                tipContent = xGetContent("Head top content");
                break;
            case 1 :
                tipTitle = xGetContent("Underarm points:");
                tipContent = xGetContent("Underarm content");
                break;
            case 2 :
                tipTitle = xGetContent("Side waistline point:");
                tipContent = xGetContent("Side waistline content");
                break;
            case 3 :
                tipTitle = xGetContent("Calf point:");
                tipContent = xGetContent("Calf content");
                break;
        }
        if(mouseX >= trueX && mouseX <= trueX + 50 && mouseY >= rec.y && mouseY <= rec.y + 50) {
            if(!haveDiv) {
                let tipDiv = document.createElement("div");
                tipDiv.setAttribute("id", divNum);
                tipDiv.setAttribute("class", "tip-div");
                tipDiv.setAttribute("style", `position:absolute;top:${divY}px;left:${divX}px;`);
                tipDiv.innerHTML = `<img class='tip-img' src='./${i}.png'>
                                    <div class="tip-container">
                                        <p class="tip-title">${tipTitle}</p>
                                        <p class="tip-content">${tipContent}</p>
                                    </div>`;  
                body.appendChild(tipDiv);   
            }
        }else{
            if(haveDiv) {
                body.removeChild(haveDiv);    
            }
        }
    }  
});

