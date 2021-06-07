
// var guess = document.getElementById("guess");
// var match = document.getElementById("match");
// var notmatch = document.getElementById("not-match");
// var btn = document.getElementById("btn");
// match.style.color = "red";
// var ran = Math.floor(Math.random() * 5) + 1;
// btn.addEventListener("click", check)

// match.innerHTML = "";
// notmatch.innerHTML = "";


// function check(e) {

//     if (!isNaN(guess.value)  &&  guess.value == ran) {
//         match.innerHTML = "congra you get it";
//     } else {
//         notmatch.innerHTML = "failed";
//     }
//     console.log(ran);
//     e.defaultPrevented;

// }



//Window

var val = window.location.search;

window.history.go(-1);


console.log(val);