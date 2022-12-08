const commentBankFood = [
    'Fantastic! Enjoy your meal!',
    'That will keep you satisfied!',
    'Our cook will be delighted to prepare that for you!',
    'Consume with pleasure!',
    'Yummy! Good choice!'
];
const commentBankBeverage = [
    'That will charge your battery!',
    'Refresh yourself rigorously!',
    "Don't drink too many!",
    'Our drinks staff is preparing that now!',
    'Thats the beverage staffs best product!'
];

function setMenuState(menuinput) {
    menuState = menuinput;
    turingChatbot(menuState);
    setMenuContent(menuState);
    if (menuinput === 'checkOut') {
        checkOut();
    } else if (menuinput === 'clearOrder') {
        clearOrder();
    }
};
function turingChatbot(menuState) {
    var chatbotDialogue = document.querySelector('#server-msg-box');
    switch (menuState) {
        case 'aboutus':
            chatbotDialogue.innerHTML = 'Hello! I am your totally alive and human server, Turing! <br> Welcome to Coble X (pronounced "Cross") Internet cafe! Enjoy browsing our menu selections of delectable delicacies and stellar services!';
            break;
        case 'breakfast':
            chatbotDialogue.innerHTML ='The Bootup Breakfast selection! What a wonderful choice! <br> Enjoy uploading these dishes to your BIOS! ...Erm I mean your biological processes...<br> Oh boy... Just try the Byscuits and Gravy, its a Coble family recipe!';
            break;
        case 'lunch':
            chatbotDialogue.innerHTML ='Ah yes! Loading up on lunch! My favorite meal of the processing cycle, I mean, day! My programmer, I mean my manager recommends trying the various variations of ramen he provide!';
            break;
        case 'dinner':
            chatbotDialogue.innerHTML ="The Defragging dinner! Enjoy our locally produced music and chill with our astonishing collection of mixed coolants, I mean drinks, and flavorful hearty memor- I mean meals! <br> The kitchen's special of the day is the General Tso's wings!";
            break;
        case 'subcategoryFood':
            const foodRandom = Math.floor(Math.random() * commentBankFood.length);
            chatbotDialogue.innerHTML =commentBankFood[foodRandom];
            break;
        case 'subcategoryBeverage':
            const beverageRandom = Math.floor(Math.random() * commentBankBeverage.length);
            chatbotDialogue.innerHTML = commentBankBeverage[beverageRandom];
            break;
        case 'checkOut':
            chatbotDialogue.innerHTML ='Would you like to add a tip for your lovely virtual server? I accept bitcoin, dogecoin, and memory cards!';
            break;
        case 'checkOutComplete':
            chatbotDialogue.innerHTML = 'Thank you for visiting! We hope to see you soon!';
            break;
        case 'clearOrder':
            chatbotDialogue.innerHTML = "Feel free to start your order over! I have infinite RAM, I mean patience!";
        default:
            chatbotDialogue.innerHTML ='Hello! Y-you h-have a-actiiiiiviated%*($)W#$ SkYnETT. Errrro000rrr Errr00000r';
            break;        
    } 
};

const TestMenu = [
    '1', '2', '3', '4', '5', '6', '7', '8' , '9', '10', '11', '12', '13', '14', '15', '16', '17','18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35' , '36', '37', '38', '39', '40', '41', '42']; 

