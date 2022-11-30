export function roll(sides, dice, rolls) {
    //initialize array
    let res = [];
    
    for (let outer=0; outer<rolls; outer++) {
        let sum = 0;
        for (let inner=0; inner<dice; inner++) {
            sum += Math.floor(1 + Math.random() * sides);
        }
        // push to array
        res.push(sum);
    }
    
    //return end values
    return {sides: sides, 
            dice: dice, 
            rolls: rolls, 
            results: res};
}