const FLAGS =["lgbt", "bi", "pan"]

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cycle_flags(){
    for(let i = 0;;i++){
        document.body.id = FLAGS[i % FLAGS.length]
        await sleep(2000);
    }
}

cycle_flags();
