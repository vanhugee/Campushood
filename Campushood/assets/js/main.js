/* var timeStart, timeEnd;
var timeTaken;
var timeDiff;
var timeIndicator;
var isStart = false;
window.scrollTo({
  left: 0
});
console.log("start....");


function recordTime() {

  if (!isStart) {
    timeStart = performance.now();
    document.getElementById("start-button").innerHTML = "STOP";
    document.getElementById("start-button").style.background = "#FFDFCD";
    isStart = true;
  } else {

    timeEnd = performance.now();
    document.getElementById("start-button").innerHTML = "RESTART";
    document.getElementById("start-button").style.background = "#FFFCB6";


    timeTaken = ((timeEnd - timeStart) / 1000).toFixed(2);
    isStart = false;
    document.getElementById("info").style.display = "block";

    displayInfo();
  }

  function displayInfo() {
    timeDiff = timeTaken - 5;
    if (timeDiff > 0) {
      timeIndicator = "slower";
    } else if (timeDiff < 0) {
      timeIndicator = "faster";
    } else {
      timeIndicator = "PERFECT and differs";
    }


    document.getElementById("info-section").innerHTML = "It took you <pinkText>" + Math.abs(timeTaken) + "  seconds </pinkText> to count to 5. <br><br> Your perception of time is " + timeIndicator + " by " + (Math.abs(timeDiff)).toFixed(3) + " seconds <br><br> <middleText>This means....<br>1 minute feels like " + (timeTaken / 5).toFixed(2) + " minutes <br>1 month feels like " + (((timeTaken / 5) * 2628288) / 86400).toFixed(1) + " days <br> 1 year feels like " + (((timeTaken / 5) * 31536000) / 2628288).toFixed(0) + " months, and</middleText> <br> <largeText>50  years feel like  " + (((timeTaken / 5) * 50)).toFixed(0) + " years to you</largeText><br><br>";
  }

  function validateForm(e) {

    let timeInput = document.forms["timeCalculate"]["formInput"].value;

    timeTaken = timeInput;
    displayInfo();
    console.log("Math formula used for calculating relative time:");
    console.log("((timeTaken / 5) * secondsInTotalTimePeriod) / secondsInUnitTimePeriod");

    e.preventDefault();

  }

  const form = document.getElementById('timeForm');

  form.addEventListener('input', validateForm);
  form.addEventListener('submit', validateForm);



}

/* javascript */
/*
$(".clickme").click(function(){console.log("t6547");});
$(".clickme").click(function(e){

})
 */
window.addEventListener('load', function() {
  var topics = ['food', 'transportation', 'more'];
  topics.forEach(function(topic) {
      var posts = JSON.parse(localStorage.getItem(topic + '-posts'));
      if (posts) {
          var messageContainer = document.getElementById(topic + '-messages');
          posts.forEach(function(post) {
              createPostElement(messageContainer, post);
          });
      }
  });
});

function createPostElement(container, post) {
  var newPost = document.createElement('div');
  newPost.classList.add('post');
  var username = "User"; // You can replace "User" with the actual username
  newPost.innerHTML = '<strong>' + username + '</strong>: ' + post.message;
  var replyInput = document.createElement('input');
  replyInput.type = 'text';
  replyInput.placeholder = 'Reply to this post...';
  var replyButton = document.createElement('button');
  replyButton.textContent = 'Reply';
  replyButton.onclick = function() {
      var replyText = replyInput.value;
      if (replyText.trim() === "") return; // Do not post empty replies
      var replyContainer = document.createElement('div');
      replyContainer.classList.add('reply-container');
      var replyUsername = "User"; // You can replace "User" with the actual username
      replyContainer.innerHTML = '<strong>' + replyUsername + '</strong>: ' + replyText;
      newPost.appendChild(replyContainer);
      replyInput.value = '';
  };
  newPost.appendChild(replyInput);
  newPost.appendChild(replyButton);
  container.appendChild(newPost);
  // Automatically delete post after 10 seconds
  setTimeout(function() {
      container.removeChild(newPost);
      // Remove post from local storage
      var topic = container.id.split('-')[0];
      var posts = JSON.parse(localStorage.getItem(topic + '-posts'));
      posts = posts.filter(function(p) {
          return p.message !== post.message;
      });
      localStorage.setItem(topic + '-posts', JSON.stringify(posts));
  }, 10000);
}

function openChat(evt, chatName) {
  var i, chatContainer, tablinks;
  chatContainer = document.getElementsByClassName("chat-container");
  for (i = 0; i < chatContainer.length; i++) {
      chatContainer[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(chatName).style.display = "block";
  evt.currentTarget.className += " active";
}

function sendPost(chatName) {
  var inputElement = document.getElementById(chatName + "-input");
  var message = inputElement.value;
  if (message.trim() === "") return; // Do not post empty messages
  var messageContainer = document.getElementById(chatName + "-messages");
  createPostElement(messageContainer, { message: message });
  // Save posts to local storage
  var posts = JSON.parse(localStorage.getItem(chatName + '-posts')) || [];
  posts.push({ message: message });
  localStorage.setItem(chatName + '-posts', JSON.stringify(posts));
  inputElement.value = '';
}

document.getElementById("defaultOpen").click();