let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

this.num = window.prompt('how many balls do you want: ')

this.scree ={
    width : window.innerWidth,
    height : window.innerHeight
}

this.mouse = {
    x : screen.height / 2,
    y : screen.width / 2
}




class ball{
    constructor(x,y,c){
        this.gravity = 1
        this.friction = 0.8
        this.baseR = 20
        this.r = this.baseR
        this.x = x || ranint(0+this.r,scree.width-this.r)
        this.y = y || ranint(0+this.r,scree.height-this.r)
        this.vx = (Math.random() -0.5) * 10
        this.vy = (Math.random() +0.5) * 10
        this.colors = ["red", "white", "blue", "black", "yellow"];
        this.rancol = c || this.colors[Math.floor(Math.random() * this.colors.length)];
        this.draw()
    }
    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,2*Math.PI)
        c.fillStyle = this.rancol
        c.fill()
    }
    update(){
        if(this.y + this.r + this.vy >= window.innerHeight){
            this.vy = -this.vy * this.friction
            this.vx = -this.vx * this.friction
        }else{
            this.vy += this.gravity
        }
        if(this.x + this.r + this.vx >= window.innerWidth || this.x + this.r + this.vx <= 0){
            this.vx = -this.vx 
        }
        
        this.y += this.vy
        this.x += this.vx
        this.draw()
    }
    
}




class can{
    constructor(){
        this.balls = []
        for(let i=0;i<num;i++){
            this.balls.push(new ball())
        }
    }
    animate(){
        c.clearRect(0,0,window.innerWidth,window.innerHeight)
        this.balls.forEach(b=>{
            b.update()
        })
        requestAnimationFrame(this.animate.bind(this))
    }

}



if(num > 1000){
    window.alert('this too much, please select less than 1000 ')
    window.location.reload()
}else{
    this.mycan = new can()
    mycan.animate()
}



//event liseners-----------------------------------------------------
window.addEventListener('click',(e)=>{
    mycan.balls.push(new ball(e.clientX,e.clientY))
})

window.addEventListener('keydown',(e)=>{
    if(e.key == 'g'){
        mycan.balls.push(new ball(null,null,'green'))
    }
    if(e.key == 'p'){
        mycan.balls.push(new ball(null,null,'pink'))
    }
})

// window.addEventListener('mousemove',(e)=>{
//     mycan.balls.forEach((ball)=>{
//         let distance = Math.sqrt(Math.pow(e.clientX-ball.x,2),Math.pow(e.clientY-ball.y,2))
//         if(distance<100 && ball.r < ball.baseR * 4){
//             ball.r +=1
//         }
//         else if(ball.r > ball.baseR){
//             ball.r -= 1
//         }
//     })
// })

window.addEventListener('resize',(e)=>{
    canvas.height = scree.height
    canvas.width = scree.width
})



function ranint(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

