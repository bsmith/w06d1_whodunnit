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
    /* Should be Mrs. Peacock */
    console.log(verdict);
}
console.groupEnd();