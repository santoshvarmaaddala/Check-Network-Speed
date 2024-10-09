// to refresh the page
document.getElementById("refresh-btn").onclick = function(){
    location.reload();
}

document.getElementById('start-btn').addEventListener('click', function(){
    measureSpeed();
})