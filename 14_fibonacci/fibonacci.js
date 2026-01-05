const fibonacci = function(count){
    let array = [0,1];
    let countInt = parseInt(count);
    if (countInt < 0){
        return "OOPS";
    } if (array[countInt] === undefined){
        for (i=2; i<=countInt; i++) {
            let fibonacci = array[i-1] + array[i-2];
            array.push(fibonacci);
        }
    }      
    return array[countInt]
    }

// Do not edit below this line
module.exports = fibonacci;
