/**
 * username
 * text
 * shortText
 * longText
 * boolean
 * int
 * float
 * date
 * color
 * email
 * telephone
 */

const utilFunction = require('./util');


const dataType = {

    username: () => {
        const listVowels = "aeiou";
        const listConsonants="bcdfghjklmnpqrstwvxyz";
        let name = "";

        for (let countSyllable = 1; countSyllable <= utilFunction.getRandomIntInclusive(2, 4); countSyllable++){

            let numberRandom = utilFunction.getRandomIntInclusive(1, 5);
            let numberRandomTwo = utilFunction.getRandomIntInclusive(1, 20);
      
            let getRandomConsonants = listVowels.substring(numberRandom--, numberRandom);
            let getRandomVowels = listConsonants.substring(numberRandomTwo--, numberRandomTwo);
            
            name += `${getRandomConsonants}${getRandomVowels}`;
      
        }

        return name
    },

    text: () => {
        return "Lorem Ipsum"
    },

    shortText: () => {
        return "Cool and fancy fonts are special typefaces you can use in your social media posts or gamer profiles on Twitter, Instagram, Twitch, and more."
    },

    longText: () => {
        return `A wise Instagram bio once said, “The happiness of your life depends on the quality of your thoughts.” Well, sometimes you can find a little extra happiness when you dress those thoughts up with a cool font.

        Content on Instagram, Twitter, Twitch, TikTok and everywhere else online is prolific—it’s hard to stand out, even in a small group. That’s because the universal font each platform uses makes all content blend together.
        
        With a font generator, doom scrollers will stop in their tracks simply because what you’ve written looks different and interesting—bonus points if it’s also worth reading.`
    },

    boolean: () => {
        let randomBoolean = Math.floor(Math.random() * 2)
        return Boolean(randomBoolean)
    },

    int: () => {
        return Math.floor(Math.random() * 256);
    },

    float: () => {
        return Math.random() * 10 +1
    },

    date: () => {
        return new Date().toLocaleDateString()
    },

    color: () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let indice = 0; indice < 6; indice++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    email: () => {
        const listVowels = "aeiou";
        const listConsonants="bcdfghjklmnpqrstwvxyz";
        let userName = "";

        for (let countSyllable = 1; countSyllable <= utilFunction.getRandomIntInclusive(2, 4); countSyllable++){

            let numberRandom = utilFunction.getRandomIntInclusive(1, 5);
            let numberRandomTwo = utilFunction.getRandomIntInclusive(1, 20);
      
            let getRandomConsonants = listVowels.substring(numberRandom--, numberRandom);
            let getRandomVowels = listConsonants.substring(numberRandomTwo--, numberRandomTwo);
            
            userName += `${getRandomConsonants}${getRandomVowels}`;
      
        }

        return `${userName}@email.com`
    },

    telephone: () => {
        const listNumber = "0123456789";
        let telephone = "";

        for (let countNumber = 1; countNumber <= utilFunction.getRandomIntInclusive(8, 9); countNumber++){

            let numberRandom = utilFunction.getRandomIntInclusive(2, 5);
      
            let getRandomConsonants = listNumber.substring(numberRandom--, numberRandom);
            
            telephone += `${getRandomConsonants}`;
      
        }

        return telephone
    }
}

module.exports = dataType