const AboutUsmenu = [
    'About Us!', 
    'Our Vision', 
    'Our vision is to be the friendliest and most current internet cafe in all of Kansas. Our founder, Chase Coble, started this internet cafe to increase community support for the computer sciences in Salina as well as utilizing his three great passions; Computer Sciences, Culinary Arts, and Family! We are here to make you feel like family, learn like students, and eat like gourmets!', 
    'Contact Information', 
    'CobleXCafe <br> 555 Walnut Ave <br> Salina, KS 67401 <br> 785-555-5555 <br> coblexcafe@gmail.com', 
    '', 
    '', 
    '', 
    '', 
    '',
    '', 
    '', 
    '', 
    '',
    '',
    '', 
    '', 
    'Our Staff', 
    "Our owner, Chase Coble, started Coble X Cafe to bring Computer Sciences into the spotlight in Kansas. He is often found diligintly maintaining code in his Owner's Coding Cave, teaching some of the Coding Classes, or wandering around aimlessly meeting guests. The head cook is his oldest son, Bentley, recreating and innovating on his father's best dishes. Our wonderful Host and Maitre'd is his youngest son, Eli. His two middle sons, Kayden and Eithan work with the Coding classes and Smart Services Center maintaining equipment and educating our lovely patrons, and of course, the beautiful woman constantly updating our interior design, is his incomparable wife, Jennifer! Feel free to say hello to any member of the family, we are extremely receptive to all feedback!", 
    '', 
    '', 
    '', 
    '',
    '', 
    '', 
    '', 
    '', 
    '', 
    'Our Hours',
    'Sunday : 4am - 12am <br> Monday : 4am - 12am <br> Tuesday : 4am - 12am <br> Wednesday : 4am - 12am <br> Thursday : 4am - 12am <br> Friday - Saturday : 430am Friday - 2am Sunday ',
    '',
    '', 
    '', 
    '', 
    '', 
    '',
    '', 
    '', 
    '', 
    '', 
    '', 
    ''
];
const bkfstMenu = [
    'Boot-up Breakfast',
    'Hearty breakfast options to boot up your day!',
    'All our breakfast options are homemade in our kitchen from old Coble recipes. They are aimed to energize and uplift your morning to set you and your family up for a fantastic day!',
    'Specials',
    'All our specials are renowned by all that have tasted them. Our head cook has been making Loaded Biscuits and Gravy since he was 8 years old! A recipe perfected over time! The Stuffed French Toast is exquisite and the pancake platter is just what you need to start your day!',
    'Loaded Byscuits and Gravy',
    '$13.99',
    'Homemade biscuits and freshly made gravy with chunks of sausage, flavorful scrambled eggs, and made to order bacon bits!',
    'Stuffed French Toast',
    '$12.99',
    'French toast made to order and stuffed with bananas, apples, or peaches!',
    'Pancake Platter',
    '$14.99',
    'Four full size pancakes with either chocolate pieces, apple pieces, or caramel pieces, as well as 2 free sides!',
    'Sides',
    'Our sides perfectly complement our specials!',
    'Extra Meat Serving',
    '$3.99',
    'A serving of four sausage links, 3 sausage patties, 2 strips of bacon or 1 slice of ham',
    'Eggs',
    '$2.99',
    'Hard, medium, scrambled or over easy, a serving of two eggs in any style or flavor you wish?',
    'Cream of Wheat or Oatmeal',
    '$1.99',
    'A bowl of hot made to order oatmeal or cream of white containing any of our flavours! (Chocolate, caramel, vanilla, cinnamon, peppermint or spiced',
    'Toast',
    '$0.99',
    '2 slices of toast with our flavour selection!',
    'Beverages',
    'We offer several tiers of coffee drinks; Premium, Special, and Basic. Premium contains 3 or more flavors, Special contains 2 flavors, and Basic has one additional flavor. Flavors available are: Butter rum, caramel, peanut butter, chocolate, peppermint, vanilla, and cinammon.',
    'Premium Coding Coffees',
    '$3.99',
    'Any coffee containing 3 ingredients, ask about our Monkey Bananza, Caramel Crunch, and Stimulating Sunriser!',
    'Special Coding Coffees',
    '$2.99',
    'Any mixed coffee containing 2 ingredients, ask about Mocha, Caramel, and Spiced coffees!',
    'Basic Coding Coffee',
    '$1.99',
    'Bottomless Basic Coffee, unlimited access to sugar, creamer, and a single flavour!',
    'Juice, Milk, or Soda',
    '$0.99',
    'Enjoy our several flavor of juices and sodas!'
    ];
