var runAgain;

document.addEventListener("DOMContentLoaded", function ()
{
    var cursorData =
       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAACv0lEQVQ4jZXQz0uTARwG8Ge30vyRWe+bgi1zevHgQDtko14jhWI/3NT1qpu5HzC86GUwVIakEsgOYmle9RRKhxx0kA38ETZBk17mmL6IMg+i+D88XV5FM7W+5++Hh+eByWR6azQav01PT3vxP1deXj4GgJIk7SUSiTf/DEtKSsZqamro9XppNBr3YrGYDYDuWiiK4gen08nj42PKssz6+np1Y2Oj+VosiuJHu91OksxkMmxqaqIkSXvpdNp6JRZFcfwEkuTOzg6dTictFouaSqUaL8WiKE6chSS5vb1Ns9lMWZY39/f3n/8Vi6L46U9IkslkkjabjT6f71cmk6m/gC+DJJlOp2k2m+n3+5MHBwfPzmFBECYvgySpKAotFgt7enrWDw8Pn5zi6yBJqqpKt9vNcDi8fnR09BSA7kqYSCQYCAQYCoUoSRLz8/MZiUR+JpNJxwW4tLTEqakpkuT4+Dhzc3NZV1e3BCAIoLerq2tIVVXzOagoCisrK+lyuUiSo6OjrK6u5urq6hgAAUABgFsAbkAQhElZlrm1tcWGhgY2Nzd/93g8X6PRKHd3d+lyuRgMBjfn5uasAO4CyAOQBb1eP1lWVkar1cqOjo5kOBx+WVpaGvL7/STJwcFBVlVVcXl5+T0A8TTVYDBM6nQ6dnZ2bs7MzLQCMBgMhtcVFRUri4uLVBSF7e3tHBoaWp2dnX0B4A6AHAwMDNgjkchYNBptBaAHUAagHMC7QCBAkhweHmZtbS3X1tbCZ3oiB0AhgCIAJQAeAnjkcDhehUKhhVgsxlQqRbfbzZGRkZWFhQUTgGxoukBbrVjDDwDog8Fg70nX/v5+mkwmKooSApAFTedrqYI2QBGAYp/PV9fS0vKjr6+PHo+HExMT8Xg8/vgE3tRS8wDc1tILAdwDcL+7u7sVwJe2trbP8/PzjdpP9m8c+d1eG/m4uwAAAABJRU5ErkJggg==";
    var handData =
       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAclJREFUeNqsVdlugzAQxAYSIHdKHviWqv//KX2olFNJaDjcHddLF0QOpK5ksZh4djx7RBljvP8yde/DYrGwUQ6Hg+58GhZ9uVwatul0isO+WPoeiaBvs67rxvd9X/4OwHXn+RisKIrGv16veIw4Dq3KLdMF0306OjasHR5jt0aOAF9VPWUWRVHjH49HbzKZfME/n8+ZuK7psusDU7fbrXmJ49jb7XbM8hOlFAQB9hIBZEF7meHHbFVVtfTjQOv1+oJEUemMORl9mrUAZFETQOPnee7t93tvPp9/02uIxFuw2WxmaNNsNhuc1Er96Sr90+nU+KPRb4KJGTS9IEEBR4fQLnpBQrcSwCb3ZRDoSt8iLQrT2na7RaSnXcJJgZVlaTFtvRDVIEmSXp1eMa0tp4gToChTcZqm9gXCDjEXfCyzqRzdwcxcL4et0qDrLler1eA55oJr3Z0GWutBQKg9yvg7bqY7PVZRNtMh7FgaOTWMGC+lrKEXwYxspxYY1dAbdcVToCzL0K8ffD7ozHYAIpTP7fLIXHeYe2AS0EMhh2FoWwfTgvrXthSmCjLoOofP1Krn30q7OYfREgPTrTFPBzFhjZMGcz7/EWAAT+Xl7YskawUAAAAASUVORK5CYII=";

    var handCursorImg = new Image(19, 24),
        pointerCursorImg = new Image(14, 22),
        frame2 = new Image(890, 680),
        frame1 = new Image(890, 680),
        cursorCanvas = document.getElementById('cursor'),
        cursorCtx = cursorCanvas.getContext('2d'),
        backCtx = document.getElementById('back').getContext('2d'),
        introTxt = document.getElementById('introText'),
        circleAngle = 0.1, circleAnim;

    function runIntro()
    {
        introTxt.innerHTML = "Here how it works:";
        backCtx.drawImage(frame1, 0, 0);
        cursorCanvas.className = "";
        cursorCtx.clearRect(0, 0, 19, 24);
        cursorCtx.drawImage(pointerCursorImg, 0, 0);
        setTimeout(function ()
        {
            introTxt.innerHTML = "Move the mouse cursor to a wiki-link...";
            cursorCanvas.className = "cursorTransition cursorMove";
            setTimeout(changeToHand, 3880);
        }, 2000);
    }

    function changeToHand()
    {
        cursorCtx.clearRect(0, 0, 19, 24);
        cursorCtx.drawImage(handCursorImg, 0, 0);
    }
    function drawCircle()
    {
        backCtx.beginPath();
        backCtx.arc(295, 270, 20, 0, circleAngle * Math.PI);
        backCtx.stroke();
    }
    function drawCircleAnim()
    {
        introTxt.innerHTML = "Wait for it...";
        backCtx.strokeStyle = "rgb(149,49,49)";
        circleAnim = setInterval(function ()
        {
            if (circleAngle >= 2)
            {
                clearInterval(circleAnim);
                setTimeout(showHover, 40);
            }
            requestAnimationFrame(drawCircle);
            circleAngle += 0.1;
        }, 40);
    }

    function showHover()
    {
        setTimeout(function ()
        {
            backCtx.drawImage(frame2, 0, 0);
            setTimeout(function ()
            {
                introTxt.innerHTML = 'A wild hover box appears! <br> <a style="font-size:0.5em;" href="javascript:;" onclick="runAgain(); return false;">(Watch again)</a>';
            }, 40);

        }, 2390);
    }
    handCursorImg.src = handData;
    frame2.src = "img/wisp2.jpg";
    frame1.onload = function ()
    {
        backCtx.drawImage(this, 0, 0);
    }
    frame1.src = 'img/wisp1.jpg';
    cursorCanvas.addEventListener('transitionend', function () { setTimeout(drawCircleAnim, 1000); });
    pointerCursorImg.onload = function ()
    {
        runIntro();
    }
    pointerCursorImg.src = cursorData;
    runAgain = runIntro;
});

