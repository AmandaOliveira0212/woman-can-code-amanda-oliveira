function criaPares() {
    const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let cont = 1;
    for (cont > 1; cont < valoresNum.length; cont += 2) {
        console.log(valoresNum[cont]);
    }

} return criaPares();