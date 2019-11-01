const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const [mon, tue, wed] = days;

const [, , , thu, fri, sat, sun] = days;

console.log(thu);

const shortDays = ["mon"];

const [Mon, Tue = "tue"] = shortDays;

const daysMaker = () => days;
// if function returns array, destructuring is possible

console.log(tue);
