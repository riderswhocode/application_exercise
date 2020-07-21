function sayhi(str){
    return new Promise(output => {
        setTimeout(() => {
            output(`Hello ${str} from hello.js`);
        }, 3000)
    })
}

async function hello(data) {
    console.log(`Say hello to ${data} after 5 seconds delay`)
    //setTimeout(sayhi, 5000, data)
    console.log('Waiting for the await function...')
    const result = await sayhi(data)
    console.log(result)
}

module.exports =  { hello }