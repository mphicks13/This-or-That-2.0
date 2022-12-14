const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');
let counter1 = document.querySelector('.counter1');
let counter2 = document.querySelector('.counter2');
const resultsBox = document.querySelector('.resultsBox');
const mainBox = document.querySelector('.mainBox');
const nextBtn = document.querySelector('.nextBtn');
const percent1 = document.querySelector('.percent1');
const percent2 = document.querySelector('.percent2');

const fastFoodRestaurants = []

function FastFoodOption(name, pic, counter) {
    this.name = name;
    this.pic = pic;
    this.counter = counter;
}

function createFastFoodRestaurant(name, counter) {
    let fullPic = `./img/${name}.png`;
    let restaurant = new FastFoodOption(name, fullPic, counter);

    fastFoodRestaurants.push(restaurant);
}

createFastFoodRestaurant('Mcdonalds', 0);
createFastFoodRestaurant('Wendys', 0);
createFastFoodRestaurant('Arbys', 0);
createFastFoodRestaurant('Popeyes', 0);
createFastFoodRestaurant('KFC', 0);
createFastFoodRestaurant('Subway', 0);
createFastFoodRestaurant('Bojangles', 0);
createFastFoodRestaurant('Chickfila', 0);

function updatePercentBar() {
    let percent1Name = name1.innerText;
    let percent2Name = name2.innerText;
    let percent1Counter = 0;
    let percent2Counter = 0;
    for (i = 0; i < fastFoodRestaurants.length; i++) {
        if (fastFoodRestaurants[i].name === percent1Name) {
            percent1Counter = fastFoodRestaurants[i].counter;
        }
    }
    for (i = 0; i < fastFoodRestaurants.length; i++) {
        if (fastFoodRestaurants[i].name === percent2Name) {
            percent2Counter = fastFoodRestaurants[i].counter;
        }
    }
    let total = percent1Counter + percent2Counter;
    let percent1Value = (Math.floor((percent1Counter / total) * 100) + '%');
    let percent2Value = (Math.ceil((percent2Counter / total) * 100) + '%');
    percent1.innerText = percent1Value;
    percent2.innerText = percent2Value;
    percent1.style.width = percent1Value;
    percent2.style.width = percent2Value;

}

function updateCounter1() {
    let firstName1 = name1.innerText;
    console.log(firstName1);
    for (i = 0; i < fastFoodRestaurants.length; i++) {
        if (fastFoodRestaurants[i].name === firstName1) {
            let count1 = fastFoodRestaurants[i].counter;
            count1++;
            fastFoodRestaurants[i].counter = count1;
            console.log(fastFoodRestaurants[i]);
        }
    }
    updatePercentBar();
    resultsBox.classList.toggle('hidden');
}

function updateCounter2() {
    let firstName2 = name2.innerText;
    console.log(firstName2);
    for (i = 0; i < fastFoodRestaurants.length; i++) {
        if (fastFoodRestaurants[i].name === firstName2) {
            let count2 = fastFoodRestaurants[i].counter;
            count2++;
            fastFoodRestaurants[i].counter = count2;
            console.log(fastFoodRestaurants[i]);
        }
    }
    updatePercentBar();
    resultsBox.classList.toggle('hidden');
}

function nextCombo() {
    let ranNum1 = Math.floor(Math.random() * (fastFoodRestaurants.length));
    let ranNum2 = Math.floor(Math.random() * (fastFoodRestaurants.length));
    if (ranNum1 === ranNum2) {
        ranNum2 += 1
    }
    if (ranNum2 > fastFoodRestaurants.length) {
        ranNum2 - 2
    }
    name1.innerText = fastFoodRestaurants[ranNum1].name;
    pic1.src = fastFoodRestaurants[ranNum1].pic;
    name2.innerText = fastFoodRestaurants[ranNum2].name;
    pic2.src = fastFoodRestaurants[ranNum2].pic;
    resultsBox.classList.toggle('hidden');
}

pic1.addEventListener('click', updateCounter1);
pic2.addEventListener('click', updateCounter2);
nextBtn.addEventListener('click', nextCombo);
