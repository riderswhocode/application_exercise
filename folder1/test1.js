function sayhi(str){
    return new Promise(output => {
        setTimeout(() => {
            output(`Hello ${str} from test1.js`);
        }, 3000)
    })
}

async function test1(data) {
    console.log(`Say hello to ${data} after 5 seconds delay`)
    console.log('Waiting for the await function...')
    const result = await sayhi(data)
    console.log(result)
}

module.exports =  { test1 }