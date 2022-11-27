import { coffee_list } from "./coffee.js";

class Coffee {
  constructor() {
    let my_coffee_list = [];
  }
  setClassCoffeeList(array) {
    this.my_coffee_list = array;
  }
  getCheckedCheckBoxes() {
    var checkboxes = document.getElementsByTagName("input");
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
      if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);
      }
    }
    return checkboxesChecked;
  }

  putCheckBoxesResults() {
    let results = this.getCheckedCheckBoxes().sort();
      let result_length = results.length;
   
    if (result_length == 0) {
      document.getElementById("description").innerHTML = "No money for coffee";
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DF85y69g9P7dou7G6AMQVYbZOMS75WDxqixVcFqZGJjo3TtNXDKheM6vUmHguKsQipc&usqp=CAU";
    }

    for (let i = 0; i < this.my_coffee_list.length; i++){
      if (this.my_coffee_list[i]['ingredients'].length == result_length) {
        if (JSON.stringify(results) === JSON.stringify(this.my_coffee_list[i]['ingredients'].sort())) {
          document.getElementById("description").innerHTML = this.my_coffee_list[i]['description'];
          return this.my_coffee_list[i]['image'];
        }
      }
    }
    document.getElementById("description").innerHTML = "Drink some shit";
      return "https://memepedia.ru/wp-content/uploads/2018/09/papey-gavna-original.jpg";
  }
}

export let main_html = new Coffee();
main_html.setClassCoffeeList(coffee_list);
document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DF85y69g9P7dou7G6AMQVYbZOMS75WDxqixVcFqZGJjo3TtNXDKheM6vUmHguKsQipc&usqp=CAU";
document.getElementById("description").innerHTML = "No money for coffee";
