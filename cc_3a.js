let customers = [{ name: "Lebron James", email: "Lebron@james.com", purchases: ["headband"] },
    { name: "Michael Jordan", email: "Michael@jordan.com", purchases: ["basketball shoes"] },
    { name: "Kobe Bryant", email: "Kobe@bryant.com", purchases: ["helicopter tickets"] }]
console.log(customers)
customers.push({ name: "Kevin Durant", email: "Kevin@durant.com", purchases: ["seat cushion"] })
console.log(customers)
customers.shift()
customers[1].email = "Kobe24@bryant.com"
customers[1].purchases.push("basketball shorts")
customers.forEach(customer => {console.log('name: ' + customer.name + ', email: ' + customer.email + ', purchases: ' + customer.purchases)})
customers[2].purchases.push("hair line ascender")
console.log(customers)

