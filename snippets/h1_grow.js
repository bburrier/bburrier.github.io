for(let i=0; i<=100; i++) {
    setTimeout(function(){
        var newSize = (i/10) + 'vw';
        var newOpacity = Math.max(0.01, parseFloat(i)/100);
        var h1 = document.getElementsByTagName('h1')[0];
        h1.style.fontSize = newSize;
        h1.style.opacity = newOpacity;
    }, i*20);
}