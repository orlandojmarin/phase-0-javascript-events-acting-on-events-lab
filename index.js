// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = 'cyan';

/*moveDodgerLeft(); {
    addEventListener("keydown"), function(event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
            dodger.style.left = "100px";
        }
        else moveDodgerLeft();
        dodger.style.left = "300px";
    }
}

dodger.style.right = "100px";*/

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
} 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  }); 

  //file:///Users/orlando/Development/Code/learn-prework/phase-0-javascript-events-acting-on-events-lab/index.html
  //https://learning.flatironschool.com/courses/3354/assignments/81061?module_item_id=157857
