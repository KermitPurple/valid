async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cycle_flags(){
    for(let i = 0;;i++){
        alert(i);
        await sleep(5000);
    }
}

// cycle_flags();
