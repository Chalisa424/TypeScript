//1.พิมพ์ code
// let x: number = 10;
// x ='hello'; //error

//2.แก้ไขให้ x เป็น string
// let x: number | string = 10;
// x ='hello';

//3.ตรวจสอบว่าด้วยคำสั่ง typeof
let x: number | string = 10;
x ='hello';
    if (typeof x === 'string') {
        console.log('x is a string');
    }else if(typeof x === 'number'){
        console.log('x is a number');
    }else{
        console.log('x is neither a string nor a number');
    }//คำตอบ x is a string