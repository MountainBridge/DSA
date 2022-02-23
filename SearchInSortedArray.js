//Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/
//Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let pivot = nums.indexOf(Math.min(...nums));

    if(nums.length<=0){
        return -1;
    }
    
    if(nums[pivot]===target){return pivot;}

    if(nums[end]>nums[start]){
        if(nums.length===2){
            if(nums[start] === target)return start;
        if(nums[end]===target) return end;
        }else{
           return findIndex(start, end, nums, target);
        }
    }
        let leftSearch = findIndex(start, pivot-1, nums, target);
        let rightSearch = findIndex(pivot+1, end, nums, target);
        let index = leftSearch>-1?leftSearch:rightSearch;
        return index;

};

function findIndex(start, end, nums, target){
    if(start>end) {
        return -1;
    }
    
    if(start === end){
        if(nums[start] == target) {
            return start;
       }
    }
    let mid = start + Math.floor((end - start)/2);
    if(mid>-1 && nums[mid]===target){
        return mid;
    }
    if(nums[mid]>target){
       return findIndex(start, mid-1, nums, target);
    }
    if(nums[mid]<target){
        return findIndex(mid+1, end, nums, target);
    } 
};
