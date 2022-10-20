
// callback - 
// pass a function as argument to another function 

// ex 1
// const fun = (arg) => {

//     console.log(arg + (arg * 0.18));

// };

// fun(100);

// ex 2
// const fun = (arg) => {

//     console.log(arg.eid);

// };

// fun({eid: 101, firstName: 'Sonu'});

// // ex 3
// const funThatNeedsCallback = (arg) => {
//     console.log('fun');
//     arg();
// };

// const callBackFun = () => {
//     console.log('callBackFun');
// };

// funThatNeedsCallback(callBackFun);



// ex 4
const funThatNeedsCallback = (arg) => {
    console.log('fun');
    arg(100);
};

const callBackFun = (num) => {
    console.log('callBackFun');
    console.log(num);
};

funThatNeedsCallback(callBackFun);
