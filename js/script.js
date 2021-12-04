const cardArray = [
    {
        id: 'accordion',
        img: './asserts/img/example1.jpg',
        title: '1. Accordion',
        description: 'This component help you create a button that expands and collapse when is clicked',
        link: 'accordion.html'
    }
];


    

function generateCard() {
    for (var i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src',cardArray[0].img);
        card.setAttribute('data-id',i);
        document.getElementById('card-container').appendChild(card);
    }
}


generateCard();