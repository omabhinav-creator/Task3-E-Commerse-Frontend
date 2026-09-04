const productsData = [
    // --- FOOD ---
  {
    id: 101,
    category: "Food", subCategory: "Breakfast",
    title: "Organic Eggs",
    price: 60,
    thumbnail: "../assets/images/products/3.png",
    shortDesc: "Farm-fresh eggs packed with protein and quality."
  },
  {
    id: 102,
    category: "Food", subCategory: "Breakfast",
    title: "Fruit Basket",
    price: 120,
    thumbnail: "../assets/images/products/4.png",
    shortDesc: "A colorful assortment of seasonal fruits for healthy snacking."
  },
  {
    id: 103,
    category: "Food", subCategory: "Sweets",
    title: "Gulab Jamun",
    price: 80,
    thumbnail: "../assets/images/products/6.png",
    shortDesc: "Delicious milk-based sweet with a rich, floral flavor."
  },
  {
    id: 104,
    category: "Food", subCategory: "Non-veg",
    title: "Shawarma Wrap",
    price: 100,
    thumbnail: "../assets/images/products/7.png",
    shortDesc: "Delicious meat wrapped in a flavorful Shawarma tortilla."
  },
  {
    id: 105,
    category: "Food", subCategory: "Breakfast",
    title: "Dosa",
    price: 30,
    thumbnail: "../assets/images/products/9.png",
    shortDesc: "Thin, crispy South Indian pancake made from fermented rice and lentil batter."
  },
  {
    id: 106,
    category: "Food", subCategory: "Breakfast",
    title: "Idli and Vada",
    price: 30,
    thumbnail: "../assets/images/products/10.png",
    shortDesc: "Soft, steamed rice cakes served with spicy chutney."
  },
  {
    id: 107,
    category: "Food", subCategory: "Breakfast",
    title: "Mysore Bonda",
    price: 30,
    thumbnail: "../assets/images/products/11.png",
    shortDesc: "Crispy, deep-fried snack made from gram flour and spices."
  },
    { id: 108, category: "Food", subCategory: "Breakfast", title: "Amul Milk", price: 50, thumbnail: "../assets/images/products/1.png", shortDesc: "Fresh dairy milk." },
    { id: 109, category: "Food", subCategory: "Breakfast", title: "Fresh Bread", price: 40, thumbnail: "../assets/images/products/2.png", shortDesc: "Soft, warm bread." },
    { id: 110, category: "Food", subCategory: "Meals", title: "Biryani Rice", price: 110, thumbnail: "../assets/images/products/5.png", shortDesc: "Authentic Biryani." },
    { id: 111, category: "Food", subCategory: "Snack", title: "Samosa", price: 30, thumbnail: "../assets/images/products/8.png", shortDesc: "Spiced potatoes and peas." },
    { id: 112, category: "Food", subCategory: "Veg", title: "Panner Butter Masala", price: 130, thumbnail: "../assets/images/products/12.png", shortDesc: "Rich tomato-based sauce." },
    { id: 113, category: "Food", subCategory: "Non-veg", title: "Chicken Tikka", price: 180, thumbnail: "https://www.krumpli.co.uk/wp-content/uploads/2024/11/Chicken-Tikka-Kebab-Skewers-2-1600.jpg", shortDesc: "Spicy grilled chicken." },
    { id: 114, category: "Food", subCategory: "Junk", title: "Cheese Burger", price: 90, thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500", shortDesc: "Classic beef burger." },
    { id: 115, category: "Food", subCategory: "Junk", title: "Cheese Pizza", price: 189, thumbnail: "https://content3.jdmagicbox.com/comp/jaipur/r3/0141px141.x141.191213211226.z6r3/catalogue/ovenstory-pizza-sikar-road-jaipur-pizza-delivery-services-84en5l77e8.jpg", shortDesc: "Cheesy delight pizza." },

    // --- ELECTRONICS ---
    { id: 201, category: "Electronics", subCategory: "Wearables", title: "Smart Watch Pro", price: 2999, thumbnail: "https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048", shortDesc: "Fitness tracker." },
    { id: 202, category: "Electronics", subCategory: "LargeElectronics", title: "Smart TV 55 inch", price: 45000, thumbnail: "https://cdn.ewshopping.com/uploads/product/187ba417-a725-4395-9a07-1a6f064c91da.webp", shortDesc: "4K Ultra HD Display." },

    // --- BOOKS ---
    { id: 301, category: "Books", subCategory: "School Books", title: "CBSE Math,Science, Social Studies Class 10", price: 350, thumbnail: "../assets/images/BOOKS/CBSE 10TH.png", shortDesc: "NCERT Textbook." },
    { id: 302, category: "Books", subCategory: "Inter Books", title: "IPE MPC Books Set ", price: 450, thumbnail: "https://www.manabadi.co.in/boards/wp-content/uploads/2025/11/AP-Inter-Text-books.jpg", shortDesc: "First year Intermediate Books Set." },
    { id: 303, category: "Books", subCategory: "Competitive Exams", title: "JEE Advanced prep", price: 850, thumbnail: "https://m.media-amazon.com/images/I/81S1JaezjHL._AC_UF1000,1000_QL80_.jpg", shortDesc: "Complete mock tests." },
    { id: 304, category: "Books", subCategory: "Epic Books", title: "Mahabharatha Book", price: 600, thumbnail: "https://rukminim2.flixcart.com/image/480/640/ko0d6kw0/book/7/b/k/mahabharata-original-imag2jwbhff79jtg.jpeg?q=90", shortDesc: "The complete epic." },
    { id: 305, category: "Books", subCategory: "Epic Books", title: "Ramayana Book", price: 500, thumbnail: "https://m.media-amazon.com/images/I/71K-TJlQDHL.jpg", shortDesc: "The ancient Indian epic." },
    { id: 306, category: "Books", subCategory: "Life Guiders", title: "Bhagavad Gita Book", price: 500, thumbnail: "https://m.media-amazon.com/images/I/71EC72RcqxL._AC_UF1000,1000_QL80_.jpg", shortDesc: "Spiritual guidance." },

    // --- TOYS ---
    { id: 401, category: "Items", subCategory: "Toys", title: "Lego Creator Set", price: 1200, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgc9ifDcdYP1yoPznJpysyMjGSYoW-A-KXrVAG2o8moEI9ZUgYX1w7Mj-&s=10", shortDesc: "Building blocks." },
    { id: 402, category: "Items", subCategory: "Idols", title: "Lord Ganesha Idol", price: 800, thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjYhZ7Q8zfwrQUG8ADCMZkYPRYNZtfp32TBOkHo-HDG2zS4XIO9fL7NG0&s=10", shortDesc: "Classic deity statue." },

    // --- CLOTHS ---
    { id: 501, category: "Cloths", subCategory: "Men", title: "Formal Shirt", price: 799, thumbnail: "https://images.meesho.com/images/products/679885480/c1hvx_512.webp?width=512", shortDesc: "Cotton formal wear." },
    { id: 502, category: "Cloths", subCategory: "Traditional", title: "Silk Saree", price: 3500, thumbnail: "https://www.shoplibas.com/cdn/shop/files/gold-ethnic-motifs-woven-design-silk-blend-saree-with-unstitched-blouse-piece-45966p.jpg?v=1776228869&width=1080", shortDesc: "Authentic Indian wear." },
    { id: 503, category: "Cloths", subCategory: "Traditional", title: "Cotton Saree", price: 2500, thumbnail: "https://uppada.com/cdn/shop/collections/k0629a_2048x.jpg?v=1727437434", shortDesc: "Comfortable cotton wear." },

    // --- GROCERIES ---
    { id: 601, category: "Groceries", subCategory: "Fruits", title: "Fresh Apples", price: 150, thumbnail: "https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/d2975d15-a522-4653-808b-59f851d34e7b/Apple-Red-Delicious.jpeg", shortDesc: "1kg Shimla apples." },
    { id: 602, category: "Groceries", subCategory: "Vegetables", title: "Tomatoes", price: 40, thumbnail: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500", shortDesc: "1kg farm fresh." },

    // --- BAGS ---
    { id: 701, category: "Bags", subCategory: "College bags", title: "Nike Backpack", price: 1500, thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", shortDesc: "Durable daily use." },
    { id: 702, category: "Bags", subCategory: "Luggage bags", title: "Trolley Suitcase", price: 4500, thumbnail: "https://images-static.nykaa.com/media/catalog/product/a/6/a69be9aTASSAA00000324_4.jpg?tr=w-500", shortDesc: "Cabin size." }
];