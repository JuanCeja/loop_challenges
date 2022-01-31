// ----------PRINT ODDS 1 - 20 -------------

for (var i = 0; i < 21; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}


// ---------DECREASING MULTIPLES OF 3

for (var i = 101; i > 0; i--){
    if (i % 3 == 0){
        console.log(i);
    }
}

// ----------PRINT THE SEQUENCE

for (var i = 4; i > -4; i-=1.5){
    console.log(i);
    }

// ----------- SIGMA

var sum = 0;

for (var i = 0; i < 101; i++){
    var sum = sum + i;
}

console.log(sum);

// -----------FACTORIAL

var product = 1;

for (var i = 1; i < 13; i++){
    product = product * i;
}

console.log(product);