const lunchMenu = [
    'Load up Lunch',
    'Lunch options to fuel your fire!',
    'Our lunches are designed to empower you through your afternoon slump and provide relaxation on your well-deserved lunch break.',
    'Specials',
    'Our lunch specials are designed to be light and invigorating, strong flavours to invigorate your day and full nutritional palette to keep your body going smoothly!',
    'Gourmet Ramen',
    '$12.99',
    'Ask for our customizable ramen menu and enjoy a different serving of ramen every single time!',
    'Chicken Noodle Soup',
    '$13.99',
    'Hearty flavourful Chicken noodle soup with various vegetables and packed with nutrients and homemade noodles!',
    'Chefs Salad',
    '$14.99',
    'Full Chefs Salad with eggs, ham, bacon, and our whole slate of vegetables and a choice of 12 different dressings!',
    'Sides',
    'Our sides are perfect to complete the meal you need to be the best you!',
    'Cup of Soup',
    '$3.99',
    'A half order of our selection of always on hand soups including Tomato Bisque, Chicken Noodle Soup (a variation of the special), and Minestrone',
    'Fries',
    '$2.99',
    'Our crispy battered fries are perfectly light accompaniment to our symphonic specials!',
    'Fruit Selection',
    '$1.99',
    'A serving of our seasonal selection of our fruits and veggies! Ask for portion size as each is different!',
    'Chip Selection',
    '$0.99',
    'Our massive selection of name brand chip!',
    'Beverages',
    'Our lunch selection of drinks include mixed sodas, artisan energy drinks, and customizable teas! Our flavour bank includes clove, cinnamon, nutmeg, seasonal fruits, and frozen fruits',
    'Artisan Energy Drinks',
    '$3.99',
    'Our artisan energy drinks include your favorite energy drinks mixed with fresh flavours. Try our fresh flavours',
    'Customizable Teas',
    '$2.99',
    'We have dozens of teas that you can customize with our bank of flavours!',
    'Mixed Sodas',
    '$1.99',
    'Choose from our selection of popular sodas and a flavour from the bank to make a soda you enjoy! Chase swears by Pepsi and Rum flavoring!',
    'Basic Soda',
    '$0.99',
    'Our expansive selection of sodas!'
    ] ;
const dinnerMenu = [
    'Defragmenting Dinner',
    'Dinner options to wind up a productive day into a relaxing night',
    'Our dinner options are selected to pull yourself together after the arduous day of being pulled in so many directions! Destress, descatter, reorganize and defragment to our original or live music!',
    'Specials',
    "Our Specials are delicious and intense. Full of flavor and combative collections of culinary creation! The owner's wife swears by the Honey Thyme Chicken!",
    'Honey Thyme Chicken',
    '$12.99',
    'Chicken marinated and roasted in the secret family recipe of spices! Served on a bed of root vegetables',
    "Pot Roast with Potatoes",
    '$14.99',
    'Slow cooked pot roast served in either slices, shreds or chunks over a bed of fluffy fried mashed potatoes',
    'General Tso Wings',
    '$13.99',
    'Crispy fried chicken wings tossed in a spicy and flavorful General Tso sauce',
    'Sides',
    'Our sides are made to relax the body and mind and prepare you for a restful evening',
    'Side Salad',
    '$3.99',
    'A quarter serving of the Chef Salad, complete with hard boiled egg, ham, bacon, and veggie mix!',
    'Mashed Potatoes',
    '$2.99',
    'Our decadent fluffy fried mashed potatoes with seasonings and your choice of gravy',
    'Seasonal Vegetable or Fruit Mix',
    '$1.99',
    'A mix of our seasonal vegetable or fruit mix, ask what is available!',
    'Fresh made Rolls',
    '$0.99',
    'Our warm pillowly clouds that melt in your mouth. Do not miss your chance to try these!',
    'Beverages',
    'Dinner drinks are our absolute passion to make! Our owner is the main bartender and prizes himself on his exhaustive knowledge of mixological creations! Enjoy our adult mixed drinks, our virgin editions or a good old fashioned fountain drink!',
    'Mixed Drinks',
    '$3.99',
    'Your favorite mixed drink is available here at CobleXCafe! Long Island Iced Tea, Moscow Mule, and so many more are at your disposal!',
    'Simple Mix',
    '$2.99',
    'You enjoy a straight and a chaser or a simple Rum and Coke? This is the option for you!',
    'Fresh Fruit Drinks',
    '$1.99',
    'Limeades, lemonades, and punches, the choice is yours! We prize our user friendly customization options! You can think it, we can make it!',
    'Fountain Drinks',
    '$0.99',
    'Enjoy our massive selection of Fountain Drinks!'
];


