const cards = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';

function writeCards(cards, event) {
    const message = [];
    for (let i = 0; i < cards.length; i++) {
        message.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
writeCards(cards);


 

const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
} 