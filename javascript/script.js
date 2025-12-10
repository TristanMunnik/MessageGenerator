
// object for moods and advice
const moodAdvice = {
    happy : ['spread the positivity', 'keep smiling', 'try coding'],
    sad : ['talk to a friend', 'take a walk', 'check the sunset out'],
    angry : ['go for a walk', 'listen to music', 'play some games'],
    tired : ['take a nap', 'drink some water', 'do some exercise'],
    bored : ['practice coding', 'play some games', 'go to the beach if you can']
}

function getMood () {
    const mood = Object.keys(moodAdvice);
    const randomIndex = Math.floor(Math.random() * mood.length);
    return mood[randomIndex];
}

function getAdvice(mood) {
    
}