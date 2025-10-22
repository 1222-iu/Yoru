// src/data/menu.js

export const menuCategories = [
    {
        name: "Coffee",
        path: "coffee",
        items: [
            { id: 'c1', name: "Espresso", price: 120, img: "/images/espresso.jpg", description: "A concentrated shot of pure coffee extracted under high pressure, delivering intense flavor and rich crema..." },
            { id: 'c2', name: "Cappuccino", price: 150, img: "/images/cappucino.jpeg", description: "Classic Italian coffee drink featuring equal parts espresso, steamed milk, and velvety milk foam..." },
            { id: 'c3', name: "Latte", price: 140, img: "/images/latte.jpeg", description: "Smooth and creamy espresso-based drink with steamed milk and a thin layer of microfoam..." },
            { id: 'c4', name: "Americano", price: 110, img: "/images/americano.jpg", description: "Espresso diluted with hot water to create a smooth, full-bodied coffee..." },
            { id: 'c5', name: "Mocha", price: 160, img: "/images/mocha.jpg", description: "Decadent combination of rich espresso, premium chocolate syrup, and steamed milk..." },
            { id: 'c6', name: "Macchiato", price: 145, img: "/images/macchiato.jpg", description: "Espresso 'marked' with a small amount of foamed milk..." },
            { id: 'c7', name: "Flat White", price: 150, img: "/images/flat-white.jpg", description: "Australian-inspired coffee featuring espresso with velvety microfoam milk..." },
            { id: 'c8', name: "Affogato", price: 170, img: "/images/affogato.jpg", description: "Italian dessert coffee featuring a scoop of premium vanilla ice cream 'drowned' in hot espresso..." },
            { id: 'c9', name: "Cortado", price: 135, img: "/images/cortado.jpg", description: "Spanish-style coffee with equal parts espresso and warm milk..." },
            { id: 'c10', name: "Cold Brew Coffee", price: 180, img: "/images/cold-brew.jpg", description: "Smooth and naturally sweet coffee brewed for 18-24 hours in cold water..." },
            { id: 'c11', name: "Irish Coffee", price: 220, img: "/images/irish-coffee.jpg", description: "Classic cocktail featuring hot coffee, Irish whiskey, and topped with lightly whipped cream..." },
            { id: 'c12', name: "Café au Lait", price: 145, img: "/images/cafe-au-lait.jpg", description: "French-style coffee with equal parts brewed coffee and steamed milk..." },
        ]
    },
    {
        name: "Milk Tea",
        path: "milktea",
        items: [
            { id: 'mt1', name: "Classic Milk Tea", price: 100, img: "/images/classic-milktea.jpg", description: "Traditional black tea blended with creamy milk and chewy tapioca pearls..." },
            { id: 'mt2', name: "Wintermelon Milk Tea", price: 110, img: "/images/wintermelon.jpg", description: "Refreshing wintermelon syrup combined with fresh milk tea and chewy pearls..." },
            { id: 'mt3', name: "Okinawa Milk Tea", price: 115, img: "/images/okinawa.jpg", description: "Premium brown sugar-infused tea with creamy milk and chewy pearls..." },
            { id: 'mt4', name: "Taro Milk Tea", price: 120, img: "/images/taro.jpg", description: "Creamy taro root blend mixed with fresh milk tea and chewy tapioca pearls..." },
            { id: 'mt5', name: "Hokkaido Milk Tea", price: 125, img: "/images/hokkaido.jpg", description: "Rich caramel and milk flavor inspired by Hokkaido's famous dairy products..." },
            { id: 'mt6', name: "Matcha Milk Tea", price: 130, img: "/images/matcha-milktea.jpg", description: "Premium Japanese matcha green tea powder blended with creamy milk..." },
            { id: 'mt7', name: "Thai Milk Tea", price: 125, img: "/images/thai-milktea.jpg", description: "Authentic Thai tea blend with condensed milk and chewy pearls..." },
            { id: 'mt8', name: "Red Velvet Milk Tea", price: 135, img: "/images/red-velvet-milktea.jpg", description: "Decadent red velvet cake-inspired milk tea with cream cheese flavor..." },
            { id: 'mt9', name: "Cookies & Cream Milk Tea", price: 140, img: "/images/cookies-cream-milktea.jpg", description: "Creamy milk tea blended with crushed chocolate cookies and chewy pearls..." },
        ]
    },
    {
        name: "Fruit Tea",
        path: "fruittea",
        items: [
            { id: 'ft1', name: "Mango Fruit Tea", price: 95, img: "/images/mango-fruittea.jpg", description: "Refreshing mango tea blend with tropical notes and natural mango flavor..." },
            { id: 'ft2', name: "Strawberry Fruit Tea", price: 95, img: "/images/strawberry-fruittea.jpg", description: "Sweet and tangy strawberry tea perfect for summer days..." },
            { id: 'ft3', name: "Blueberry Fruit Tea", price: 100, img: "/images/blueberry-fruittea.jpg", description: "Tangy blueberry with refreshing tea base creates a perfect harmony of flavors..." },
            { id: 'ft4', name: "Lychee Fruit Tea", price: 105, img: "/images/lychee-fruittea.jpg", description: "Floral and fruity lychee infused with premium black tea..." },
            { id: 'ft5', name: "Passionfruit Fruit Tea", price: 105, img: "/images/passionfruit-fruittea.jpg", description: "Tropical passionfruit flavor with a tangy twist that awakens your taste buds..." },
            { id: 'ft6', name: "Kiwi Fruit Tea", price: 110, img: "/images/kiwi-fruittea.jpg", description: "Refreshing kiwi tea with a hint of sweetness and natural tartness..." },
            { id: 'ft7', name: "Peach Fruit Tea", price: 105, img: "/images/peach-fruittea.jpg", description: "Sweet and aromatic peach tea with natural peach flavor and a hint of honey..." },
            { id: 'ft8', name: "Lemon Fruit Tea", price: 100, img: "/images/lemon-fruittea.jpg", description: "Zesty lemon tea with fresh lemon juice and a touch of honey..." },
            { id: 'ft9', name: "Watermelon Fruit Tea", price: 115, img: "/images/watermelon-fruittea.jpg", description: "Refreshing watermelon tea with natural watermelon juice and mint leaves..." },
        ]
    },
    {
        name: "Pasta & Sandwiches",
        path: "food",
        items: [
            { id: 'f1', name: "Carbonara Pasta", price: 280, img: "/images/carbonara.jpg", description: "Classic Italian pasta with creamy egg sauce, crispy pancetta, and Parmesan cheese..." },
            { id: 'f2', name: "Aglio e Olio Pasta", price: 220, img: "/images/aglio-olio.jpg", description: "Simple yet flavorful pasta with garlic, olive oil, and red pepper flakes..." },
            { id: 'f3', name: "Pesto Pasta", price: 250, img: "/images/pesto-pasta.jpg", description: "Fresh basil pesto pasta with pine nuts and Parmesan cheese..." },
            { id: 'f4', name: "Grilled Cheese Sandwich", price: 180, img: "/images/grilled-cheese.jpg", description: "Classic comfort food featuring melted cheddar and mozzarella cheese..." },
            { id: 'f5', name: "Club Sandwich", price: 220, img: "/images/club-sandwich.jpg", description: "Triple-decker sandwich with grilled chicken breast, crispy bacon, fresh lettuce, and tomato..." },
            { id: 'f6', name: "Italian Panini", price: 200, img: "/images/panini.jpg", description: "Pressed Italian sandwich with prosciutto, fresh mozzarella, basil, and sun-dried tomatoes..." },
            { id: 'f7', name: "Alfredo Pasta", price: 260, img: "/images/alfredo-pasta.jpg", description: "Creamy Alfredo sauce with fettuccine pasta, garlic, and Parmesan cheese..." },
            { id: 'f8', name: "Veggie Sandwich", price: 190, img: "/images/veggie-sandwich.jpg", description: "Fresh vegetable sandwich with avocado, cucumber, bell peppers, sprouts, and hummus..." },
            { id: 'f9', name: "Arrabiata Pasta", price: 240, img: "/images/arrabiata.jpg", description: "Spicy tomato sauce pasta with garlic and red chili peppers..." },
            { id: 'f10', name: "Bolognese Pasta", price: 270, img: "/images/bolognese.jpg", description: "Traditional Italian meat sauce with ground beef, tomatoes, onions, and herbs..." },
            { id: 'f11', name: "Marinara Pasta", price: 200, img: "/images/marinara.jpg", description: "Classic tomato sauce pasta with fresh basil, garlic, and olive oil..." },
            { id: 'f12', name: "Puttanesca Pasta", price: 230, img: "/images/puttanesca.jpg", description: "Bold and flavorful pasta with tomatoes, olives, capers, anchovies, and garlic..." },
            { id: 'f13', name: "Turkey Sandwich", price: 210, img: "/images/turkey-sandwich.jpg", description: "Fresh roasted turkey breast with crisp lettuce, juicy tomatoes, and creamy mayonnaise..." },
            { id: 'f14', name: "Tuna Sandwich", price: 195, img: "/images/tuna-sandwich.jpg", description: "Premium tuna salad with celery, onions, and light mayonnaise on toasted sourdough bread..." },
            { id: 'f15', name: "Avocado Toast", price: 175, img: "/images/avocado-toast.jpg", description: "Artisan sourdough toast topped with creamy avocado, microgreens, and a perfectly poached egg..." },
        ]
    },
    {
        name: "Pastries",
        path: "pastries",
        items: [
            { id: 'p1', name: "Croissant", price: 80, img: "/images/croissant.jpg", description: "Flaky, buttery pastry made with premium French butter and traditional techniques..." },
            { id: 'p2', name: "Chocolate Cake", price: 150, img: "/images/chocolate-cake.jpg", description: "Rich and moist chocolate delight made with premium cocoa and dark chocolate..." },
            { id: 'p3', name: "Cheesecake", price: 140, img: "/images/cheesecake.jpg", description: "Creamy New York-style cheesecake with a buttery graham cracker crust..." },
            { id: 'p4', name: "Cinnamon Roll", price: 90, img: "/images/cinnamon-roll.jpg", description: "Sweet roll swirled with cinnamon sugar and topped with cream cheese frosting..." },
            { id: 'p5', name: "Blueberry Muffin", price: 85, img: "/images/muffin.jpg", description: "Soft muffin bursting with fresh blueberries and topped with a sweet crumb topping..." },
            { id: 'p6', name: "Fruit Danish", price: 95, img: "/images/danish.jpg", description: "Flaky pastry topped with fresh seasonal fruits and sweet glaze..." },
            { id: 'p7', name: "Tiramisu", price: 160, img: "/images/tiramisu.jpg", description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone filling..." },
            { id: 'p8', name: "Chocolate Brownie", price: 120, img: "/images/brownie.jpg", description: "Fudgy chocolate brownie with a crackly top and gooey center..." },
            { id: 'p9', name: "Apple Pie", price: 130, img: "/images/apple-pie.jpg", description: "Traditional apple pie with flaky butter crust and sweet-tart apple filling..." },
        ]
    }
];

// Data for Protected Route
export const ADMIN_SECRET_MENU = [
    { id: 'a1', name: 'Seasonal Blend', price: 250, description: 'Limited Edition Coffee Blend for Admins.' },
    { id: 'a2', name: 'Premium Wagyu Sandwich', price: 999, description: 'The boss’s secret lunch.' },
];