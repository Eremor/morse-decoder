const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morzeWord = [];
    let morzeCode = [];
    let morzeLetter = [];
    let arr = '';
    let decode = '';

    for(let i = 0; i < expr.length; i += 10) {
        morzeWord.push(expr.slice(i, i + 10));
    }

    morzeWord.forEach(item => {
        for(let i = 0; i < item.length; i += 2) {
            morzeCode.push(item.slice(i, i + 2));
        }
    });

    for(let i = 0; i < morzeCode.length; i++) {
        switch(morzeCode[i]) {
            case '10':
                morzeCode[i] = '.';
                break;
            case '11':
                morzeCode[i] = '-';
                break;
            case '00':
                morzeCode[i] = ' ';
                break;
            case '**':
                morzeCode[i] = '*';
                break
        }
        arr += morzeCode[i];
    }

    for(let i = 0; i < arr.length; i += 5) {
        morzeLetter.push(arr.slice(i, i + 5).trim());
    }

    decode = morzeLetter.join(' ').split(' ***** ').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join('')).join(' ');
    return decode;
}

module.exports = {
    decode
}