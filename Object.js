//-----1

let user = {};
user.name = 'Пилип';
user.surname = 'Шевченко';
console.log(user);
user.name = 'Сергій';
console.log(user);
delete user.name;
console.log(user);

//-----2

let employeeSalaries = {
    sal1: 5500,
    sal2: 6000,
    sal3: 5800
};
let sum = 0;
for (let key in employeeSalaries) {
    sum += employeeSalaries[key];
}
console.log(sum);

function culc(a, b) {
    try {
        if (b === 0) {
            let c = a+b;
            let q = a-b;
            let w = a*b;
            let e = a/b;
            console.log(c);
            console.log(q);
            console.log(w);
            console.log(e);
            throw new Error();
        }
    } catch (b) {
        console.log('Не правильні дані')
    }
}

culc(8, 0);

