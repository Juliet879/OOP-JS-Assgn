// Using a function
function me(id,name,salary){
    this.id = id
    this.name = name
    this.salary = salary
}
e = new me(2,"Juliet",250000)
console.log(e.id +" " + e.name + " " +e.salary)


// Using a method
var fruit = {
    name : "Mangoes",
    price : 30,
    quantity : 2,
    total : function(price,quantity){
        cost = price * quantity;
        return this.total = cost
    }
}
fruit.total(30,2)
console.log(fruit.quantity + " " + fruit.name + " for KES "  + cost.toFixed(2))

