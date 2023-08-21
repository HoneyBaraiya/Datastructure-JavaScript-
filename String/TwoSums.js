// Given an array of integers numbers and an integer target
// return indices of the two numbers such that they add up to target
// eg: input: nums=[2,7,11,15] target=9
//     output: [0,1] because nums[0]+nums[1]=9


// solution 1: Brute Force solution

const twoSum=(nums,target)=>{
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {

            if(nums[i]+nums[j]===target)
            {
                return [i,j]
            }
    
        }
    }
    return "invalid target";
}

console.log(twoSum([2,7,1,15],9));


// solution 2: using Object

/*
nums[2,7,11,15] taget=26
obj{
    2:0 // 26-2=24 which is not exist in object so I just add the index of array in the object
    7:1  //26-7=19
    11: 2  //26-11=15 which is not ancountered yet
    15:    //26-15=11 which is in object, so return indexes [2,3]
}
*/

const twoSum2=(nums,target)=>{
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[target-nums[i]]>=0){
            return ([obj[target-nums[i]],i]);
        }
        else    
            obj[nums[i]]=i;
    }
    return "Invalid target"
}
console.log(twoSum2([2,7,11,15],26));
