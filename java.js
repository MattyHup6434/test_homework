

const alphabet = (betBetTer) => {
    console.log(betBetTer);

    document.getElementById("demo").innerHTML = betBetTer;

    (betBetTer !== 'Z') && setTimeout(() => alphabet(String.fromCharCode(betBetTer.charCodeAt(0) + 1)), 1000);
}

alphabet('A');

  function myFunction() {
    document.getElementById("demo2").innerHTML = "Hello Matty";
}

function fruitsKey() {
    const userObject = {};  // สร้างอ็อบเจ็กต์เพื่อเก็บข้อมูลผู้ใช้
    while (true) {
        // รับค่า key
        const key = prompt("ป้อนชื่อผลไม้ หรือพิมพ์ 'stop' เพื่อหยุด:");

        // ตรวจสอบว่าผู้ใช้ป้อน 'stop' หรือไม่
        if (key.toLowerCase() === 'stop') {
            break;  // ถ้าใช่ให้ยุติการทำงานของลูป
        }

        // รับค่า value
        const value = prompt(`ป้อนจำนวนผลไม้ '${key}':`);

        // แปลงค่าให้เป็นตัวเลข
        const count = parseInt(value);
        if (!isNaN(count)) {
            userObject[key + (count > 1 ? 's' : '')] = count;
        } else {
            alert('โปรดป้อนจำนวนผลไม้ที่เป็นตัวเลข');
        }
    }

    // แสดงผลลัพธ์ในอิลิเมนต์ที่มี ID "demo3"
    document.getElementById("demo3").innerHTML = JSON.stringify(userObject);
}
calculators =()=>{


let calculator = {
 
    read() {
       this.a= Number(
            prompt('ใส่เลข A:')
            );
       this.b = Number(
            prompt('ใส่เลข B:')
            );
    },
    
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },  
   };
   calculator.read();
   alert('ผลบวกคือ : '+calculator.sum());
   alert('ผลคูณคือ : '+calculator.mul());
}