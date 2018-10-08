var xSetLan = {
    lan : "cn",//语言类型，默认英语
};

var lanContent = {
    cn : {
        "Head top points:" : "头顶点：",
        "Head top content" : "上下调节，使得轮廓贴合面部和后脑勺，注意考虑头发高矮，如图：",
        "Underarm points:" : "腋下点（胸围点）：",
        "Underarm content" : "将腋下点调节至双臂的腋下（手臂和身体的夹缝处）",
        "Side waistline point:" : "侧裤腰点：",
        "Side waistline content" : "通过调节侧裤腰线，使得侧裤腰线指向用户日常喜好扎皮带的位置",
        "Calf point:" : "小腿点：",
        "Calf content" : "调节小腿边缘，若服装厚度较厚，可以往里收，如图：",
    },
    
    jp : {
        "Head top points:" : "頭頂点：",
        "Head top content" : "上下の調整は、輪郭が頭と頭の後ろにフィットするように、図のように頭の高さに注意してください：",
        "Underarm points:" : "腋下点（胸胸点）：",
        "Underarm content" : "腕の腕（腕と体の間の隙間）に溜まり点を調整する",
        "Side waistline point:" : "サイドウエストポイント：",
        "Side waistline content" : "サイドのズボンのウエストラインを調節することにより、ズボンのウエストラインは、ベルトの使用者の毎日の好みの位置を指し示す",
        "Calf point:" : "太もものポイント：",
        "Calf content" : "ふくらはぎの縁を調整する。衣服の厚さが厚い場合は、図に示すように、内側に集めることができます：",
    },
    
    en : {
        "Head top points:" : "Head top points:",
        "Head top content" : "Adjust these points up and down so that the curve fits well the head and face shapes.",
        "Underarm points:" : "Underarm points:",
        "Underarm content" : "Adjust the points to where the torso is connected with the arms at the chest level.",
        "Side waistline point:" : "Side waistline point:",
        "Side waistline content" : "Adjust the point to the position of waistline level at the side. Waistline definition can be adjust to the user’ s preference.",
        "Calf point:" : "Calf point:",
        "Calf content" : "Adjust the point to closely fit to the calf, taking into consideration of the fitting and thickness of the clothing.",
    },
    //set-lan="xx"
};

//js往html中插入文字使用的函数
function xGetContent(m){
    //获取文字
    var lan = xSetLan.lan;     //语言版本
    //选取语言文字
    switch(lan){
        case 'cn':
            var t = lanContent.cn[m];
            break;
        case 'jp':
            var t = lanContent.jp[m];
            break;
        default:
            var t = lanContent.en[m];
    }

    //如果所选语言的json中没有此内容就选取其他语言显示
    if(t==undefined) t = lanContent.cn[m];
    if(t==undefined) t = lanContent.en[m];
    if(t==undefined) t = lanContent.jp[m];

    if(t==undefined) t = m;

    return t;
}   

//绑定选择语言的事件
(function bindChooseLan() {
    let chooseLan = document.getElementsByClassName('choose-lan');
    let len =  chooseLan.length;
    for(let i = 0; i < len; i++) {
        
         chooseLan[i].addEventListener('click', () => {
            xSetLan.lan =  chooseLan[i].getAttribute("data-lan");
    
            $('[set-lan]').each(function(){
                var me = $(this);
                var a = me.attr('set-lan');
             
                //选取语言文字
                switch(xSetLan.lan){
                    case 'cn':
                        var t = lanContent.cn[a]; 
                        break;
                    case 'en':
                        var t = lanContent.en[a];
                        break;
                    default:
                        var t = lanContent.jp[a];
                }
             
                //如果所选语言的json中没有此内容就选取其他语言显示
                if(t==undefined) t = lanContent.cn[m];
                if(t==undefined) t = lanContent.en[m];
                if(t==undefined) t = lanContent.jp[m];
    
                //如果还是没有就跳出返回他的标识
                if(t==undefined) t = m;   
                
                me.html(t);
            });
    
        });
    }
})();
    
//按照选择的语言初始化文字
$('[set-lan]').each(function(){
    var me = $(this);
    var a = me.attr('set-lan');
    switch(xSetLan.lan){
        case 'cn':
            var t = lanContent.cn[a]; 
            break;
        case 'en':
            var t = lanContent.en[a];
            break;
        default:
            var t = lanContent.jp[a];
    }

    //如果所选语言的json中没有此内容就选取其他语言显示
    if(t==undefined) t = lanContent.cn[a];
    if(t==undefined) t = lanContent.en[a];
    if(t==undefined) t = lanContent.jp[a];

    //如果还是没有就跳出
    if(t==undefined) t = m;   
    
    me.html(t);
}); 


