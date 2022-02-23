//Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

//Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length<=0) return [-1,-1];
    
    let start = 0;
    let end = nums.length-1;
    firstIndex = findIndex(start, end, 'left', nums, target);
    lastIndex = findIndex(start, end, 'right', nums, target);
    return [firstIndex, lastIndex];
}
   
    function findIndex (start, end, direction, nums, target){
            if(start>end){return -1;}
        
            //1. find the mid
            let mid = start + Math.floor((end - start)/2);
            //2. if we find the target at the middle
            if(nums[mid] == target){
                if(direction == 'left'){
                   let index = findIndex (start, mid-1, direction, nums, target);
                    if(index > -1 && index < mid) {return index;}
                 return mid;
                }
                else{
                    let index = findIndex (mid+1, end, direction, nums, target);
                    if(index>-1 && index>mid) {return index;}
                    return mid;
                }
            }
            //3. target is greater than middle, search second half
            if(nums[mid]<target){
                //search right
               return findIndex (mid+1, end, direction, nums, target);
            }
            //4. target is lesser than middle, search first half
            if (nums[mid]>target) {
                //search left
                return findIndex(start, mid-1, direction, nums, target);
            }
    }
