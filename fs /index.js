const fs = require('fs').promises
const { stat } = require('fs');
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))



async function readdirec(rootDir)
{
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

async function walk(files, rootDir)
{
    for(let f of files)
    {
        const fileFullPath = path.resolve(rootDir, f)
        const stats = await fs.stat(fileFullPath)
        if(stats.isDirectory())
        {
            readdirec(fileFullPath)
            continue
        }

        if(/\.git/g.test(fileFullPath)) continue
        if(/\.node-modules/g.test(fileFullPath)) continue

        console.log(f)
    }
}
readdirec('/home/fnayres/Desktop/NODE')
