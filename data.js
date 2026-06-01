// Venney's at the Granby — menu data (June 2026)
// Food menus rebuilt from the printed Breakfast/Lunch/Evening/Children's menus.
// Drinks and Sunday are unchanged. Edit freely; the till reads this file.
const MENUS = {
  Drinks: {
    availability: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      start: "00:00",
      end: "23:00",
    },
    sections: {
      "Soft Drinks": {
        subsections: {
          Common: {
            Pepsi: {
              choices: {
                Size: ["Regular", "Pint"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Pepsi Max": {
              choices: {
                Size: ["Regular", "Pint"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Tango: {
              choices: {
                Size: ["Regular", "Pint"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Lemonade: {
              choices: {
                Size: ["Regular", "Pint"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Cordial: {
              choices: {
                Flavour: ["Lime", "Blackcurrant", "Orange"],
                Mixer: ["Water", "Soda", "Lemonade"],
                Size: ["Pint", "Half Pint"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Fresh Juice": {
              choices: {
                Flavour: ["Orange", "Cranberry", "Apple", "Pineapple"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Table Water": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              },
            },
          },
          Bottles: {
            J2O: {
              choices: {
                Flavour: [
                  "Apple & Raspberry",
                  "Orange & Passionfruit",
                  "Apple & Mango",
                  "Dragon Berry",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Coca-Cola": {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            "Coke Zero": {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            "Diet Coke": {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            "Britvic Orange": {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            "Britvic Lemon": {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            Appletiser: {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            Harrowgate: {
              choices: {
                Type: ["Still", "Sparkling"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Fruit Shoot": {
              choices: {
                Flavour: [
                  "Summer Fruits",
                  "Orange & Apple",
                  "Apple & Blackcurrant",
                ],
              },
            },
          },
          "London Essence": {
            Tonic: {},
            "London Essence Lemonade": {},
            "Ginger Ale": {},
            "White Peach": {},
            "Raspberry & Rose": {},
            "Orange & Elderflower": {},
          },
        },
      },
      "Beer/Cider": {
        subsections: {
          Draught: {
            Carling: {
              choices: {
                Type: [
                  "Pint",
                  "Half Pint",
                  "Shandy",
                  "Half Shandy",
                  "Top",
                  "Half Top",
                ],
              },
            },
            Staropramen: {
              choices: {
                Type: [
                  "Pint",
                  "Half Pint",
                  "Shandy",
                  "Half Shandy",
                  "Top",
                  "Half Top",
                ],
              },
            },
            Madri: {
              choices: {
                Type: [
                  "Pint",
                  "Half Pint",
                  "Shandy",
                  "Half Shandy",
                  "Top",
                  "Half Top",
                ],
              },
            },
            Guinness: {
              choices: {
                Type: ["Pint", "Half Pint"],
              },
            },
            Worthingtons: {
              choices: {
                Type: [
                  "Pint",
                  "Half Pint",
                  "Shandy",
                  "Half Shandy",
                  "Top",
                  "Half Top",
                ],
              },
            },
            Alpacalypse: {
              choices: {
                Type: [
                  "Pint",
                  "Half Pint",
                  "Shandy",
                  "Half Shandy",
                  "Top",
                  "Half Top",
                ],
              },
            },
          },
          Bottles: {
            "Hawkstone Hedgerow": {},
            "Hawkstone Cider": {},
            "Hawkstone Lager": {},
            "Hawkstone Session": {},
            "Hawkstone Pils": {},
            Desperados: {},
            Rekorderlig: {
              choices: {
                Flavour: ["Strawberry & Lime", "Wild Berries"],
              },
            },
            "Smirnoff Ice": {},
            Peroni: {
              choices: {
                Type: ["Normal", "Gluten-Free"],
              },
            },
            "Atlantic Pale Ale": {},
            "WKD Blue": {},
            "Doom Bar": {},
            "Timothy Taylor's": {},
            Budweiser: {},
          },
        },
      },
      Wine: {
        subsections: {
          Glass: {
            "Sauvignon Blanc": {
              choices: {
                Size: ["175ml", "250ml"],
                Spritzer: ["Lemonade", "Soda"],
              },
            },
            "Pinot Grigio": {
              choices: {
                Size: ["175ml", "250ml"],
                Spritzer: ["Lemonade", "Soda"],
              },
            },
            Chardonnay: {
              choices: {
                Size: ["175ml", "250ml"],
                Spritzer: ["Lemonade", "Soda"],
              },
            },
            Zinfandel: {
              choices: {
                Size: ["175ml", "250ml"],
                Spritzer: ["Lemonade", "Soda"],
              },
            },
            "Pinot Blush": {
              choices: {
                Size: ["175ml", "250ml"],
                Spritzer: ["Lemonade", "Soda"],
              },
            },
            Merlot: {
              choices: {
                Size: ["175ml", "250ml"],
              },
            },
            Shiraz: {
              choices: {
                Size: ["175ml", "250ml"],
              },
            },
            Malbec: {
              choices: {
                Size: ["175ml", "250ml"],
              },
            },
            "Prosecco Doc": {},
          },
          Bottle: {
            "Sauvignon Blanc": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Pinot Grigio": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Chardonnay: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Zinfandel: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Pinot Blush": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Merlot: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Shiraz: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Malbec: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            Prosecco: {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Neptune Point Sauvignon Blanc": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Domaine la Baurne Viognier": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Petit Chablis": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Coles de Provence Rosé": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Crianza Rioja": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Bon Courage Carbernet Sauvignon": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Neptune Point Pinot Noir": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Pasqua Valpolicella": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Prosecco Rosé": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
          },
          Champgane: {
            "Jules Feraud NV": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Moet & Chandon Brut Imperial": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
            "Bollinger Special Cuvee NV": {
              choices: {
                Glasses: ["1", "2", "3", "4", "5", "6", "7", "8"],
              },
            },
          },
        },
      },
      "Hot Drinks": {
        Espresso: {},
        "Black Americano": {},
        "White Coffee": {},
        "Flat White": {},
        Cappuccino: {},
        Latte: {},
        Mocha: {},
        Chocolatte: {},
        "Pot of Tea": {
          choices: {
            Amount: ["1 Person", "2 People"],
          },
        },
        "Flavoured Tea": {
          choices: {
            Flavour: ["Earl Grey", "Green Tea", "Camomile", "Peppermint"],
            Amount: ["1 Person", "2 People"],
          },
        },
        "Hot Chocolate": {},
        "Jug of Cream": {},
        "Jug of Milk": {},
        Syrup: {
          choices: {
            Flavour: ["Hazelnut", "Vanilla", "Caramel", "Coconut"],
          },
        },
      },
      Spirits: {
        subsections: {
          Vodka: {
            "Smirnoff Red": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Smirnoff Mango & Passionfruit": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Absolut: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Absolut Vanilla": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Absolut Citron": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Hawkstone Vodka": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
          Gin: {
            "Hawkstone Gin": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            Burleigh: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            Hendricks: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Tanqueray Dry": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Tanqueray Seville": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Bombay Sapphire": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Chase Marmalade": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "WN Raspberry": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "WN Ginger & Rhubarb": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "WN Black Cherry": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Gordon's": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Gordon's Pink": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Gordon's Lemon": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Gordon's Sloe": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: [
                  "Lemonade",
                  "Tonic",
                  "London Essence Lemonade",
                  "Ginger Ale",
                ],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
          Rum: {
            Bumbu: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Kraken: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Twin Fin": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Captain Morgan's Tiki": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Captain Morgan's": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Captain Morgan's Dark": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Bacardi: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Malibu: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
          Whisky: {
            "Isle of Jura": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Naked Grouse": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Monkey Shoulder": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Jameson: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Bell's": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Jack Daniel's": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Jack Daniel's Honey": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Southern Comfort": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade"],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
          "General Spirits": {
            Archers: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Tia Maria": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Baileys: {
              choices: {
                Ice: ["Ice", "No Ice"],
              },
            },
            Disaronno: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Martini: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Limoncello: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Pimms: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            Jagermeister: {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
          Shots: {
            Tequila: {},
            "Tequila Rose": {},
            Sourz: {
              choices: {
                Flavour: ["Raspberry", "Strawberry"],
              },
            },
            Sambuca: {
              choices: {
                Flavour: ["Black", "Cherry"],
              },
            },
          },
          Brandy: {
            "Martel Cognac": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Three Barrels": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
            "Cherry Brandy": {
              choices: {
                Measure: ["Single", "Double"],
                Mixer: ["Pepsi", "Pepsi Max", "Lemonade", "Tango"],
                Ice: ["Ice", "No Ice"],
              },
            },
          },
        },
      },
      Tails: {
        subsections: {
          Cocktails: {
            "Pornstar Martini": {},
            "Raspberry Cola Cube": {},
            "Espresso Martini": {},
            "Aperol Spritz": {},
            "Glitter Bomb": {},
            "Pina Colada": {},
            "Sex on the Beach": {},
            Mojito: {
              choices: {
                Intensity: ["Sweet", "Dry"],
              },
            },
            "Passionfruit Mojito": {
              choices: {
                Intensity: ["Sweet", "Dry"],
              },
            },
          },
          "Mocktails 🔞": {
            "Oceana Colada": {},
            "Naked Pornstar": {},
            Nojito: {
              choices: {
                Intensity: ["Sweet", "Dry"],
              },
            },
            "Passionfruit Nojito": {
              choices: {
                Intensity: ["Sweet", "Dry"],
              },
            },
          },
          Kidtails: {
            "Candy Colada": {},
            "Berry Delight": {},
            "Blue Tornado": {},
          },
        },
      },
      "Non-Alcoholic": {
        "Doom Bar 0%": {},
        "Madri 0%": {},
        "Guinness 0%": {},
        "Peroni 0%": {},
        "Corona Cero": {},
        "Kopparberg 0%": {
          choices: {
            Flavour: ["Pear", "Mixed Berries"],
          },
        },
      },
    },
  },
  Breakfast: {
    availability: {
      days: ["Sat", "Sun"],
      start: "09:00",
      end: "11:30",
    },
    sections: {
      Mains: {
        "Venney's Large Breakfast": {
          price: 14,
        },
        "Venney's Small Breakfast": {
          price: 11,
        },
        "Venney's Vegetarian Breakfast": {
          price: 14,
          dietary: ["V"],
        },
        "Venney's Vegan Breakfast": {
          price: 14,
          dietary: ["VG"],
        },
        "Eggs Benedict": {
          price: 10,
        },
        "Eggs on Toast": {
          price: 6,
          choices: {
            Eggs: ["Poached", "Scrambled", "Fried"],
          },
        },
        "Spiced Avocado and Egg Muffin": {
          price: 9,
        },
        "Belgium Waffle": {
          price: 9,
        },
        "Sausage Bun": {
          price: 7,
        },
        "Egg Bun": {
          price: 6,
        },
        "Bacon Bun": {
          price: 7,
        },
        "Breakfast Bun": {
          price: 9,
        },
        "Greek Yogurt with Granola": {
          price: 7,
        },
      },
      "Extras (£1.50 each)": {
        Sausage: {
          price: 1.5,
        },
        Bacon: {
          price: 1.5,
        },
        "Baked Beans": {
          price: 1.5,
        },
        "Black Pudding": {
          price: 1.5,
        },
        Egg: {
          price: 1.5,
        },
        Tomato: {
          price: 1.5,
        },
        Mushroom: {
          price: 1.5,
        },
        "Potato Croquettes": {
          price: 1.5,
        },
        Toast: {
          price: 1.5,
        },
        "Fried Bread": {
          price: 1.5,
        },
        "Bread and Butter": {
          price: 1.5,
        },
        "Jam and Marmalade": {
          price: 1.5,
        },
      },
    },
  },
  Lunch: {
    availability: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      start: "12:00",
      end: "16:00",
    },
    sections: {
      Snacks: {
        "Nduja Spiced Hummus": {
          price: 7,
        },
        "Cheese and Pickle Sausage Roll": {
          price: 7,
        },
        "Sticky Corn Ribs": {
          price: 7,
        },
        "Classic Scotch Egg": {
          price: 8,
        },
        "Pork Scratchings": {
          price: 7,
        },
      },
      "Pub Classics": {
        "Fish and Chips": {
          price: 19,
          choices: {
            Peas: ["Crushed Peas", "Garden Peas"],
          },
        },
        "Scampi and Chips": {
          price: 19,
          choices: {
            Peas: ["Crushed Peas", "Garden Peas"],
          },
        },
        "Brisket Burger": {
          price: 22,
        },
        "Steak and Ale Pie": {
          price: 24,
        },
        "Beef Bourguignon": {
          price: 26,
        },
        "Sirloin Steak": {
          price: 26,
          choices: {
            Rarity: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
            Sauce: ["No Sauce", "Peppercorn", "Chimichurri", "Charcuterie"],
          },
        },
        "Ribeye Steak": {
          price: 27,
          choices: {
            Rarity: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
            Sauce: ["No Sauce", "Peppercorn", "Chimichurri", "Charcuterie"],
          },
        },
      },
      "Steak Sauces": {
        Peppercorn: {
          price: 3,
        },
        Chimichurri: {
          price: 3,
        },
        Charcuterie: {
          price: 3,
        },
      },
      "Paratha Wrap Fillings": {
        "Chicken Biryani": {
          price: 11,
        },
        "Prawn, Crab & Avocado": {
          price: 12,
        },
        "Smoked Ham & Leeks": {
          price: 11,
        },
        "Philly Cheese Steak": {
          price: 12,
        },
        "Grilled Cheese": {
          price: 11,
        },
        "Garlic Mushrooms": {
          price: 11,
        },
      },
      Sweets: {
        "Salame De Chocolate": {
          price: 10,
        },
        "Golden Syrup Cake": {
          price: 10,
        },
        "3 Cheeses": {
          price: 14,
        },
        "Lemon Tart": {
          price: 10,
        },
        "Strawberry Cheesecake": {
          price: 10,
        },
        "Ice Cream": {
          price: 2.5,
          scoopBuilder: {
            maxScoops: 4,
            flavours: [
              "Vanilla",
              "Strawberry",
              "Mint-Choc Chip",
              "Chocolate",
              "Raspberry Cheesecake",
              "Honeycomb",
              "Cookie Dough",
              "Cherry Chocolate",
              "Rum & Raisin",
              "Salted Caramel",
            ],
          },
        },
        Sorbet: {
          price: 2.5,
          scoopBuilder: {
            maxScoops: 2,
            flavours: ["Raspberry", "Mango"],
          },
        },
      },
    },
  },
  Evening: {
    availability: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      start: "16:00",
      end: "20:15",
    },
    sections: {
      Snacks: {
        "Nduja Spiced Hummus": {
          price: 7,
        },
        "Cheese and Pickle Sausage Roll": {
          price: 7,
        },
        "Sticky Corn Ribs": {
          price: 7,
        },
        "Classic Scotch Egg": {
          price: 8,
        },
        "Pork Scratchings": {
          price: 7,
        },
      },
      Starters: {
        "BBQ Tiger Prawns": {
          price: 12,
        },
        "Chicken Liver Parfait": {
          price: 10,
        },
        "Summer Squash Tartlet": {
          price: 10,
        },
        "Seabass Ceviche": {
          price: 12,
        },
        "Welsh Rarebit": {
          price: 10,
        },
      },
      Mains: {
        "Pork Chop": {
          price: 30,
        },
        "Potato Crushed Cod Loin": {
          price: 28,
        },
        "Spring Vegetable Rigatoni": {
          price: 22,
        },
        "Kashmir of Lamb": {
          price: 32,
        },
        "Plaice Fillet": {
          price: 28,
        },
      },
      "Pub Classics": {
        "Fish and Chips": {
          price: 19,
          choices: {
            Peas: ["Crushed Peas", "Garden Peas"],
          },
        },
        "Scampi and Chips": {
          price: 19,
          choices: {
            Peas: ["Crushed Peas", "Garden Peas"],
          },
        },
        "Brisket Burger": {
          price: 22,
        },
        "Steak and Ale Pie": {
          price: 24,
        },
        "Beef Bourguignon": {
          price: 26,
        },
        "Sirloin Steak": {
          price: 26,
          choices: {
            Rarity: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
            Sauce: ["No Sauce", "Peppercorn", "Chimichurri", "Charcuterie"],
          },
        },
        "Ribeye Steak": {
          price: 27,
          choices: {
            Rarity: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
            Sauce: ["No Sauce", "Peppercorn", "Chimichurri", "Charcuterie"],
          },
        },
      },
      "Sides & Steak Sauces": {
        Peppercorn: {
          price: 3,
        },
        Chimichurri: {
          price: 3,
        },
        Charcuterie: {
          price: 3,
        },
        Chips: {
          price: 3.5,
        },
        "BBQ Hispi": {
          price: 3,
        },
        "Parmesan Fries": {
          price: 4.5,
        },
        "Potato Bhaji": {
          price: 3,
        },
        Dauphinoise: {
          price: 3.5,
        },
        "Green Beans & Roasted Carrots": {
          price: 3.5,
        },
      },
      Sweets: {
        "Salame De Chocolate": {
          price: 10,
        },
        "Golden Syrup Cake": {
          price: 10,
        },
        "3 Cheeses": {
          price: 14,
        },
        "Lemon Tart": {
          price: 10,
        },
        "Strawberry Cheesecake": {
          price: 10,
        },
        "Ice Cream": {
          price: 2.5,
          scoopBuilder: {
            maxScoops: 4,
            flavours: [
              "Vanilla",
              "Strawberry",
              "Mint-Choc Chip",
              "Chocolate",
              "Raspberry Cheesecake",
              "Honeycomb",
              "Cookie Dough",
              "Cherry Chocolate",
              "Rum & Raisin",
              "Salted Caramel",
            ],
          },
        },
        Sorbet: {
          price: 2.5,
          scoopBuilder: {
            maxScoops: 2,
            flavours: ["Raspberry", "Mango"],
          },
        },
      },
    },
  },
  "Children's": {
    availability: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      start: "09:00",
      end: "20:15",
    },
    sections: {
      Mains: {
        "Chicken Nuggets": {
          price: 9,
          choices: {
            Side: ["Beans", "Peas"],
          },
        },
        "Chicken Burger": {
          price: 9,
          choices: {
            Side: ["Beans", "Peas"],
          },
        },
        "Linguini with Beef Bolognaise": {
          price: 9,
        },
        "Fresh Haddock Goujons": {
          price: 9,
          choices: {
            Side: ["Beans", "Peas"],
          },
        },
        "Quorn Sausage": {
          price: 9,
          choices: {
            Side: ["Beans", "Peas"],
          },
        },
      },
      Drinks: {
        "Orange Fruit Shoot": {
          price: 2.95,
        },
        "Blackcurrant Fruit Shoot": {
          price: 2.95,
        },
        "Orange Juice": {
          price: 2.5,
        },
        "Apple Juice": {
          price: 2.5,
        },
      },
    },
  },
  Sunday: {
    availability: {
      days: ["Sun"],
      start: "12:00",
      end: "18:15",
    },
    sections: {
      Starters: {
        "Smoked Trout": {
          price: 12,
        },
        "Soup of the Day": {
          price: 9,
          dietary: ["GF"],
          choices: {
            Bread: ["White Roll", "Granary Roll"],
          },
        },
        "Pan Fried Garlic Mushrooms": {
          price: 9,
          dietary: ["V"],
        },
      },
      Mains: {
        "Slow Roasted Sirloin Beef": {
          price: 20,
          dietary: ["GFA"],
        },
        "Roasted Chicken Breast": {
          price: 18,
          dietary: ["GFA"],
        },
        "Roasted Pork Loin": {
          price: 19,
          dietary: ["GFA"],
        },
        "Quorn Sausages": {
          price: 18,
          dietary: ["V", "GF", "VGA"],
        },
        "Lincolnshire Sausages": {
          price: 18,
        },
        "Traditional Haddock": {
          price: 19,
          dietary: ["GFA"],
          choices: {
            Peas: ["Mushy Peas", "Garden Peas"],
            Tartar: ["Tartar", "No Tartar"],
          },
        },
        "Small Traditional Haddock": {
          price: 14,
          dietary: ["GFA"],
          choices: {
            Peas: ["Mushy Peas", "Garden Peas"],
            Tartar: ["Tartar", "No Tartar"],
          },
        },
        Scampi: {
          price: 19,
          dietary: ["GFA"],
          choices: {
            Peas: ["Mushy Peas", "Garden Peas"],
            Tartar: ["Tartar", "No Tartar"],
          },
        },
        "Small Scampi": {
          price: 14,
          dietary: ["GFA"],
          choices: {
            Peas: ["Mushy Peas", "Garden Peas"],
            Tartar: ["Tartar", "No Tartar"],
          },
        },
        "Sweet Potato Roulade": {
          price: 18,
          dietary: ["V", "VG"],
        },
        "Steak and Ale Pie": {
          price: 22,
        },
        "Venney's Children's Roast": {
          price: 14,
          choices: {
            Meat: [
              "Roasted Sirloin Beef (+£2)",
              "Roasted Pork Loin",
              "Chicken Breast",
              "Lincolnshire Sausages",
              "Quorn Sausages (V)",
            ],
          },
        },
      },
      "Side Dishes": {
        "Pot of Gravy": {
          price: 1.5,
          dietary: ["GF"],
        },
        Stuffing: {
          price: 2,
        },
        "Yorkshire Pudding": {
          price: 1.5,
          dietary: ["V"],
        },
        "Cauliflower Cheese": {
          price: 4,
          dietary: ["V", "GF"],
        },
        "Roast Potatoes": {
          price: 3.5,
          dietary: ["V", "VG", "GF"],
        },
        "Buttered Vegetables": {
          price: 4,
          dietary: ["V", "GF"],
        },
      },
    },
  },
};
