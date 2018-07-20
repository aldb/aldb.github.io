---
layout: post
title: Big O Notation in JS
date: 2018-03-03 07:38:39.000000000 -08:00
category: programming
tags: [en,bigo,algorithm,js]
img: /assets/img/posts/2018/bigo_1_def.png
permalink: /:year/:month/:day/:title/
---


<img src="../../../../assets/img/posts/2018/bigo_1.png" class="img-fluid" alt="Big O Notations">
Big O notation focuses the worst-case scenario and can be used to describe the execution time/space by an algorithm.
Let’s now explore the most common types of Big O Notations. We'll be using vanilla JS and ECMA6 examples.


<img src="../../../../assets/img/posts/2018/3_space.png" class="img-fluid" alt="Big O Notations">

For illustrating results we'll use time(milliseconds - ms), and space(size of array).

Testing data inputs setups

For testing data space using a 3 array with different sizes: 10,000, 10,0000, and 1,000,000 elements.
{% highlight js %}
var tenThousand     = [];
var hundredThousand = [];
var oneMillion      = [];
for (var i = 1000000; i > 0; i--) {
    if (i <= 10000) {
        tenThousand.push(i);
    }
    if (i <= 100000) {
        hundredThousand.push(i);
    }
    oneMillion.push(i);
}
console.log('tenThousand:', tenThousand.length, 'hundredThousand:', hundredThousand.length, 'oneMillion:', oneMillion.length)

// 6
var tenThousand     = [...new Array(10000).keys()];
var hundredThousand = [...new Array(100000).keys()];
var oneMillion      = [...new Array(1000000).keys()];
console.log('tenThousand:', tenThousand.length, 'hundredThousand:', hundredThousand.length, 'oneMillion:', oneMillion.length)
{% endhighlight %}

For time using "console.time" and "console.timeEnd", what allow you tracking execution time in MS. Each case you can copy/paste in console terminal and play with responses.

#### O(1) - Constant time

<img src="../../../../assets/img/posts/2018/4_o_1.png" class="img-fluid" alt="O 1">

O(1) always execute at the same time (or space). For example find first element of array.
The input array could be 1 item or 10,000, 10,0000, and 1,000,000 items, but this method would still just require one "step."

{% highlight js %}
function findFirstElement(arr) {
    return arr[0];
}
console.time('O(1) - tenThousand');
findFirstElement(tenThousand);
console.timeEnd('O(1) - tenThousand');
console.time('O(1) - hundredThousand');
findFirstElement(hundredThousand);
console.timeEnd('O(1) - hundredThousand');
console.time('O(1) - oneMillion');
findFirstElement(oneMillion);
console.timeEnd('O(1) - oneMillion');
{% endhighlight %}

All execution time be less than 0,01 ms.

#### O(N) - Linear Time Algorithm

<img src="../../../../assets/img/posts/2018/5_On.png" class="img-fluid" alt="O(n)">

The worst-case scenario for test data is reverse all array elements from end to start, so its require N loop iterations.
Test case function searches by value from the end of the array to start.

