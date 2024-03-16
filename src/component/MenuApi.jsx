const Menu = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1443196881/photo/masala-maggi-noodles-instant-maggi-noodles-served-in-a-bowl-closeup-with-selective-focus-and.jpg?s=612x612&w=0&k=20&c=vJZlI8fblB3KNWUPIIZnz_N19evUVnL86FmVNgJ6FH0=",
    name: "Maggi",
    category: "Breakfast",
    price: "125₹",
    description:
      "A popular breakfast dish loved by many, Maggi is a quick and tasty noodle dish. Perfectly seasoned and cooked to perfection, it's a classic choice for breakfast.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    name: "Pancakes",
    category: "Breakfast",
    price: "150₹",
    description:
      "Delicious pancakes with maple syrup, a delightful morning treat. Fluffy and golden-brown, these pancakes are the perfect start to your day.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Burger",
    category: "Lunch",
    price: "200₹",
    description:
      "A classic burger with all the fixings, a hearty lunch choice. Juicy patty, fresh veggies, and a soft bun make this a satisfying meal.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGl6emF8ZW58MHx8MHx8fDA%3D",
    name: "Pizza",
    category: "Evening",
    price: "250₹",
    description:
      "A classic burger with all the fixings, a hearty lunch choice. Juicy patty, fresh veggies, and a soft bun make this a satisfying meal.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FsYWR8ZW58MHx8MHx8fDA%3D",
    name: "Salad",
    category: "Lunch",
    price: "100₹",
    description:
      "A fresh and healthy salad, a light and nutritious choice for lunch. Packed with greens, veggies, and a tangy dressing.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1c2hpfGVufDB8fDB8fHww",
    name: "Sushi",
    category: "Dinner",
    price: "300₹",
    description:
      "Sliced raw fish on vinegared rice, a classic Japanese dinner option. Fresh and delectable, sushi is a culinary adventure.",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1676466884050-3b95749bd1eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFjb3N8ZW58MHx8MHx8fDA%3D",
    name: "Tacos",
    category: "Lunch",
    price: "180₹",
    description:
      "Tasty tacos with various fillings, a lunchtime delight. Soft tortillas, savory meat, and flavorful toppings.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SWNlJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D",
    name: "Ice Cream",
    category: "Evening",
    price: "80₹",
    description:
      "Creamy and delightful ice cream, a sweet evening treat. Choose from a variety of flavors for a satisfying dessert.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RlYWt8ZW58MHx8MHx8fDA%3D",
    name: "Steak",
    category: "Dinner",
    price: "350₹",
    description:
      "Juicy and tender steak cooked to perfection, a hearty dinner choice. Savor the rich flavors and succulent texture of this dish.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhc3RhfGVufDB8fDB8fHww",
    name: "Pasta",
    category: "Dinner",
    price: "220₹",
    description:
      "Savory pasta with your choice of sauce, a delicious dinner option. Indulge in the flavors of Italy with this comforting dish.",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJpZWQlMjBDaGlja2VufGVufDB8fDB8fHww",
    name: "Fried Chicken",
    category: "Lunch",
    price: "190₹",
    description:
      "Crispy and flavorful fried chicken, a tasty lunch choice. Enjoy the golden, crispy coating and the tender, juicy meat.",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEN1cGNha2V8ZW58MHx8MHx8fDA%3D",
    name: "Cupcake",
    category: "Evening",
    price: "60₹",
    description:
      "Sweet and small cupcakes for dessert, a delightful evening treat. These tiny confections are perfect for satisfying your sweet tooth.",
  },
];
export default Menu;
