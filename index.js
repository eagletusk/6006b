/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   //console.log(nums2);
    for (var i = 0; i<nums2.length-1; i++){
       console.log(nums1);
      for(var j= 0; j<nums1.length; j++){
        var abc = nums1.splice(1,j,8);
        var bbc = nums1.splice(j+1,1,abc);
        console.log(nums1);
         console.log('a');
      }
    }
};



var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;
merge(nums1,m,nums2,n);
