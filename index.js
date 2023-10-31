//Detecting button press

var numberOfDrums = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrums; i++) {

document.querySelectorAll('.drum')[i].addEventListener('click', function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });

}

//Detecting Keyboard press

document.addEventListener('keydown', function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


    function makeSound(key) {

        switch (key) {
            case 'w':
                var tom1 = new Audio('./sounds/tom-1.wav');
                tom1.play();
                break;
            case 'a':
                var kick = new Audio('./sounds/kick-bass.wav');
                kick.play();
                break;
            
            case 's':
                var snare = new Audio('./sounds/snare.wav');
                snare.play();
                break;

            case 'd':
                var tom2 = new Audio('./sounds/tom-2.wav');
                tom2.play();
                break;

            case 'j':
                var tom3 = new Audio('./sounds/tom-3.wav');
                tom3.play();
                break;

            case 'k':
                var tom4 = new Audio('./sounds/tom-4.wav');
                tom4.play();
                break;

            case 'l':
                var crash = new Audio('./sounds/hat.wav');
                crash.play();
                break;

            default: console.log(event);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}