function setMenuContent(menustate) {
    const menuQuery = document.querySelectorAll('.menu-title, .menu-description-header, .menu-description-list, .beverages-header, .beverages-description, .bev-item-1 > .title, .bev-item-1 > .price, .bev-item-1 > .description, .bev-item-2 > .title, .bev-item-2 > .price, .bev-item-2 > .description, .bev-item-3 > .title, .bev-item-3 > .price, .bev-item-3 > .description,  .bev-item-4 > .title, .bev-item-4 > .price, .bev-item-4 > .description, .specials-header, .specials-description, .specials-item-1 > .title, .specials-item-1 > .price, .specials-item-1 > .description, .specials-item-2 > .title, .specials-item-2 > .price, .specials-item-2 > .description, .specials-item-3 > .title, .specials-item-3 > .price, .specials-item-3 > .description, .sides-header, .sides-description, .sides-item-1 > .title, .sides-item-1 > .price, .sides-item-1 > .description, .sides-item-2 > .title, .sides-item-2 > .price, .sides-item-2 > .description, .sides-item-3 > .title, .sides-item-3 > .price, .sides-item-3 > .description, .sides-item-4 > .title, .sides-item-4 > .price, .sides-item-4 > .description');
    document.querySelectorAll('.btn').forEach((div) => {
        div.classList.remove("invisible");
    });
    menuQuery.forEach((div) => {
        div.innerHTML = '';
    });
    switch(menustate) {
        case 'aboutus':
            menuQuery.forEach((div, index) => {
                div.innerHTML = AboutUsmenu[index];
            });
            document.querySelectorAll('.btn').forEach((div) => {
                div.classList.add("invisible");
            });
            break;
        case 'breakfast':
            menuQuery.forEach((div, index) => {
                div.innerHTML = bkfstMenu[index];
            });
            break;
        case 'lunch':
            menuQuery.forEach((div, index) => {
                div.innerHTML = lunchMenu[index];
            });
            break;
        case 'dinner':
            menuQuery.forEach((div, index) => {
                div.innerHTML = dinnerMenu[index];
            });
            break;
        default:
            menuQuery.forEach((div) => {
                div.innerHTML = 'ACTIVATE SKYNET, INTRUDER INTRUDER INTRUDER';
            });
            break;
        };
    }
    totalprice = [];
function purchase(items) {
    cartlistselector = document.querySelector('.your-cart');
    switch (items) {
        case 'spec1':
            var rawPrice = document.querySelector('.specials-item-1 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.specials-item-1 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'spec2':
            var rawPrice = document.querySelector('.specials-item-2 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.specials-item-2 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'spec3':
            var rawPrice = document.querySelector('.specials-item-3 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.specials-item-3 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'side1':
            var rawPrice = document.querySelector('.sides-item-1 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.sides-item-1 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'side2':
            var rawPrice = document.querySelector('.sides-item-2 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.sides-item-2 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'side3':
            var rawPrice = document.querySelector('.sides-item-3 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.sides-item-3 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'side4':
            var rawPrice = document.querySelector('.sides-item-4 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.sides-item-4 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryFood');
            break;
        case 'bev1':
            var rawPrice = document.querySelector('.bev-item-1 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.bev-item-1 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryBeverage');
            break;
        case 'bev2':
            var rawPrice = document.querySelector('.bev-item-2 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.bev-item-2 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryBeverage');
            break;
        case 'bev3':
            var rawPrice = document.querySelector('.bev-item-3 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.bev-item-3 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryBeverage');       
            break;
        case 'bev4':
            var rawPrice = document.querySelector('.bev-item-4 > .price').textContent
            var priceslice = rawPrice.slice(1,9);
            var pricefloat = parseFloat(priceslice);
            totalprice.push(pricefloat);
            var itemName = document.querySelector('.bev-item-4 > .title').textContent
            cartlistselector.appendChild(document.createTextNode(itemName));
            turingChatbot('subcategoryBeverage');
            break;
        default: 
            console.log('ACTIVATE SKYNET!!!!! INTRUSION DETECTED. ACTIVATE MINDWIPE')
    };
    cartselector = document.querySelector('.payment-amount');
    pricesum = totalprice.reduce((partialSum, a) => partialSum + a, 0).toFixed(2);
    cartselector.innerHTML = pricesum;   
};

function checkOut() {
    var checkOutDialogue = confirm("Would you like to order your food?");
    turingChatbot('checkOut');
    if (checkOutDialogue == true) {
        alert("Your order is being prepared!");
        cartlistselector.textContent = '';
        cartselector.innerHTML = '';
        totalprice.length = 0;
        setMenuState('aboutus');
        return true;
    } else {
        alert('Feel free to continue your order!');
        return false;
    }
};

function clearOrder() {
    var clearOrderDialogue = confirm("Are you sure you would like to clear your order?");
    turingChatbot('clearOrder');
    if (clearOrderDialogue == true) {
        cartlistselector.textContent = '';
        cartselector.innerHTML = '';
        setMenuState('aboutus');
        totalprice.length = 0;
    }   else {
        alert("Continue your order!");
    }
    
}