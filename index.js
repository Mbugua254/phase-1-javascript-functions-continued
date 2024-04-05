// code your solution here

//Using Function Declaration
function saturdayFun(message){
    
    const defaultMessage = "roller-skate";
    return `This Saturday, I want to ${message || defaultMessage}!`;
}

// Using Function Expression
const mondayWork = function(activity) {
  const defaultActivity = "go to the office";
  return `This Monday, I will ${activity || defaultActivity}.`;
};

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
  };
}