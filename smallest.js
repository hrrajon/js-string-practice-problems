function maxInArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const heights = [167, 190, 120, 165, 137, 265];
const small = maxInArray(heights);
console.log('Smallest person is: ', small, 'cm');
