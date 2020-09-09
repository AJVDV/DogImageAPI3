'use strict';

function getDogImage(){
    let userNumElement = document.querySelector('#dog-pic-breed').value;
    fetch(`https://dog.ceo/api/breed/${userNumElement}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson))
    .catch(error => alert('Something has gone wrong. Please refresh, or try again later'));
}

function displayImage(responseJson) {
    console.log(responseJson)
    if (responseJson.message === "Breed not found (master breed does not exist)") {
        $('.dog-images').append("What you entered was not a breed, or is a breed we don't have images for. Please try another breed");
    } else { 
        $('.dog-images').append(`<li class="x"><div class="imgContainer"><img src="${responseJson.message}" alt="cute dogo"></div></li>`);
    }
}

function clearImage() {
    console.log("DeletingImages")
    $('.dog-images').empty();
}

function watchForm() {
    $('#js-dog-pic-form').submit(event => {
        event.preventDefault();
        clearImage();
        getDogImage();
    });
}

$(function() {
    console.log('app loaded! waiting for submit!');
    watchForm();
});