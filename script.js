var canvas = document.getElementById("canvas")

var ctx = canvas.getContext("2d")

var radius = canvas.height / 2
ctx.translate(radius, radius)
radius = radius * 0.90

drawClock()

function drawClock(){
    drawFace(ctx, radius)
    drawNumbers(ctx, radius)
    drawTime(ctx, radius)
}


function drawFace(ctx, radius)
{

    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
    grad.addColorStop(0, '#333')
    grad.addColorStop(0.5, 'white')
    grad.addColorStop(1, '#333')

    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    ctx.strokeStyle = grad
    ctx.lineWidth = radius * 0.1
    ctx.stroke()


    for(let sec = 0; sec < 60; sec++)
    {
        let ang = (sec * Math.PI) / 30
        let x1 = (radius * 0.9) * Math.sin(ang)
        let y1 = -(radius * 0.9) * Math.cos(ang)
        let x2, y2

        if(sec % 5 === 0){
            // Marks at 5s intervals (5s, 10s, 15s, 20s, 25s etc.)
            x2 = (radius * 0.85) * Math.sin(ang)
            y2 = -(radius * 0.85) * Math.cos(ang)
            ctx.strokeStyle = 'red'
            ctx.lineWidth = radius * 0.02
        }
        else{
            x2 = (radius * 0.89) * Math.sin(ang)
            y2 = -(radius * 0.89) * Math.cos(ang)
            ctx.strokeStyle = '#333'
            ctx.lineWidth = radius * 0.02
        }

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }


    ctx.beginPath()
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
    ctx.fillStyle = '#333'
    ctx.fill()
}