const div = document.getElementById('main-section');

function animate_bg(event){
    var x = event.clientX;
    var y = event.clientY;

    div.style.backgroundPosition = `0px ${y*-5/15}px`;
}