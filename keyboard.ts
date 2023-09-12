
// This function generates a new array where for each element v[a[i]]=i; v is the new array, 
// a is the array previously given and i is the element  
export const getpositions = (keyboard:  number[]) => {

    let positions: number[] = [...keyboard]; 

    for(let poselement = 0; poselement<keyboard.length; poselement++){
        positions[keyboard[poselement]] = poselement;
    }

    return positions; 
}

// this function takes the positions of every element, and then for each unit checks the position and 
// adds the difference between the current position and the next one
export const checkvalue = (target: number, keyboard: number[]) => {

    let positions: number [] = getpositions(keyboard);
    const targetstring: string = target.toString();

    let init = 0; 
    let ans = 0; 
    for(let targetposition = 0; targetposition<targetstring.length; targetposition++){
        const num: number = parseInt(targetstring[targetposition]); 
        ans += Math.abs(init - positions[num]); 
        init = positions[num]; 
    }

    return ans; 
}

// const target: number = 1297;  

// const keyboard: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// const keyboard: number[] = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4]; 
// console.log(checkvalue(target, keyboard), "ms"); 
