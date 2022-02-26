
//Задание 1
class Restaurant {
    constructor(name, cusineType) {
      this.name = name,
      this.cusineType = cusineType;
      this.served = 0;
    }
  
    showInfo() {
        document.write(`
        Ресторан: ${this.name}<br>
        Тип кухни: ${this.cusineType}<br>
        `);
    }
    // showStatus() {
    //     if (this.isOpen) {
    //         document.write(`Open <br>`);
    //     } else {
    //         document.write(`Closed <br>`);
    //     }
    // }
    
    showStatus() {
        let currentHour = new Date().getHours();
        let currentDay =  new Date().getDay();
    
        if (currentDay === 6 || currentDay === 0) {
            document.write(`${this.name} is closed `);
        } else {
          if (currentHour > 9 && currentHour < 22) {
            document.write(`${this.name} is open `);
          } else {
            document.write(`${this.name} is closed `);
          }
        }
      };
    setStatus(status) {
        this.showStatus = status;
    }


    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
        this.served += numberOfServed;
    }

    showTotalServed(){
        document.write(`<br> Total served: ${this.served}`);
    }
}
const supara = new Restaurant(' Supara', 'kyrgyz');
document.write(supara.showInfo())
document.write(supara.showStatus())

supara.setStatus();
supara.serve();
supara.serve();
supara.showTotalServed();
supara.showTotalServed();
supara.setServed(15);
supara.showTotalServed();
document.write("<hr> ")

//Задание 2


class Cars {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + "kW";
      this.color = color;
    }

  
    showInfo() {
        document.write(`
            Model: ${this.model}<br>
            Year: ${this.year}<br>
            Power: ${this.power}<br>
            Color: ${this.color}<br>
        `)
    }   
}
const jiguli = new Cars('Jiguli', 1990, 75, 'green');
jiguli.showInfo();

document.write("<hr> ");



class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }
   
    showInfo() {
        super.showInfo();
        document.write(`
            Battery: ${this.battery}<br>   
        `);
    }

    promote() {
        document.write(`
            Buy ${this.model} and save planet!
        `)
    }

  }
  
 

const modelX = new ElectroCars("Tesla X", 2020, 150, 'fuchsia', 2000);
modelX.showInfo();
modelX.promote();