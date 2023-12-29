// //Сумма строки p
// var p = +prompt('Введите номер строки для подсчета суммы', Math.round(n / 2));
// var sum = 0;
// var sumUp = 0; //выше строки р
// var sumDp = 0; //ниже строки р

// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     if (i == p) {
//       sum = sum + arr[i][j];
//       document.write(' ' + i + j);
//     }
//     if (i >= p) {
//       sumUp = sumUp + arr[i][j];
//     }
//     if (i <= p) {
//       sumDp = sumDp + arr[i][j];
//     }
//   }
// }

// document.write(' Сумма ' + p + ' строки = ' + sum + '<br />');
// document.write(' Сумма элементов выше ' + p + ' строки = ' + sumUp + '<br />');
// document.write(' Сумма элементов ниже ' + p + ' строки = ' + sumDp + '<br />');

// //Сумма столбца k
// var k = +prompt('Введите номер столбца для подсчета суммы', Math.round(n / 2));
// var sum = 0;
// var sumRk = 0; //правее столбца k
// var sumLk = 0; //левее столбца k

// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     if (j == k) {
//       sum = sum + arr[i][j];
//       document.write(' ' + i + j);
//     }
//     if (j >= k) {
//       sumLk = sumLk + arr[i][j];
//     }
//     if (j <= k) {
//       sumRk = sumRk + arr[i][j];
//     }
//   }
// }

// document.write(' Сумма ' + k + '  столбца = ' + sum + '<br />');
// document.write(' Сумма элементов правее ' + k + '  столбца = ' + sumRk + '<br />');
// document.write(' Сумма элементов левее ' + k + '  столбца = ' + sumLk + '<br />');

// // console.log(arr);
let n = 0;

while (isNaN(n) || n < 1) {
  n = +prompt('Enter array length');
}

let num = 0;

while (isNaN(num) || num < 1) {
  num = +prompt('Вкажіть верхній правий елеменнт');
}

function getMatrix(a, b) {
  let arr = [];

  for (let i = 0; i < a; i++) {
    arr[i] = [];
    for (let j = 0; j < a; j++) {
      arr[i][j] = Math.round(Math.random() * 9);
    }
    // document.write('<br />');
  }

  arr[0][arr.length - 1] = b;
  return arr;
}

//Сума головної діагоналі
let mainSum = 0;

let arr = getMatrix(n, num);

for (let i = 0; i < arr.length; i++) {
  document.write('<div>');

  for (let j = 0; j < arr.length; j++) {
    if (i == j) {
      mainSum += arr[i][j];
      arr[i][j] = `<p class="mainColor">${arr[i][j]}</p>`;
    } else {
      arr[i][j] = `<p> ${arr[i][j]} </p>`;
    }
    document.write(arr[i][j]);
  }
  document.write('</div>');
}

document.write(`<br /> Сума головної діагоналі: ${mainSum}  <br />`);

//Сума побочної діагоналі

let secondSum = 0;

let secondArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  secondSum += secondArr[i][n - i - 1];
  for (let j = 0; j < n; j++) {
    if (j == n - i - 1) {
      secondArr[i][n - i - 1] = `<p class="secondColor">${secondArr[i][n - i - 1]}</p>`;
    } else {
      secondArr[i][j] = `<p>${secondArr[i][j]}</p>`;
    }

    document.write(secondArr[i][j]);
  }

  document.write('</div>');
}

document.write(`<br /> Сума побочної діагоналі: ${secondSum}  <br />`);

//Сума половини матриці без головної діагоналі зверху зправа

let thirdSum = 0;

const thirdArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i < j) {
      thirdSum += thirdArr[i][j];

      thirdArr[i][j] = `<p class="mainColor">${thirdArr[i][j]}</p>`;
    } else {
      thirdArr[i][j] = `<p>${thirdArr[i][j]}</p>`;
    }
    document.write(thirdArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці без головної діагоналі зверху зправа: ${thirdSum}  <br />`
);

//Сума половини матриці з головною діагоналлю зверху зправа

let foursSum = 0;

const foursArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i <= j) {
      foursSum += foursArr[i][j];

      foursArr[i][j] = `<p class="thirdColor">${foursArr[i][j]}</p>`;
    } else {
      foursArr[i][j] = `<p>${foursArr[i][j]}</p>`;
    }
    document.write(foursArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці з головною діагоналлю зверху зправа: ${foursSum}  <br />`
);

//Сума половини матриці без головної діагоналі знизу зліва
let fifthSum = 0;

const fifthArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i > j) {
      fifthSum += fifthArr[i][j];

      fifthArr[i][j] = `<p class="secondColor">${fifthArr[i][j]}</p>`;
    } else {
      fifthArr[i][j] = `<p>${fifthArr[i][j]}</p>`;
    }
    document.write(fifthArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці без головної діагоналі знизу зліва: ${fifthSum}  <br />`
);

//Сума половини матриці з головною діагоналлю знизу зліва
let sixSum = 0;

const sixArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i >= j) {
      sixSum += sixArr[i][j];

      sixArr[i][j] = `<p class="mainColor">${sixArr[i][j]}</p>`;
    } else {
      sixArr[i][j] = `<p>${sixArr[i][j]}</p>`;
    }
    document.write(sixArr[i][j]);
  }
  document.write('</div>');
}

document.write(`<br /> Сума половини матриці з головною діагоналлю знизу зліва: ${sixSum}  <br />`);

//Сума половини матриці без побічної діагоналі зверху зліва
let seventhSum = 0;

const seventhArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i + j < n - 1) {
      seventhSum += seventhArr[i][j];

      seventhArr[i][j] = `<p class="thirdColor">${seventhArr[i][j]}</p>`;
    } else {
      seventhArr[i][j] = `<p>${seventhArr[i][j]}</p>`;
    }
    document.write(seventhArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці без побічної діагоналі зверху зліва: ${seventhSum}  <br />`
);

//Сума половини матриці з побочною діагоналлю зверху зліва
let eighthSum = 0;

const eighthArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i + j <= n - 1) {
      eighthSum += eighthArr[i][j];

      eighthArr[i][j] = `<p class="mainColor">${eighthArr[i][j]}</p>`;
    } else {
      eighthArr[i][j] = `<p>${eighthArr[i][j]}</p>`;
    }
    document.write(eighthArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці з побочною діагоналлю зверху зліва: ${eighthSum}  <br />`
);

//Сума половини матриці без побічної діагоналі внизу зправа

let ninthSum = 0;

const ninthArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i + j > n - 1) {
      ninthSum += ninthArr[i][j];

      ninthArr[i][j] = `<p class="secondColor">${ninthArr[i][j]}</p>`;
    } else {
      ninthArr[i][j] = `<p>${ninthArr[i][j]}</p>`;
    }
    document.write(ninthArr[i][j]);
  }
  document.write('</div>');
}

document.write(
  `<br /> Сума половини матриці без побічної діагоналі внизу зправа: ${ninthSum}  <br />`
);

//Сума квадрата верх право

let tenthSum = 0;

const tenthArr = getMatrix(n, num);

let t = +prompt('Введите угловой элемент квадрата верх право', Math.round(n / 2));

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (j >= t && i < t) {
      tenthSum += tenthArr[i][j];
      tenthArr[i][j] = `<p class="secondColor">${tenthArr[i][j]}</p>`;
    } else {
      tenthArr[i][j] = `<p>${tenthArr[i][j]}</p>`;
    }
    document.write(tenthArr[i][j]);
  }

  document.write('</div>');
}

document.write(`<br /> Сума квадрата верх право: ${tenthSum}  <br />`);

//Сума квадрата низ ліво

let eleventhSum = 0;

const eleventhArr = getMatrix(n, num);

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (j < t && i >= t) {
      eleventhSum += eleventhArr[i][j];
      eleventhArr[i][j] = `<p class="thirdColor">${eleventhArr[i][j]}</p>`;
    } else {
      eleventhArr[i][j] = `<p>${eleventhArr[i][j]}</p>`;
    }
    document.write(eleventhArr[i][j]);
  }

  document.write('</div>');
}

document.write(`<br /> Сума квадрата низ ліво: ${eleventhSum}  <br />`);

//Сума строки с

let twelvethSum = 0;

const twelvethArr = getMatrix(n, num);

const c = +prompt('Вкажіть номер рядка', Math.round(n / 2));

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (i == c - 1) {
      twelvethSum += twelvethArr[i][j];
      twelvethArr[i][j] = `<p class="mainColor">${twelvethArr[i][j]}</p>`;
    } else {
      twelvethArr[i][j] = `<p>${twelvethArr[i][j]}</p>`;
    }
    document.write(twelvethArr[i][j]);
  }
  document.write('</div>');
}

document.write(`<br /> Cума строки с: ${twelvethSum}  <br />`);

//Сумма стовпця k

let thirteenSum = 0;

const thirteenArr = getMatrix(n, num);

const k = +prompt('Вкажіть номер рядка', Math.round(n / 2));

for (let i = 0; i < n; i++) {
  document.write('<div>');

  for (let j = 0; j < n; j++) {
    if (j == k - 1) {
      thirteenSum += thirteenArr[i][j];
      thirteenArr[i][j] = `<p class="secondColor">${thirteenArr[i][j]}</p>`;
    } else {
      thirteenArr[i][j] = `<p>${thirteenArr[i][j]}</p>`;
    }
    document.write(thirteenArr[i][j]);
  }
  document.write('</div>');
}

document.write(`<br /> Cума строки k: ${thirteenSum}  <br />`);
