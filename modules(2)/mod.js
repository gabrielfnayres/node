module.exports = function(x, y){
    return x * y;
}

module.exports = class Animal
{
    constructor(name)
    {
        this.name = name;
    }

    bark()
    {
        console.log(this.name + ' bark!')
    }
}