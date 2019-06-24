var money = prompt("Ваш бюджет на месяц?(ДРАМ)", ""),
	time  = prompt("Введите дату в формате YYYY-MM-DD", "");

var appdata = {
	budget: money,
	dateTime: time,
	expenses: "s",
	optionalExpenses: "sw",
	income: "",
	savings: false

}

var sallary = appdata.budget / 29;
alert("Вы зарабатываете:" + Math.round(sallary) + " Драм в  день");
