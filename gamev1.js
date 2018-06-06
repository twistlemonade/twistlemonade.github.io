var arr = ["rock", "paper", "scissors"];

function play() {
  var computerOption = Math.random();
  var userOption = Math.random();

  if (computerOption < 0.34) {
    var co = arr[0];
  } else if (computerOption < 0.67) {
    co = arr[1];
  } else {
    co = arr[2];
  }

  if (userOption < 0.34) {
    var uo = arr[0];
  } else if (userOption == 0.67) {
    uo = arr[1];
  } else {
    uo = arr[2];
  }

  if (co == uo) {
    console.log("Computer choice:", co);
    console.log("User choice:", uo);
    console.log("It's a tie!");
  } else if (co == arr[0]) {
    if (uo == arr[1]) {
      console.log("Computer choice:", co);
      console.log("User choice:", uo);
      console.log("User wins!");
    } else {
      console.log("Computer choice:", co);
      console.log("User choice:", uo);
      console.log("Computer wins!");
    }
  } else if (co == arr[1]) {
    if (uo == arr[2]) {
      console.log("Computer choice:", co);
      console.log("User choice:", uo);
      console.log("User wins!");
    } else {
      console.log("Computer choice:", co);
      console.log("User choice:", uo);
      console.log("Computer wins!");
    }
  } else if (co == arr[2]) {
    if (uo == arr[0]) {
      console.log("Computer choice:", co);
      console.log("User choice:", uo);
      console.log("User wins!");
    } else {
      console.log("Computer choice: ", co);
      console.log("User choice:", uo);
      console.log("Computer wins!");
    }
  }
}

play();
