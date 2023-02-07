const lightOne = document.getElementById("light-one");
const lightTwo = document.getElementById("light-two");
const lightThree = document.getElementById("light-three");

const lightOneColor = getComputedStyle(lightOne).backgroundColor;
const lightTwoColor = getComputedStyle(lightTwo).backgroundColor;
const lightThreeColor = getComputedStyle(lightThree).backgroundColor;

lightOne.style.backgroundColor = lightThreeColor;
lightTwo.style.backgroundColor = lightOneColor;
lightThree.style.backgroundColor = lightTwoColor;
