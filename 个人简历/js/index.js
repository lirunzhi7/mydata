let $aud = $('.box>audio')
let $icon=$('.box>.body>.ppp')
let $pigs = $('.box>.head>ul>.pig')
let $title = $('.box>.title')
let $box = $('.box')
let $head = $('.box>.head')
let $shine = $('.box>.body>.shine')
let $foot = $('.box>.foot')
let $box2 = $('.box>.box2')
function click(){
    $icon.tap(function(){
        if($aud[0].paused){
            $aud[0].play();
        }else{
            $icon.removeClass('ppp')
            $aud[0].pause();
        }
    })
    setTimeout(()=>{
        $pigs.css({
        transform: 'translateX(.2rem)'
       })
    },2000)
     
    $box.tap((e)=>{
        $head.css({
            display:'none'
        })
        $shine.css({
            display:'none',
        })
        $foot.css({
            display:'none'
        })
        $box2.css({
            opacity:'1'
        })
        $title.css({
            animation:'move10 1.5s ease-in-out infinite'
        })
    })
}
click()

