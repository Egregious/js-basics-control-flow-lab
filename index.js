function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) 
    return "This one is on me!"
  else if (feet > 2000 && feet < 2500)
    return "I will gladly take your thirty bucks."
  else (feet > 2500)
    return "No can do."
}

function ternaryCheckCity(city){
  // Write your code here!
  let isNYC;
  return city == "NYC" ? (isNYC = "Ok, sounds good.") : (isNYC = "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default :
      return "Bye.";
      break;
  }
}