{% highlight js %}
var tenThousand     = [...new Array(10000).keys()];
var hundredThousand = [...new Array(100000).keys()];
var oneMillion      = [...new Array(1000000).keys()];
function reverseArr(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.time('O(n) - tenThousand');
reverseArr(tenThousand);
console.timeEnd('O(n) - tenThousand');
console.time('O(n) - hundredThousand');
reverseArr(hundredThousand);
console.timeEnd('O(n) - hundredThousand');
console.time('O(n) - oneMillion');
reverseArr(oneMillion);
console.timeEnd('O(n) - oneMillion');
{% endhighlight %}

#### O(N2) - Quadratic Time Algorithm

<img src="../../../../assets/img/posts/2018/3_data_input_extra_space.png" class="img-fluid" alt="O(n2)">

O(N2) represents an algorithm whose performance is the square of the number of inputs. In [Selection sort](https://en.wikipedia.org/wiki/Selection_sort) algorithm time grows exponentially related to the number of inputs.

{% highlight js %}
function selectionSort(items){
    for (i=0; i < items.length; i++) {
        var min = i;

        for (k=i+1; k < items.length; k++) {
            if (items[k] < items[min]){
                min = k;
            }
        }

        if (i !== min) {
            (function swap(items, firstIndex, secondIndex){
                var temp = items[firstIndex];
                items[firstIndex] = items[secondIndex];
                items[secondIndex] = temp;
            })(items, i, min);
        }
    }
    return items;
}


console.time('O(N2) - tenThousand');
selectionSort(tenThousand);
console.timeEnd('O(N2) - tenThousand');
console.time('O(N2) - hundredThousand');
selectionSort(hundredThousand);
console.timeEnd('O(N2) - hundredThousand');

// This test case execution time really long :)
// console.time('O(N2) - oneMillion');
// selectionSort(oneMillion);
// console.timeEnd('O(N2) - oneMillion');
{% endhighlight %}

#### O(2N)

<img src="../../../../assets/img/posts/2018/7_o2n.png" class="img-fluid" alt="O(2n)">

O(2N) an algorithm whose growth doubles with each addition to the input data set.
The famous example is the recursive calculation of
[Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

{% highlight js %}

/*
   fibonacci(4)   .--------> 2 + 1 = 3
      |          /               |
      '--> fibonacci(3) + fibonacci(2)
            |    ^           
            |    '----------- 2 = 1 + 1 <----------.
1st step -> |                     ^                |
            |                     |                |
            '---->  fibonacci(2) -' + fibonacci(1)-'

 */
function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(4));


//For big numbers execution time too long, so let's use numbers: 10, 20, 30:

console.time('O(2N) - 10');
fibonacci(10);
console.timeEnd('O(2N) - 10');
console.time('O(2N) - 20');
fibonacci(20);
console.timeEnd('O(2N) - 20');
console.time('O(2N) - 30');
fibonacci(30);
console.timeEnd('O(2N) - 30');
{% endhighlight %}

#### O(log n) - Logarithms

<img src="../../../../assets/img/posts/2018/8_ologn.png" class="img-fluid" alt="O(logn)">

O(log n) most faster-sorting algorithms like QuickSort, Merge-sort.
Let's take a look [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm) algorithm example.
For test data use 10,000, 100,000, and 1,000,000 inputs. To generate random elements of an array using Math library:
arr[Math.floor(Math.random() * arr.length)]
Binary search is a used to search sorted inputs data by selecting the middle element of the data set, essentially the median, and compares it against a target value.
If the values match it will return success.

{% highlight js %}

function logTimeBinarySearch(sortedArr, toSearch) {
    var minIndex = 0;
    var maxIndex = sortedArr.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = sortedArr[currentIndex];
 
        if (currentElement < toSearch) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > toSearch) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
};
var tenThousand     = [...new Array(10000).keys()];
var hundredThousand = [...new Array(100000).keys()];
var oneMillion      = [...new Array(1000000).keys()];

console.time('O(log n) - tenThousand');
logTimeBinarySearch(tenThousand, tenThousand[Math.floor(Math.random() * tenThousand.length)]);
console.timeEnd('O(log n) - tenThousand');
console.time('O(log n) - hundredThousand');
logTimeBinarySearch(hundredThousand, hundredThousand[Math.floor(Math.random() * hundredThousand.length)]);
console.timeEnd('O(log n) - hundredThousand');
console.time('O(log n) - oneMillion');
logTimeBinarySearch(oneMillion, oneMillion[Math.floor(Math.random() * oneMillion.length)]);
console.timeEnd('O(log n) - oneMillion');
{% endhighlight %}

Increasing the size of the input data set has little growth. This makes O(log n) algorithms very effective for large datasets.

Through the illustrate below compare algorithms performance in this post.

Running simple examples can better feel the difference between algorithms. O big notation help to find the optimal data structure, algorithm, and understand complexity.

Please find all test cases on this [JS gist](https://gist.github.com/aldb/b9494e4ca594f6f704671edf713a1922.js):

