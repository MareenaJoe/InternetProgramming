var array = [];

function displayComments() {
    var sHTML = "<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>Name</th><th scope='col'>Comments</th><th scope='col'>Date</th></tr></thead><tbody>";
    var comment = comment_box.value;
    var username = username_box.value;
    array.push({
        usernames: username,
        comments: comment,
        dates: Date.now()
    });

    for (var i = 0; i < array.length; i++) {
        sHTML += "<tr><th scope='row'>" + (i + 1) + "</th>";
        sHTML += "<td>" + array[i].usernames + "</td>" + "<td>" + array[i].comments + "</td> <td>";
        sHTML += "posted " + getTimeDelta(array[i].dates) + " ago";
        sHTML += "</p> <button onclick='countLikes()' id ='likeButton'>Like</button>";
        sHTML += "</td></tr>";

    }
    sHTML += "</tbody></table>";
    commentsDiv.innerHTML = sHTML;
}

/**
* A function to calculate time delta for posted comments. Pass the time 
* message was posted in milliseconds & this function will return a string 
* value 
*/
function getTimeDelta(commentTime) {
    // Calculate what is the time delta from Date.now() and passed in time (milliseconds)
    // Divide by 1000 so that you get seconds, apply floor function to round value
    var deltaTimeSeconds = Math.floor((Date.now() - commentTime) / 1000)
    
    // If 'deltaTimeSeconds' is less than 60 seconds, return string with seconds
    if (deltaTimeSeconds < 60) {
        return deltaTimeSeconds + " seconds"
    // If 'deltaTimeSeconds' is between 60 & 3600 seconds, return string with minutes
    } else if (deltaTimeSeconds >= 60 && deltaTimeSeconds < 3600) {
        return Math.floor(deltaTimeSeconds / 60) + " minutes"
    // else 'deltaTimeSeconds' is greater than an hour, return string with hours
    } else {
        return Math.floor(deltaTimeSeconds / 3600) + " hours"
    }
}

function clearForm() {
    document.getElementById('username_box').value = "";
    document.getElementById('comment_box').value = "";
}


var totalLikes = 0;

/**
* Function called when like button is pressed so that the totalLikes value is incremented
* Also an alter is called within this function to display a popup message with total likes
* so far 
*/
function countLikes() {
    var likes = document.getElementById("likeButton");
    likes.value = totalLikes;
    totalLikes++;
    alert("Total Likes so far : " + totalLikes + " times");
}