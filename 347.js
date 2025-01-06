function topKFrequent(nums, k) {
    let map = {};
    nums.forEach(n => {
        map[n] = (map[n] || 0) + 1;
    });
    let result = [];
    let sortEntries = Object.entries(map).sort((obj1, obj2) => (obj2[1] - obj1[1]));
    for(let i = 0; i < k; i++) {
        result.push(sortEntries[i][0]);
    }
    return result;
};
topKFrequent([1,1,1,2,2,3], 2);