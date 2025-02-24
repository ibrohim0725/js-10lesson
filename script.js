
// 1-Topshiriq
// Berilgan ikkita sonning yig‘indisini hisoblovchi funksiya yozing.
function numRes(arg1, arg2) {
  let res = arg1 + arg2;
  return res;
}
console.log(numRes(15, 18));

// 2-Topshiriq
// Berilgan sonning kvadratini hisoblovchi funksiya yozing.
function multiply(arg1) {
  let res = arg1 ** 2;
  return res;
}
console.log(multiply(4));

// 3-Topshiriq
// Berilgan ikkita sondan kattasini aniqlovchi funksiya yozing.
const numBig = (arg1, arg2) => {
  let res = 0;
  if (arg1 > arg2) {
    res = arg1;
  } else if (arg1 < arg2) {
    res = arg2;
  } else {
    res = "Ikkala son ham teng";
  }
  return res;
};

console.log(numBig(15, 17));

// 4-Topshiriq
// Berilgan sonning faktorialini hisoblovchi funksiya yozing.
const multiply1 = (n) => {
  let p = 1;
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    p *= i;
  }
  return p;
};
console.log(multiply1(20));

// 5-Topshiriq
// Berilgan sonning juft yoki toq ekanligini aniqlovchi funksiya yozing.
const num = function (arg1) {
  let res = 0;
  if (arg1 % 2 == 0) {
    res = `Bu son juft ${arg1}`;
  } else {
    res = `Bu son toq  ${arg1}`;
  }
  return res;
};
console.log(num(15));

// 6-Topshiriq
// Berilgan son musbat, manfiy yoki nol ekanligini aniqlovchi funksiya yozing.
function whatNum(arg1) {
  let res = 0;
  if (arg1 == 0) {
    res = `Bu son nol ${arg1}`;
  } else if (arg1 > 0) {
    res = `Bu son manfiy ${arg1}`;
  } else {
    res = `Bu son musbat ${arg1}`;
  }
  return res;
}
console.log(whatNum(-15));

// 7-Toopshiriq
// Uchta son berilgan. Eng kattasini aniqlovchi funksiya yozing.
const numBig2 = (arg1, arg2, arg3) => {
  let res = arg1;
  if (arg2 > res) {
    res = arg2;
  }
  if (arg3 > res) {
    res = arg3;
  }
  return res;
};
console.log(numBig2(15, 118, 159));

// 8-Topshiriq
// Berilgan sonning bo‘luvchilarini topuvchi funksiya yozing.
const num1 = function (arg1) {
  let counter = "";
  for (let i = 1; i <= arg1; i++) {
    if (arg1 % i === 0) {
      counter += i + ",";
    }
  }
  return counter;
};

console.log(num1(20));

// 9-Topshiriq
// Berilgan son tub yoki tub emasligini aniqlovchi funksiya yozing.
function number1(arg1) {
  let count = 0;
  for (let i = 1; i <= arg1; i++) {
    if (arg1 % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return `bu tub son `;
  } else {
    return `Bu tub son emas`;
  }
}
console.log(number1(11));

// 10-Topshiriq
// Berilgan ikkita son orasidagi barcha sonlarni ekranga chiqaruvchi funksiya yozing.
const numMax = (arg1, arg2) => {
  let min = "";
  let max = "";
  if (arg1 > arg2) {
    max = arg1;
    min = arg2;
  } else {
    max = arg2;
    min = arg1;
  }
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
};
console.log(numMax(115, 182));

// 11-Topshriiq
// Berilgan ikkita son orasidagi barcha juft sonlarni ekranga chiqaruvchi funksiya yozing.
const numMax1 = (arg1, arg2) => {
  let min = "";
  let max = "";
  if (arg1 > arg2) {
    max = arg1;
    min = arg2;
  } else {
    max = arg2;
    min = arg1;
  }
  for (let i = min; i <= max; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
console.log(numMax1(115, 100));

// 12-Topshiriq
// Berilgan sonning raqamlari yig‘indisini hisoblovchi funksiya yozing.
const multiply2 = function (arg1) {
  let sum = 0;
  while (arg1 > 0) {
    sum += arg1 % 10;
    arg1 = Math.trunc(arg1 / 10);
  }
  return sum;
};
console.log(multiply2(154));

// 15-Topshiriq
// Berilgan sonni 3 ning darajasi ekanligini tekshiruvchi funksiya yozing.
function number3(arg1){
 
  while(arg1!=1){
    if(arg1%3 !=0){
     return'Bu son 3 ning darajasi emas '
      
    }
    arg1=arg1/3;
  }
  return 'Bu son 3 ning darjasi '
}
console.log(number3(27));

// 16-Topshiriq
// Berilgan sonning barcha bo‘luvchilarini ekranga chiqaruvchi funksiya yozing.
const boluchi = (arg1) => {
  let count = "";
  for (let i = 1; i <= arg1; i++) {
    if (arg1 % i == 0) {
      count += i + ",";
    }
  }
  return count;
};
console.log(boluchi(18));

// 17-Topshiriq
// Berilgan sonning raqamlari ko‘paytmasini hisoblovchi funksiya yozing.
function multiply3(arg1) {
  let sum = 1;
  while (arg1 > 0) {
    sum *= arg1 % 10;
    arg1 = Math.trunc(arg1 / 10);
  }
  return sum;
}
console.log(multiply3(153));

// 19-Topshiriq
// Berilgan ikki son orasidagi barcha tub sonlarni ekranga chiqaruvchi funksiya yozing.
const number2 = (arg1, arg2) => {
  let min = "";
  let max = "";
  let count = 0;

  if (arg1 > arg2) {
    max = arg1;
    min = arg2;
  } else {
    max = arg2;
    min = arg1;
  }

  for (let i = min; i <= max; i++) {
    let tubSon = true;
    if (i > 2) {
      tubSon = false;
    }

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        tubSon = false;
      }
    }

    if (tubSon) {
      console.log(i);
     
    }
  }
  return count;
};
console.log(number2(154, 170));

// 20-Topshiriq
// Berilgan sonnni kvadrat ildizinin hisoblovchi funksiya yozing
function kvadratIldiz(arg1) {
  return Math.sqrt(arg1);
}
console.log(kvadratIldiz(9));
