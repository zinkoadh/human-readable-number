module.exports = function toReadable (number) {
    let obj = {0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',
        11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:"fifteen",16:'sixteen',17:'seventeen',18:'eighteen',
        19:'nineteen',20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety',100:'hundred'};

    if (number<=20){
        return obj[number]
    }
    else if (number>20 && number<100){
        let tens = Math.trunc(number/10)
        return (number-tens*10!=0) ? obj[tens*10] + ' '+obj[number-tens*10]: obj[tens*10]
    }
    else if (number >=100 && number < 1000){
        let hunders = Math.trunc(number/100)
        return (number-hunders*100 === 0) ? obj[hunders]+ ' hundred': obj[hunders]+ ' hundred ' + toReadable(number-hunders*100)
    }
}
