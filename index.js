// code your solution here
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const saturdayFun = function(arg1 = 'roller-skate'){
    return `This Saturday, I want to ${arg1}!`;
}

const wrapAdjective = function(flair){
    return function(arg5 = 'special'){
        return `You are ${flair}${arg5}${flair}!`;

    }
}


/*
function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }

  function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }
  
  */