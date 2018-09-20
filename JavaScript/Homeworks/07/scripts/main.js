var some = function(arr, callback, thisArg) {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};

var every = function(arr, callback, thisArg) {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};

var reduce = function(arr, callback, startValue) {
    var i, length = arr.length, result = startValue;
    for (i = 0; i < length; i = i + 1) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};
