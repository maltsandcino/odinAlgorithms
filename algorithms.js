let function_choice = process.argv[2];
let passed_parameter = process.argv[3];
var call_stack = 0

// Guidance for proper use, won't always work as desired but good enough
if (!process.argv[2] || !process.argv[3] || (process.argv[2] != "fib" || process.argv[2] != "merge") || process.argv[2] == "help"){
    console.log('\n')
    console.log('== Usage: node algorithms.js fib number --OR-- node algorithms.js merge number number number number number...==')
    
    console.log('== Number should be a simple float or int number, if passing a list of numbers to merge, separate them with a space, no comma.==')
    console.log('\n')
}

//Determining which function to run
if (function_choice == "fib"){
    //Printing outcome
    console.log(`Fibonacci total for ${passed_parameter}: ${fib(parseInt(passed_parameter))}`)
    console.log(`Total Calls to the callstack: ${call_stack}`)
}
else if (function_choice== "merge"){
    // Gathering merge arguments
    let merge_arguments = []
    for (let arg in process.argv){
        if (arg > 2){
        merge_arguments.push(parseInt(process.argv[arg]))}
    }

    console.log(mergesort(merge_arguments))
}

//Defining Functions
function fib(num){
    call_stack++
    if(num === 1){
        return 1
    }
    if(num <= 0){
        return 0
    }
    total = fib(num - 1) + fib(num - 2)
    return total
}

//merge helper function
function merge(left, right){

    let arr = []
    while(left.length && right.length){
        if (left[0] < right[0]){
            arr.push(left.shift())
        }
        else{
            arr.push(right.shift())
        }
    }
        // pushing any left over elements onto the end of the array
        return [...arr, ...left, ...right ]
}

// Dividing function
function mergesort(nums){
    const half = nums.length / 2

    if(nums.length < 2){
        return nums
    }
    const left = nums.splice(0, half)
    return merge(mergesort(left), mergesort(nums))
}