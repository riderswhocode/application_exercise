const fs = require('fs')
const path = require('path')

//List all the sub-folders in the current directory
function getDirectory(){
    return fs.readdirSync(__dirname, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}
//List all the files inside the sub-directory
function getFileList(dirs){
    return fs.readdirSync(dirs, {withFileTypes: true})
    .filter(file => file.isFile())
    .map(file => file.name)
}

async function callResult(importStr,importName1){
    let importName = require(`${importStr}`);
    let output = await importName[`${importName1}`](`${importName1}`)
}

function checkAndExecute() {
    try {
        let dirList = getDirectory()
        dirList.forEach(dirs => {
            let fileList = getFileList(dirs)
            fileList.forEach(file => {
                let func_name = path.parse(file).name
                let fPath = `./${dirs}/${func_name}`
                callResult(fPath,func_name)               
            })
        })

    } catch (err) {
        console.log(err)
    }
}


async function main(){

    await checkAndExecute()

    console.log("After executing the above functions. Perform a simple addition")
    let sum = 1 + 1
    console.log(sum)

}

main()
    