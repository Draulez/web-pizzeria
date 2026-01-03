export type MenuItem = {
    name: string;
    description?: string;
    image?: string;
    price: number;
};

export type MenuCategory = {
    id: string;
    title: string;
    items: MenuItem[];
};

export const menu: MenuCategory[] = [
    {
        id: "ensaladas",
        title: "Ensaladas",
        items: [
            {
                name: "Ensalada de la casa",
                description: "Mezclum de ensalada, tomate, nueces, arándanos, queso de cabra y mermelada",
                price: 10,
            },
            {
                name: "Caprese",
                description: "Tomate, mozzarella, orégano y albahaca",
                price: 12.50,
            },
        ],
    },
    {
        id: "entrantes",
        title: "Entrantes",
        items: [
            {
                name: "Carpaccio De Buey",
                description: "Carne de buey cruda y grana padano",
                price: 14.50,
            },
            {
                name: "Carpaccio de Bresaola",
                description: "Carne de buey curada, rucula, grana padano y tomate cherry",
                price: 14.50,
            },
            {
                name: "Carpaccio de calabacín",
                price: 11.50,
            },
            {
                name: "Vitello Tonatto",
                description: "Carne de ternera hervida en marinado de vino blanco con salsa de mayonesa, atún, anchoa y alcaparra",
                price: 14.50,
            },
            {
                name: "Burata con pomodori y secchi y crudo",
                description: "Queso mozzarella relleno de queso ricotta, jamon serrano y focaccia",
                price: 16,
            },
            {
                name: "Tomino con alcachofa y speck",
                price: 14.50,
            },
            {
                name: "Pan tostado con gorgonzola, mascarpone y speck",
                price: 12.50,
            },
            {
                name: "Melanzana alla parmigiana",
                description: "Berenjena, salsa de tomate y queso mozzarella",
                price: 12,
            },
        ],
    },
    {
        id: "pizzas",
        title: "Pizzas",
        items: [
            {
                name: "Margherita",
                description: "Tomate y mozzarella",
                price: 10,
            },
            {
                name: "Focaccia con pomodoro",
                description: "Tomate fresco, rúcula y grana padano",
                price: 11,
            },
            {
                name: "Focaccia de ajo",
                price: 9,
            },
            {
                name: "Caprese",
                description: "Tomate, mozzarella y tomate fresco",
                price: 11.50,
            },
            {
                name: "Funghi",
                description: "Tomate, mozzarella y champiñones",
                price: 11,
            },
            {
                name: "Ortolana",
                description: "Tomate, mozzarella, champiñones, calabacín, pimiento y berenjena",
                price: 12.50,
            },
            {
                name: "Norma",
                description: "Tomate, mozzarella, ricotta, scamorza y berenjena",
                price: 13,
            },
            {
                name: "Primavera",
                description: "Tomate, mozzarella, tomate cherry, ricotta y grana padano",
                price: 13,
            },
            {
                name: "4 Formaggi",
                price: 13,
            },
            {
                name: "Cotto",
                description: "Tomate fresco, rúcula y grana padano",
                price: 11,
            },
            {
                name: "Proscuitto e Funghi",
                description: "Tomate, mozzarella, jamon york y champiñones",
                price: 11.50,
            },
            {
                name: "Bismark",
                description: "Tomate, mozzarella, bacon y huevo",
                price: 12.50,
            },
            {
                name: "Diavola",
                description: "Tomate, mozzarella, salami picante y cebolla",
                price: 12.50,
            },
            {
                name: "Mafiosa",
                description: "Tomate, mozzarella, champiñones, jamon york, ajo, cebolla y guindilla",
                price: 13,
            },
            {
                name: "Peperoni salami picante",
                description: "Tomate, mozzarella, peperonata y salami picante",
                price: 13,
            },
            {
                name: "Peperoni salsiccia",
                description: "Tomate, mozzarella, peperonata y salsiccia",
                price: 13,
            },
            {
                name: "Campesina",
                description: "Tomate, mozzarella, gorgonzola y pancetta",
                price: 14,
            },
            {
                name: "Giuseppe Ginocchio",
                description: "Tomate, mozzarella de bufala, bacon, salami picante y cebolla",
                price: 13.50,
            },
            {
                name: "Hijo de G.G",
                description: "Tomate, mozzarella, nata, bacon, bolognesa, salami picante y huevo",
                price: 14,
            },
            {
                name: "Angel",
                description: "Crema de puerros, mozzarella, guanciale y pecorino",
                price: 16,
            },
            {
                name: "Stagioni",
                description: "Tomate, mozzarella, champiñones, jamon york, alcachofa y aceitunas",
                price: 14,
            },
            {
                name: "Bolognesa",
                price: 12.50,
            },
            {
                name: "Barbacoa",
                description: "Tomate, mozzarella, carne de ternera picada y salsa barbacoa",
                price: 12.50,
            },
            {
                name: "Calzone",
                description: "Tomate, mozzarella, jamon york y champiñones",
                price: 12.50,
            },
            {
                name: "El Teide",
                description: "Doble masa, tomate, mozarella, ricotta, bacon, salami picante y salsiccia casera",
                price: 19,
            },
            {
                name: "Delicata",
                description: "Mozzarella, mascarpone, boletus y salsiccia",
                price: 14,
            },
            {
                name: "Valtellina",
                description: "Tomate, mozzarella de buffala, carne de buey curada, rucula y grana padano y grana padano",
                price: 16,
            },
            {
                name: "Saportia",
                description: "Tomate, mozzarella de buffala, scamorza y panceta",
                price: 15,
            },
            {
                name: "Della Casa",
                description: "Tomate, mozzarella, scamorza y speck",
                price: 14,
            },
            {
                name: "Sorpresa",
                description: "Tomate, mozzarella, ricotta, jamon serrano, rucula y tomate cherry",
                price: 13.50,
            },
            {
                name: "Crudo",
                description: "Tomate, mozzarella y jamón serrano",
                price: 13,
            },
            {
                name: "Arcobaleno",
                description: "Tomate, mozzarella, atún, maíz y cebolla",
                price: 12,
            },
            {
                name: "Napoli",
                description: "Tomate, mozzarella, anchoas y alcaparras",
                price: 12,
            },
            {
                name: "Al Salmone",
                description: "Tomate, mozzarella nata y salmon",
                price: 14,
            },
            {
                name: "Frutti di Mare",
                description: "Tomate, mozzarella y mariscos",
                price: 15,
            },
            {
                name: "Trentina",
                description: "Tomate, mozzarella, ricotta, scamorza y berenjena",
                price: 16,
            },
            {
                name: "Tropicale",
                description: "Tomate, mozzarella, piña y gambas",
                price: 12,
            },
        ],
    },
    {
        id: "pastas",
        title: "Pastas",
        items: [
            {
                name: "Pasta \"Buona\"",
                description: "Pasta rellena con zamburina y gambas con salsa de gambetas, tomate cherry, calabacín y nata",
                price: 16,
            },
            {
                name: "Lasagna",
                description: "Pasta fresca con salsa bolognesa y bechamel",
                price: 13,
            },
            {
                name: "Caneloni de carne",
                description: "Pasta rellena de carne con salsa de tomate y nata",
                price: 12.50,
            },
            {
                name: "Raviolli al forno",
                description: "Pasta rellena de carne al horno en salsa de nata y york",
                price: 13,
            },
            {
                name: "Tortellini de la Nonna",
                description: "Pasta fresca rellena de carne con salsa de nata, champiñones y jamon york",
                price: 13,
            },
            {
                name: "Raviolacci Piementesi",
                description: "Pasta fresca rellena de carne con salsa de nata, grana padano y nuez moscada",
                price: 14,
            },
            {
                name: "Agnoli con Tartufo e Stracchino",
                description: "Pasta fresca rellena de stracchino con salsa de mantequilla y trufa negra fresca",
                price: 15,
            },
            {
                name: "Cappellacio foie gras",
                description: "Pasta rellena de foie gras con salsa de mantequilla sabor trufa blanca",
                price: 15,
            },
            {
                name: "Farfalle al Salmone",
                description: "Pasta mariposa con salsa de nata y salmon",
                price: 14,
            },
            {
                name: "Caneloni vegetali",
                description: "Pasta rellena de verduras con salsa de tomate y nata",
                price: 12.50,
            },
            {
                name: "Quadrotti",
                description: "Pasta fresca rellena de queso con salsa cuatro quesos",
                price: 14,
            },
            {
                name: "Girasoli",
                description: "Pasta fresca rellena de queso y nueces con salsa de nata y speck",
                price: 14.50,
            },
            {
                name: "Pasta de pera",
                description: "Pasta fresca rellena de queso y pera con salsa de nata",
                price: 15,
            },
            {
                name: "Panzerotti",
                description: "Pasta fresca rellena de requesón y espinacas con salsa de tomate y nata",
                price: 13,
            },
            {
                name: "Ravioloni ai Funghi",
                description: "Pasta fresca rellena de setas con salsa de nata y champiñones",
                price: 14,
            },
            {
                name: "Tortelini de calabaza",
                description: "Pasta fresca rellena de calabaza",
                price: 14,
            },
            {
                name: "Gnochi \"alla Bolognesa\"",
                description: "Carne de ternera picada y tomate",
                price: 12,
            },
            {
                name: "Gnocchi cuatro quesos",
                price: 14,
            },
            {
                name: "Penne \"alla Amatriciana\"",
                description: "Bacon, cebolla, guindilla y tomate",
                price: 12.50,
            },
            {
                name: "Penne \"alla Bolognesa\"",
                description: "Carne de ternera picada y tomate",
                price: 12.50,
            },
            {
                name: "Rigatoni \"verduritas picante\"",
                description: "Pasta seca con salsa de berenjena, calabacín, pimienta, tomate, cebolla, ajo, puerro y guindilla",
                price: 15,
            },
            {
                name: "Rigatoni \"alla Concha\"",
                description: "Pasta seca con anchoas, alcaparras, guindilla y salsa napoli",
                price: 14,
            },
            {
                name: "Tagliatelle de l´Angel",
                description: "La salsiccia i funghi parcini e la crema al tartufo",
                price: 17.50,
            },
            {
                name: "Tagliatelle al ragu de jabali",
                price: 18,
            },
            {
                name: "Spaguetti ai Frutti di Mare",
                price: 18,
            },
            {
                name: "Spaguetti \"alla Bolognesa\"",
                description: "Carne de ternetra picada y tomate",
                price: 12.50,
            },
            {
                name: "Spaguetti \"alla Carbonara\"",
                description: "Bacon, huevo y nata",
                price: 12.50,
            },
            {
                name: "Spaguetti aglio olio",
                description: "Aceite, ajo y guindilla",
                price: 11,
            },
            {
                name: "Fettucini Maremonti",
                description: "Champiñones, jamon cocido, gambas y nata",
                price: 14.50,
            },
        ],
    },
    {
        id: "carnes",
        title: "Carnes",
        items: [
            {
                name: "Estofado de jabalí con polenta",
                price: 21,
            },
        ],
    },
    {
        id: "postres",
        title: "Postres",
        items: [
            {
                name: "Postres de la casa",
                price: 6.50,
            },
        ],
    },
    {
        id: "vinos",
        title: "Vinos",
        items: [
            {
                name: "Postres de la casa",
                price: 6.50,
            },
        ],
    },
];
