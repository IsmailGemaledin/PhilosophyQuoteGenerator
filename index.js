let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Many people would sooner die than think. In fact, they do." - Bertrand Russell',
    '"Truth is the object of philosophy, but not always of philosophers." - John Churton Collins',
    '"It is a great advantage for a system of philosophy to be substantially true." - George Santayana',
    '"Philosophy is not a theory but an activity." - Ludwig Wittgenstein',
    '"Philosophy is the thoughts of men about human thinking, reasoning and imagining, and the real values in human existence." - Charles W. Eliot',
    '"The philosophies of one age have become the absurdities of the next, and the foolishness of yesterday has become the wisdom of tomorrow." - Sir William Osler',
    '"My definition (of a philosopher) is of a man up in a balloon, with his family and friends holding the ropes which confine him to earth and trying to haul him down." - Louisa May Alcott',
    '"The philosophy which is so important in each of us is not a technical matter; it is our more or less dumb sense of what life honestly and deeply means. It is only partly got from books; it is our individual way of just seeing and feeling the total push and pressure of the cosmos." - William James',
    '"The unexamined life is not worth living." - Socrates',
    '"The feeling of wonder is the mark of the philosopher, for all philosophy begins in wonder." - Plato',
    '"Philosophy is the highest music." - Plato',
    '"The first step towards philosophy is incredulity." - Denis Diderot',
    '"The safest characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato." - Alfred North Whitehead',
    '"Philosophy means liberation from the - routine, soaring above the well known, seeing it in new perspectives, arousing wonder and the wish to fly." - Walter Kaufmann',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.style.opacity = 0;
    setTimeout(() => {
        output.innerHTML = randomQuote;
        output.style.opacity = 1;
    }, 200);
});