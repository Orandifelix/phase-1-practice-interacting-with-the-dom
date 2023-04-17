let count = 0;
let increment = true;
let intervalId;
let isPaused = false;
const likes = {};
document.addEventListener("DOMContentLoaded", startCounter)


// Function to start the counter
function startCounter() {
  intervalId = setInterval(() => {
    if (increment) {
      count++;
    } else {
      count--;
    }
    document.getElementById("counter").innerText = count;
  }, 1000);
}

// Function to pause the counter
function pauseCounter() {
  clearInterval(intervalId);
}

function togglePause() {
    if (isPaused) {
      startCounter();
      document.getElementById('pause').textContent = 'pause';
    } 
    else {
        clearInterval(intervalId);
        document.getElementById('pause').textContent = 'resume';
    }
    isPaused = !isPaused;
  }
document.getElementById('pause').addEventListener('click', togglePause);




// Function to toggle between increment and decrement
function toggleIncrement() {
  increment = !increment;
}

// Function to add a like
function addLike() {
  if (!likes[count]) {
    likes[count] = 1;
  } else {
    likes[count]++;
  }
  const likesList = document.querySelector(".likes");
  likesList.innerHTML = "";
  for (let num in likes) {
    const li = document.createElement("li");
    li.innerText = `${num} has been liked ${likes[num]} times`;
    likesList.appendChild(li);
  }
}

// Function to leave a comment
function leaveComment() {
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();
  if (comment !== "") {
    const comments = document.querySelector(".comments");
    const p = document.createElement("p");
    p.innerText = comment;
    comments.appendChild(p);
    input.value = "";
  }
}

// Add event listeners to the buttons and form
document.getElementById("plus").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerText = count;
});
document.getElementById("minus").addEventListener("click", () => {
  count--;
  document.getElementById("counter").innerText = count;
});
document.getElementById("heart").addEventListener("click", addLike);
document.getElementById("pause").addEventListener("click", togglePause);
document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  leaveComment();
});
document.getElementById("toggle").addEventListener("click", toggleIncrement);


 

