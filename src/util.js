const utilFunction = {
    isEmpty: (obj) => {
        if(!obj) return true
        if(obj  == "" || obj == "0" || obj == 1) return true
        return Object.keys(obj).length === 0;
    },

    getRandomIntInclusive : (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}

module.exports = utilFunction