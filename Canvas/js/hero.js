function createHero(width, height, canvas, imageUrl, completeCallback) {
    var context = canvas.getContext('2d')
    var timer
    var canvasWidth = canvas.width
    var canvasHeight = canvas.height
    var x = canvasWidth / 2 - width / 4
    var y = canvasHeight - height / 2 - 20

    var hero = new Hero(x, y, width, height, imageUrl, completeCallback)
    document.onkeydown = function (event) {
        var event = event || window.event
        switch (event.keyCode) {
            case 37: {
                hero.left = true
                break
            }
            case 38: {
                hero.up = true
                break
            }
            case 39: {
                hero.right = true
                break
            }
            case 40: {
                hero.down = true
                break
            }
        }
    }
    document.onkeyup = function (event) {
        var event = event || window.event
        switch (event.keyCode) {
            case 37: {
                hero.left = false
                break
            }
            case 38: {
                hero.up = false
                break
            }
            case 39: {
                hero.right = false
                break
            }
            case 40: {
                hero.down = false
                break
            }
        }
    }
    timer = setInterval(function () {
        if (hero.left == true) hero.x -= 2
        if (hero.up == true) hero.y -= 2
        if (hero.right == true) hero.x += 2
        if (hero.down == true) hero.y += 2
    }, 10)
    return hero
}

function Hero(x, y, width, height, imageUrl, completeCallback) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = new Image()
    // 加载图片
    this.image.onload = function () {
        if (completeCallback) {
            completeCallback(this)
        }
    }
    this.image.src = imageUrl
}

Hero.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, this.x, this.y, this.width / 2, this.height / 2)
}