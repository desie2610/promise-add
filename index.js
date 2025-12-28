const f1Drivers = [
  "Max Verstappen",
  "Lewis Hamilton",
  "Charles Leclerc",
  "Lando Norris",
  "Fernando Alonso",
  "Carlos Sainz",
  "Sergio Perez",
  "George Russell",
  "Oscar Piastri",
  "Valtteri Bottas"
];

function run(driver) {
return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
    resolve {driver,}
    }, time)
})
}