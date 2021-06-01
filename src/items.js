const data = `[
{
    "id": 1,
    "type": "pizza",
    "name": "Hawai",
    "weight": 520,
    "dm": 30
},
{
    "id": 2,
    "type": "sushi",
    "name": "Philadelphia",
    "weight": 315
},
{
    "id": 3,
    "type": "pizza",
    "name": "Bovarskyi",
    "weight": 450,
    "dm": 25
},
{
    "id": 4,
    "type": "pizza",
    "name": "New York",
    "weight": 550,
    "dm": 30
},
{
    "id": 5,
    "type": "pizza",
    "name": "BBQ",
    "weight": 850,
    "dm": 35
},
{
    "id": 6,
    "type": "sushi",
    "name": "Canada",
    "weight": 325
},
{
    "id": 7,
    "type": "sushi",
    "name": "Itachi",
    "weight": 320
},
{
    "id": 8,
    "type": "pizza",
    "name": "Diablo",
    "weight": 500,
    "dm": 30
},
{
    "id": 9,
    "type": "pizza",
    "name": "Supreme",
    "weight": 800,
    "dm": 35
},
{
    "id": 10,
    "type": "pizza",
    "name": "Carbonara",
    "weight": 500,
    "dm": 30
},
{
    "id": 11,
    "type": "sushi",
    "name": "Gold Dragon",
    "weight": 320
},
{
    "id": 12,
    "type": "sushi",
    "name": "Red Dragon",
    "weight": 325
},
{
    "id": 13,
    "type": "sushi",
    "name": "Osaka",
    "weight": 295
},
{
    "id": 14,
    "type": "sushi",
    "name": "Bounty",
    "weight": 255
},
{
    "id": 15,
    "type": "pasta",
    "name": "Carbonara",
    "weight": 300
},
{
    "id": 16,
    "type": "desert",
    "name": "Tiramisu",
    "weight": 205
},
{
    "id": 17,
    "type": "wine",
    "name": "Riesling",
    "weight": 250
},
{
    "id": 18,
    "type": "beer",
    "name": "Dark Chernihivske",
    "weight": 450
},
{
    "id": 19,
    "type": "beer",
    "name": "Bud",
    "weight": 500
},
{
    "id": 20,
    "type": "drink",
    "name": "Pepsi",
    "weight": 300
},
{
    "id": 21,
    "type": "drink",
    "name": "Coca Cola",
    "weight": 300
},
{
    "id": 22,
    "type": "drink",
    "name": "Fanta",
    "weight": 350
},
{
    "id": 23,
    "type": "drink",
    "name": "Mineralochka",
    "weight": 500
},
{
    "id": 24,
    "type": "wine",
    "name": "Pinot Grigio",
    "weight": 250
},
{
    "id": 25,
    "type": "wine",
    "name": "Syrah",
    "weight": 240
},
{
    "id": 26,
    "type": "pasta",
    "name": "Alfredo",
    "weight": 350
},
{
    "id": 27,
    "type": "pasta",
    "name": "Ala norma",
    "weight": 370
},
{
    "id": 28,
    "type": "sushi",
    "name": "California",
    "weight": 280
},
{
    "id": 29,
    "type": "desert",
    "name": "Cheesecake",
    "weight": 190
},
{
    "id": 30,
    "type": "desert",
    "name": "Eclairs",
    "weight": 220
},
{
    "id": 31,
    "type": "drink",
    "name": "Green tea",
    "weight": 500
},
{
    "id": 32,
    "type": "drink",
    "name": "Black tea",
    "weight": 500
},
{
    "id": 33,
    "type": "drink",
    "name": "Fruit tea",
    "weight": 500
},
{
    "id": 34,
    "type": "drink",
    "name": "Juice",
    "weight": 200
}, 
{
    "id": 35,
    "type": "drink",
    "name": "Milkshake",
    "weight": 250
}, 
{
    "id": 36,
    "type": "desert",
    "name": "Panna cotta",
    "weight": 220
}, 
{
    "id": 37,
    "type": "desert",
    "name": "Chocolate fondant",
    "weight": 230
}, 
{
    "id": 38,
    "type": "desert",
    "name": "Fruit salad",
    "weight": 270
}, 
{
    "id": 39,
    "type": "desert",
    "name": "Ice cream",
    "weight": 120
}, 
{
    "id": 40,
    "type": "beer",
    "name": "Blanc 1664",
    "weight": 500
}, 
{
    "id": 41,
    "type": "beer",
    "name": "Staropramen",
    "weight": 500
}, 
{
    "id": 42,
    "type": "beer",
    "name": "Heineken",
    "weight": 330
}, 
{
    "id": 43,
    "type": "beer",
    "name": "Corona extra",
    "weight": 300
}, 
{
    "id": 44,
    "type": "beer",
    "name": "Kozel",
    "weight": 500
}, 
{
    "id": 45,
    "type": "beer",
    "name": "Garage",
    "weight": 500
}, 
{
    "id": 46,
    "type": "beer",
    "name": "Lvivske 1715",
    "weight": 500
}, 
{
    "id": 47,
    "type": "pasta",
    "name": "Angel hair",
    "weight": 270
}, 
{
    "id": 48,
    "type": "pasta",
    "name": "Bucatini",
    "weight": 290
}, 
{
    "id": 49,
    "type": "pasta",
    "name": "Campanelle",
    "weight": 280
}, 
{
    "id": 50,
    "type": "pasta",
    "name": "Cannelloni",
    "weight": 240
}, 
{
    "id": 51,
    "type": "pasta",
    "name": "Casarecce",
    "weight": 260
}, 
{
    "id": 52,
    "type": "pasta",
    "name": "Cavatappi",
    "weight": 280
}, 
{
    "id": 53,
    "type": "pasta",
    "name": "Cavatelli",
    "weight": 250
}, 
{
    "id": 54,
    "type": "pasta",
    "name": "Ditalini",
    "weight": 310
}, 
{
    "id": 55,
    "type": "pasta",
    "name": "Farfalle",
    "weight": 280
}, 
{
    "id": 56,
    "type": "pasta",
    "name": "Fettuccine",
    "weight": 300
}, 
{
    "id": 57,
    "type": "pasta",
    "name": "Fusilli",
    "weight": 270
}, 
{
    "id": 58,
    "type": "pasta",
    "name": "Lasagna",
    "weight": 230
}, 
{
    "id": 59,
    "type": "pasta",
    "name": "Linguine",
    "weight": 250
}, 
{
    "id": 60,
    "type": "pasta",
    "name": "Macaroni",
    "weight": 290
}, 
{
    "id": 61,
    "type": "pasta",
    "name": "Orzo",
    "weight": 230
}, 
{
    "id": 62,
    "type": "pasta",
    "name": "Rigatoni",
    "weight": 240
}, 
{
    "id": 63,
    "type": "pasta",
    "name": "Pappardelle",
    "weight": 220
}, 
{
    "id": 64,
    "type": "pasta",
    "name": "Ravioli",
    "weight": 240
}, 
{
    "id": 65,
    "type": "sushi",
    "name": "Gunkan maki",
    "weight": 190
}, 
{
    "id": 66,
    "type": "sushi",
    "name": "Sashimi",
    "weight": 180
}, 
{
    "id": 67,
    "type": "sushi",
    "name": "Maki",
    "weight": 180
}, 
{
    "id": 68,
    "type": "sushi",
    "name": "Tiger Roll",
    "weight": 180
}, 
{
    "id": 69,
    "type": "sushi",
    "name": "Crunch Roll",
    "weight": 180
}, 
{
    "id": 70,
    "type": "sushi",
    "name": "Spider Roll",
    "weight": 190
}, 
{
    "id": 71,
    "type": "sushi",
    "name": "Tempura Roll",
    "weight": 200
}, 
{
    "id": 72,
    "type": "sushi",
    "name": "Vegetable Roll",
    "weight": 170
}, 
{
    "id": 73,
    "type": "sushi",
    "name": "ALASKA ROLL",
    "weight": 190
}, 
{
    "id": 74,
    "type": "sushi",
    "name": "LEMON ROLL",
    "weight": 170
}

]`;
