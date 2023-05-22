export const questions = [
    {id: 0, text: "How do you want to get food on the table?",
        options: [
            {id: 0, text: "Let's cook", nextQuestionId: 1},
            {id: 1, text: "Take out please", nextQuestionId: 9},
            {id: 2, text: "Eat at a restaurant", nextQuestionId: 2}
        ]
    },
    {id: 1, text: "How much time do you have?",
        options: [
            {id: 0, text: "5 minutes", nextQuestionId: 5},
            {id: 1, text: "15 minutes", nextQuestionId: 4}
        ]
    },
    {id: 2, text: "How far do you want to travel?",
        options: [
            {id: 0, text: "Walk", nextQuestionId: 3},
            {id: 1, text: "Drive", nextQuestionId: 23}
        ]
    },
    {id: 3, text: "Which spot would you like to stroll over to?",
        options: [
            {id: 0, text: "Lulu", nextQuestionId: 19},
            {id: 1, text: "Funky Elephant Thai", nextQuestionId: 20},
            {id: 2, text: "Picante", nextQuestionId: 21},
            {id: 3, text: "Pho Le", nextQuestionId: 22}
        ]
    },
    {id: 4, text: "Which would you like to make?",
        options: [
            {id: 0, text: "Sandwich", nextQuestionId: 6},
            {id: 1, text: "Salad", nextQuestionId: 7},
            {id: 2, text: "Pasta", nextQuestionId: 8}
        ]
    },
    {id: 5, text: "You don't have time to cook anything.", options: []},
    {id: 6, text: "Here's your sandwich", options: []},
    {id: 7, text: "Here's your salad", options: []},
    {id: 8, text: "Here's your pasta", options: []},
    {id: 9, text: "What cuisine do you pick?",
        options: [
            {id: 0, text: "Mexican", nextQuestionId: 10},
            {id: 1, text: "Thai/Vietnamese", nextQuestionId: 14}
        ]
    },
    {id: 10, text: "Which restaurant do you pick?",
        options: [
            {id: 0, text: "Cholita Linda", nextQuestionId: 11},
            {id: 1, text: "Flacos", nextQuestionId: 12},
            {id: 2, text: "Tacubaya", nextQuestionId: 13}
        ]
    },
    {id: 11, text: "Enjoy fish tacos from Cholita Linda", options: []},
    {id: 12, text: "Grab a vegan huarache and taquitos from Flacos", options: []},
    {id: 13, text: "Order ceviche and the tamal de verduras from Tacubaya", options: []},
    {id: 14, text: "Which restaurant strikes your fancy?",
        options: [
            {id: 0, text: "Monster Pho", nextQuestionId: 15},
            {id: 1, text: "Mint Leaf", nextQuestionId: 16},
            {id: 2, text: "Imm Thai Street Food", nextQuestionId: 17},
            {id: 3, text: "Chai Thai Noodles", nextQuestionId: 18}
        ]
    },
    {id: 15, text: "Sooth yourself with a steaming hot bowl of pho from Monster Pho", options: []},
    {id: 16, text: "A claypot or vermicelli from Mint Leaf", options: []},
    {id: 17, text: "Crispy pumpkin and pad see ew coming right up from Imm Thai Street Food", options: []},
    {id: 18, text: "Curry roti and rice ball salad from Chai Thai Noodles", options: []},
    {id: 19, text: "Get the mezze platter from Lulu", options: []},
    {id: 20, text: "Crispy tofu and green papaya salad from Funky Elephant Thai", options: []},
    {id: 21, text: "Sit outside under the tent and with the crispiest chips at Picante", options: []},
    {id: 22, text: "Homemade veggie dumplings and soup from Pho Le", options: []},
    {id: 23, text: "Which restaurant is worth the drive?",
        options: [
            {id: 0, text: "Kiku Sushi", nextQuestionId: 24},
            {id: 1, text: "Eureka!", nextQuestionId: 25},
            {id: 2, text: "Joodooboo", nextQuestionId: 26},
            {id: 3, text: "Simurgh Bakery & Cafe", nextQuestionId: 27}
        ]
    },
    {id: 24, text: "Freshest salmon and yellowtail around at Kiku Sushi", options: []},
    {id: 25, text: "Housemade beet veggie burger at Eureka!", options: []},
    {id: 26, text: "Seasonal banchan and freshly made tofu from Joodooboo", options: []},
    {id: 27, text: "Spinach feta bourek, eggplant dolma, and honeycake from Simurgh Bakery & Cafe", options: []},
];
