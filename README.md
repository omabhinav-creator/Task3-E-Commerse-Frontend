# Task3 E-Commerse Frontend
Responsive E-Commerce frontend featuring product listings, category filtering, a shopping cart, wishlist, and simulated API integration. Built using HTML, CSS, and JavaScript for the Kinetrexa frontend development internship.
# 🛒 KineTrexa E-Commerce Frontend

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This project is a modern, fully responsive E-Commerce frontend web application developed as **Task 3** for the **Frontend Development Internship** at **Kinetrexa Software Private Limited**. 

It features dynamic product listings, advanced filtering, a fully functional shopping cart, a wishlist, and a simulated asynchronous API integration, all built entirely with vanilla web technologies.

## 🔗 Live Links
*   **Live Demo:** [Insert your Netlify/Vercel Link Here] *(e.g., https://your-site.netlify.app/index/home.html)*
*   **GitHub Repository:** [Insert your GitHub Repo Link Here]

---

## ✨ Key Features

This application successfully fulfills all key deliverables requested in the task assignment:

*   🛍️ **Dynamic Product Listing:** Products are dynamically rendered onto the grid using JavaScript from a centralized data structure.
*   🔍 **Advanced Search & Filters:** 
    *   Real-time search bar to filter items by title.
    *   Expandable/collapsible accordion sidebar for deep category and sub-category filtering (e.g., Food -> Breakfast, Electronics -> Wearables).
    *   Interactive price range slider that dynamically updates the product grid.
*   🛒 **Interactive Shopping Cart:** Users can add items, increment/decrement quantities, remove items, and view real-time subtotal calculations. State is preserved across pages using `localStorage`.
*   ❤️ **Wishlist Functionality:** Users can toggle products into a dedicated wishlist, featuring visual state changes (hollow to filled heart).
*   📱 **Responsive Design:** Fluid CSS Grid and Flexbox layouts ensure the application looks perfect on desktops, tablets, and mobile devices. Includes a custom mobile hamburger navigation menu.
*   🌐 **Simulated API Integration:** Implements JavaScript `Promises` and `async/await` syntax to simulate network latency and asynchronous data fetching, demonstrating real-world backend integration readiness.
*   🌗 **Dark/Light Mode:** Includes a user-controlled theme toggle in the settings menu, defaulting to a sleek dark UI.

---

## 📂 Project Structure

```text
📁 Task 3 E-Commerce Frontend
├── 📁 Assets
│   ├── 📁 CSS
│   │   ├── cart.css
│   │   ├── contact.css
│   │   ├── home.css
│   │   ├── products.css
│   │   └── style.css          # Global styles, variables, and themes
│   ├── 📁 images              # Local product thumbnails
│   └── 📁 JS
│       ├── app.js             # Core logic: Cart, Wishlist, API, Filters
│       └── products.js        # Centralized product database
├── 📁 index
│   ├── cart.html              # Shopping cart view and checkout
│   ├── contact.html           # Founder profile and contact form
│   ├── home.html              # Landing page with auto-scrolling offers
│   ├── products.html          # Main shop with sidebar filters
│   └── wishlist.html          # Saved items view
└── README.md
🚀 Installation & Local Setup
To run this project locally on your machine:

Clone the repository:

Bash
git clone [https://github.com/your-username/kinetrexa-ecommerce.git](https://github.com/your-username/kinetrexa-ecommerce.git)
Navigate to the directory:

Bash
cd kinetrexa-ecommerce
Run the Application:
Because this project uses vanilla HTML/CSS/JS, no build tools (like npm or vite) are required.

Simply open the index/home.html file in any modern web browser.

Recommended: Use the Live Server extension in Visual Studio Code for hot-reloading during development.

🧠 Technical Architecture & Logic
State Management: The application relies on the browser's localStorage to persist the cart and wishlist arrays. This ensures data is not lost when navigating between the different HTML pages.

Data Flow: products.js acts as the single source of truth (Database simulation). app.js reads this data via a simulated async fetch function before rendering it to the DOM to mimic real-world API latency.

Modular Styling: CSS is divided into page-specific files alongside a global style.css file to maintain clean, readable code and prevent class name collisions.

👨‍💻 Author
Nanagiri Om Abhinav Varma

B.Tech CSE (AI & ML), ACE Engineering College

Frontend Development Intern, Kinetrexa Software Pvt. Ltd.

Task completed for Kinetrexa Internship ID: KTS020260726418