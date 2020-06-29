const FLAGS =["lgbt", "bi"]

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cycle_flags(){
    for(let i = 0;;i++){
        document.body.id = FLAGS[i % FLAGS.length]
        await sleep(3000);
    }
}

cycle_flags();
