document.getElementById("refresh-btn").onclick = function(){
    location.reload();
}

document.getElementById('start-btn').onclick = () => {
    document.getElementById('ping-value').textContent = "Testing...";
    
    const myTimeout = setTimeout(startSpeedTest, 1000);
}

function errorMsg(){
    alert("Error while Testing");
    console.log("Testing error");
}

function getSummary(ping){
    summaryList = ["Your Network Speed is Weak", "Your Network Speed is Good", "Your Network Speed is High"];
    if(ping <= 500){
        document.getElementById("summary").textContent = summaryList[0];
    }else if(ping > 500 && ping <= 1000){
        document.getElementById("summary").textContent = summaryList[1];
    }else{
        document.getElementById("summary").textContent = summaryList[2];
    }
}

function startSpeedTest(){
    const startTime = Date.now();
    const pingImg = new Image();

    pingImg.src = "https://www.google.com/images/phd/px.gif?t=" + startTime;

    pingImg.onload = () =>{
        const ping = Date.now() - startTime;
        document.getElementById('ping-value').textContent = ping + " mbps";
        getSummary(ping);
    }
    pingImg.onerror = () => {
        document.getElementById("ping-value").textContent = "Error";
        errorMsg();
    }
}

