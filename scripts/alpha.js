// function play(){
//     //step-1 hide the hoe screen
//     const homeSection =document.getElementById('home');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }
function continueGame(){
    // step-1 generate the random Alphabet
    const alphabet = getArandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to screen
    const currentAlphabetElement = document.getElementById(current-alpha);
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBacgroundColorById(alphabet);
}

function play(){
    hideElementById('home');
    showElementById('play-ground')
    continueGame()
}