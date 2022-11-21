console.group("Episode 1");
{
    const scenario = {
        murderer: 'Miss Scarlet',
        room: 'Library',
        weapon: 'Rope'
    };
    
    const declareMurderer = function() {
        return `The murderer is ${scenario.murderer}.`;
    }
    
    const verdict = declareMurderer();
    /* Should be Miss Scarlet */
    console.log(verdict);
    console.assert(verdict === "The murderer is Miss Scarlet.")
}
console.groupEnd();

console.group("Episode 2");
{
    const murderer = 'Professor Plum';

    const changeMurderer = function() {
        // Assignment to const variable
        //murderer = 'Mrs. Peacock';
    }

    const declareMurderer = function() {
        return `The murderer is ${murderer}.`;
    }

    changeMurderer();
    const verdict = declareMurderer();
    /* Error: can't assign to a const variable */
    /* after commenting out, Professor Plum */
    console.log(verdict);
    console.assert(verdict === "The murderer is Professor Plum.")
}
console.groupEnd();

console.group("Episode 3");
{
    let murderer = 'Professor Plum';

    const declareMurderer = function() {
        let murderer = 'Mrs. Peacock';
        return `The murderer is ${murderer}.`;
    }

    const firstVerdict = declareMurderer();
    /* Mrs Peacock */
    console.log('First Verdict: ', firstVerdict);
    console.assert(firstVerdict === "The murderer is Mrs. Peacock.")

    const secondVerdict = `The murderer is ${murderer}.`;
    /* Professor Plumb */
    console.log('Second Verdict: ', secondVerdict);
    console.assert(secondVerdict === "The murderer is Professor Plum.")
}
console.groupEnd();

console.group("Episode 4");
{
    let suspectOne = 'Miss Scarlet';
    let suspectTwo = 'Professor Plum';
    let suspectThree = 'Mrs. Peacock';

    const declareAllSuspects = function() {
        let suspectThree = 'Colonel Mustard';
        return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
    }

    const suspects = declareAllSuspects();
    /* Miss Scarlet, Professor Plum and Colonel Mustard */
    console.log(suspects);
    console.assert(suspects === "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.")
    /* Mrs Peacock */
    console.log(`Suspect three is ${suspectThree}.`);
    console.assert(suspectThree === "Mrs. Peacock")
}
console.groupEnd();

console.group("Episode 5");
{
    const scenario = {
        murderer: 'Miss Scarlet',
        room: 'Kitchen',
        weapon: 'Candle Stick'
    };
      
    const changeWeapon = function(newWeapon) {
        scenario.weapon = newWeapon;
    }
      
    const declareWeapon = function() {
        return `The weapon is the ${scenario.weapon}.`;
    }
      
    changeWeapon('Revolver');
    const verdict = declareWeapon();
    /* Revolver */
    console.log(verdict);
    console.assert(verdict === "The weapon is the Revolver.")
}
console.groupEnd();

console.group("Episode 6");
{
    let murderer = 'Colonel Mustard';

    const changeMurderer = function() {
        murderer = 'Mr. Green';

        const plotTwist = function() {
            murderer = 'Mrs. White';
        }

        plotTwist();
    }

    const declareMurderer = function () {
        return `The murderer is ${murderer}.`;
    }

    changeMurderer();
    const verdict = declareMurderer();
    /* Mrs. White */
    console.log(verdict);
    console.assert(verdict === "The murderer is Mrs. White.")
}
console.groupEnd();

console.group("Episode 7");
{
    let murderer = 'Professor Plum';

    const changeMurderer = function() {
        murderer = 'Mr. Green';

        const plotTwist = function() {
            let murderer = 'Colonel Mustard';

            const unexpectedOutcome = function() {
            murderer = 'Miss Scarlet';
            }

            unexpectedOutcome();
        }

        plotTwist();
    }

    const declareMurderer = function() {
        return `The murderer is ${murderer}.`;
    }

    changeMurderer();
    const verdict = declareMurderer();
    /* Mr. Green */
    console.log(verdict);
    console.assert(verdict === "The murderer is Mr. Green.")
}
console.groupEnd();

console.group("Episode 8");
{
    const scenario = {
        murderer: 'Mrs. Peacock',
        room: 'Conservatory',
        weapon: 'Lead Pipe'
    };
      
    const changeScenario = function() {
        scenario.murderer = 'Mrs. Peacock';
        scenario.room = 'Dining Room';
      
        const plotTwist = function(room) {
          if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
          }
      
          const unexpectedOutcome = function(murderer) {
            if (scenario.murderer === murderer) {
              scenario.weapon = 'Candle Stick';
            }
          }
      
          unexpectedOutcome('Colonel Mustard');
        }
      
        plotTwist('Dining Room');
    }
      
    const declareWeapon = function() {
        return `The weapon is ${scenario.weapon}.`
    }
      
    changeScenario();
    const verdict = declareWeapon();
    /* Candle Stick */
    console.log(verdict);
    console.assert(verdict === "The weapon is Candle Stick.")
}
console.groupEnd();

console.group("Episode 9");
{
    let murderer = 'Professor Plum';

    if (murderer === 'Professor Plum') {
        let murderer = 'Mrs. Peacock';
    }

    const declareMurderer = function() {
        return `The murderer is ${murderer}.`;
    }

    const verdict = declareMurderer();
    /* Professor Plum */
    console.log(verdict);
    console.assert(verdict === "The murderer is Professor Plum.")
}
console.groupEnd();

/* NB. console.assert just prints a message?!  No exception with backtrace? :-( */

console.group("Episode 10");
{
    const murderScene = () => {
        let murderer = "Mrs. Peacock";

        const switchMurderer = (newMurderer) => murderer = newMurderer;
        const declareMurderer = () => `The murderer is ${murderer}.`;
        return [switchMurderer, declareMurderer];
    };

    const [switchMurderer, declareMurderer] = murderScene();
    switchMurderer("Professor Plum");
    /* Professor Plum */
    console.log(declareMurderer());
}
console.groupEnd();