

console.log('person1: show Ticket');
console.log('person2: show Ticket');

const preMovie = async() => {
    const promiseWifeBringsTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket')
        }, 2000)
    })


    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('popcorn')
        })
    })

    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('butter')
        })
    })
    let ticket = await promiseWifeBringsTicket;


    console.log('Wife: i have the tics')
    console.log('husband we shoud go in');
    console.log('Wife: No im hungry');

    // let popcorn = await getPopcorn;

    console.log('Husband: i have bought some popcorn')
    console.log('husband: we shoud go in');
    console.log('Wife: I need butter');

    // let butter = await getButter;


    const getColddrinks = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Cold Drinks')
        })
    })
    console.log('Husband: i have bought some popcorn and butter')
    console.log('husband: we shoud go in');
    console.log('Wife: I need Cold Drinks');

    // let coldDrinks = await getColddrinks;

    let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColddrinks])

console.log(`${popcorn}, ${butter}, ${coldDrinks}`)

    // console.log(`husband: i got some ${popcorn}`)


    // return coldDrinks;
    // return popcorn;
    // return butter;
    // return ticket;
}

preMovie().then((mov) => console.log(mov))

console.log('person4: show ticket');
console.log('person5: show ticket');