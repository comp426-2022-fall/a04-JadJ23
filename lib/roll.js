export function roll(sides, dice, rolls) {
    let final_result = [];
    
    for (let outer=0; outer<rolls; outer++) {
        let final_sum = 0;
        for (let inner=0; inner<dice; inner++) {
            final_sum += Math.floor(1 + Math.random() * sides);
        }
        final_result.push(final_sum);
    }
    
    return {sides: sides, 
            dice: dice, 
            rolls: rolls, 
            results: final_result};
}