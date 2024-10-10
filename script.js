// to refresh the page
document.getElementById("refresh-btn").onclick = function(){
    location.reload();
}

document.getElementById('start-btn').onclick = () => {
    document.getElementById('download-speed').textContent = "Testing...";
    document.getElementById('upload-speed').textContent = "Testing...";
    document.getElementById('ping-value').textContent = "Testing...";

    startSpeedTest();
}



function startSpeedTest(){
    const startTime = Date.now();
    const pingImg = new Image();

    pingImg.src = "https://www.google.com/images/phd/px.gif?t=" + startTime;

    pingImg.onload = () =>{
        const ping = Date.now() - startTime;
        document.getElementById('ping-value').textContent = ping + " ms";

        calculateDownloadSpeed();
    }
    pingImg.onerror = () => {
        document.getElementById("ping-value").textContent = "Error";
    }
}

function calculateDownloadSpeed(){
    const downloadsize = 5 * 1024 * 1024;
    const startTime = Date.now();

    const downloadImg = new Image();
    downloadImg.src = "https://fast.com/app-ed402d.js";

    downloadImg.onload = () => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        const speedBps = (downloadsize * 8) / duration;
        const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);

        document.getElementById("download-speed").textContent = speedMbps + " Mbps";

        calculateUploadSpeed();
    }

    downloadImg.onerror = () => {
        document.getElementById('download-speed').textContent = "Error";
    }
}

function calculateUploadSpeed() {

    const uploadSize = 2 * 1024 * 1024; 
    const startTime = Date.now();

    setTimeout(() => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000; 
        const speedBps = (uploadSize * 8) / duration; 
        const speedMbps = (speedBps / (1024 * 1024)).toFixed(2); 

        document.getElementById("upload-speed").textContent = speedMbps + " Mbps";
    }, 2000); 
}
