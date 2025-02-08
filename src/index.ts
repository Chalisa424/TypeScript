//1.สร้าง function โดยระบุ data type ของ input parameter และค่าที่คืนให้ชัดเจน เพื่อให้ ts compiler สามารถ เจาะจงชนิดข้อมูล
// const add: (a,b) => {
//     return a + b;
// }
// console.log(add(1,2)); //error เพราะไม่ระบุ type ของ a และ b

import { Console } from "console";

//2.ทดลองเพิ่มตัวแปร ลงไปใน function 
// const add: (a: number, b: number) => {
//     return a + b;
// }
// const result = add(1, 2) + 0;
// console.log(result, 'type of result:', typeof result);//error เพราะไม่ระบุ type ของ result

//3.บังคับให้ function add คืนค่าเป็น String แล้วดูคำเตือนที่พบ
// const add = (a: number, b: number):string => {
//     return a + b;
// }
// const resualt = add(1, 2) + 0;
// console.log(result, 'type of result:', typeof result);//error เพราะไม่ระบุ type ของ result (Cannot find name 'result'. Did you mean 'resualt')

//4.แก้ไข code ให้คืนค่าเป็น string โดยแก้ไข code
// const add = (a: number, b: number):string => {
//     const result = a + b;
//     return result.toString();
// }//Run ได้แต่ไม่เกิดผลลัพธ์

//5.สร้าง function findMax ที่รับ list ของ number แล้วไปหาค่าที่มากที่สุด แล้วคืนค่าออกมา เป็น string
function findMax(numbers: number[]): string {
    if (numbers.length === 0) {
        return "List is empty";
    }
    let max = Math.max(...numbers);
    return max.toString();
}

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); //คำตอบ 5

