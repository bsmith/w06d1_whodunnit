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
}
console.groupEnd();

console.group("Episode 2");
{
    const murderer = 'Professor Plum';

    const changeMurderer = function() {
        murderer = 'Mrs. Peacock';
    }

    const declareMurderer = function() {
        return `The murderer is ${murderer}.`;
    }

    changeMurderer();
    const verdict = declareMurderer();
    /* Error: can't assign to a const variable */
    console.log(verdict);
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

    const secondVerdict = `The murderer is ${murderer}.`;
    /* Professor Plumb */
    console.log('Second Verdict: ', secondVerdict);
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
    /* Mrs Peacock */
    console.log(`Suspect three is ${suspectThree}.`);
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
}
console.groupEnd();

