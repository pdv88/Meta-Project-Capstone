import React from "react";

function Menu() {
  document.title = "Menu | Little Lemon";

  function menuMaker(dishes){
        return dishes.map((dish, index) => {
            return (
              <div className="dishCard" key={index}>
                <img src={dish.src} alt={dish.dish} />
                <div className="dishCard_datos">
                  <h3>{dish.dish}</h3>
                  <p>{dish.description}</p>
                  <h3 className="price">${dish.price.toFixed(2)}</h3>
                </div>
              </div>
            );
          })
  }

  const breakfast = [
    {
      src: "/breakfasts/bread_butter_jam.jpg",
      dish: "Pane Burro e Marmellata",
      description:
        "A quintessential Italian breakfast staple, this simple yet satisfying combination of bread, butter, and jam is a popular choice for those seeking a sweet treat as part of their Italian-style breakfast.",
      price: 2.3,
    },
    {
      src: "/breakfasts/cornetto_and_milk.jpg",
      dish: "Cornetto",
      description:
        "Cornetto (the Italian version of the French croissants) is a delectable type of pastry often filled with cream, jam, chocolate, or even almond paste (cornetto alle mandorle).",
      price: 2.0,
    },
    {
      src: "/breakfasts/fette_biscottate.jpg",
      dish: "Fette Biscottate",
      description:
        "Fette biscottate are thin, crispy slices of bread that have been baked twice to achieve their unique texture. These scrumptious toasts boast a subtly sweet flavor, making them a popular choice at breakfast time.",
      price: 2.0,
    },
    {
      src: "/breakfasts/italian_biscotti.jpg",
      dish: "Biscotti",
      description:
        "As one of Italy’s most popular breakfast foods, biscotti are crunchy, sweet cookies traditionally enjoyed alongside coffee or tea. These delightful treats are designed for dipping into hot beverages, allowing the flavors to meld and create a perfect harmony of taste and texture.",
      price: 3.5,
    },
    {
      src: "/breakfasts/nutella.jpg",
      dish: "Pane e Nutella",
      description:
        "This is the way to go regarding sweet food. Bread or toast is generously spread with Nutella, a widely popular chocolate hazelnut spread that has become a beloved staple in many Italian households. This delectable combination creates a rich and satisfying treat perfect for starting the day on a sweet note.",
      price: 4.3,
    },
    {
      src: "/breakfasts/cereals_milk.jpg",
      dish: "Cereali",
      description:
        "Italians enjoy a variety of breakfast cereals, both hot and cold, as part of a healthy breakfast. Options range from muesli and granola to classic cornflakes, providing energy and nutrition to start the day on the right foot.",
      price: 1.8,
    },
    {
      src: "/breakfasts/saccottino.jpg",
      dish: "Saccottino",
      description:
        "A small, delightful pastry filled with chocolate, cream, or fruit preserves, the saccottino is a popular choice for a sweet and satisfying Italian breakfast. Its soft, flaky exterior gives way to a delicious, rich filling, making it a morning treat that’s hard to resist.",
      price: 3.8,
    },
    {
      src: "/breakfasts/cannoli.jpg",
      dish: "Cannoli",
      description:
        "A Sicilian pastry known for its crispy shell filled with sweet, creamy ricotta, cannoli can also be found with savory fillings in some regions. Though traditionally enjoyed as a dessert, these indulgent pastries can sometimes make their way onto the Italian breakfast table for a special treat.",
      price: 5.6,
    },
    {
      src: "/breakfasts/maritozzi.jpg",
      dish: "Maritozzi",
      description:
        "Maritozzi are sweet buns often filled with whipped cream or custard. These delicious pastries are particularly popular in Rome and are a favorite morning treat for many Italians. The soft, fluffy texture of the bun combined with the sweet filling makes Maritozzi a delightful addition to any Italian breakfast spread.",
      price: 4.6,
    },
    {
      src: "/breakfasts/cantuccini.jpg",
      dish: "Cantucci",
      description:
        "Crunchy almond cookies, cantucci are typically served with sweet dessert wine. Though traditionally enjoyed as a dessert, these delectable cookies can also appear during breakfast, providing a tasty, nutty treat to pair with coffee or tea.",
      price: 3.5,
    },
  ];

  const meal = [
    {
      src: "/breakfasts/bread_butter_jam.jpg",
      dish: "Pane Burro e Marmellata",
      description:
        "A quintessential Italian breakfast staple, this simple yet satisfying combination of bread, butter, and jam is a popular choice for those seeking a sweet treat as part of their Italian-style breakfast.",
      price: 2.3,
    },
    {
      src: "/breakfasts/cornetto_and_milk.jpg",
      dish: "Cornetto",
      description:
        "Cornetto (the Italian version of the French croissants) is a delectable type of pastry often filled with cream, jam, chocolate, or even almond paste (cornetto alle mandorle).",
      price: 2.0,
    },
    {
      src: "/breakfasts/fette_biscottate.jpg",
      dish: "Fette Biscottate",
      description:
        "Fette biscottate are thin, crispy slices of bread that have been baked twice to achieve their unique texture. These scrumptious toasts boast a subtly sweet flavor, making them a popular choice at breakfast time.",
      price: 2.0,
    },
    {
      src: "/breakfasts/italian_biscotti.jpg",
      dish: "Biscotti",
      description:
        "As one of Italy’s most popular breakfast foods, biscotti are crunchy, sweet cookies traditionally enjoyed alongside coffee or tea. These delightful treats are designed for dipping into hot beverages, allowing the flavors to meld and create a perfect harmony of taste and texture.",
      price: 3.5,
    },
    {
      src: "/breakfasts/nutella.jpg",
      dish: "Pane e Nutella",
      description:
        "This is the way to go regarding sweet food. Bread or toast is generously spread with Nutella, a widely popular chocolate hazelnut spread that has become a beloved staple in many Italian households. This delectable combination creates a rich and satisfying treat perfect for starting the day on a sweet note.",
      price: 4.3,
    },
    {
      src: "/breakfasts/cereals_milk.jpg",
      dish: "Cereali",
      description:
        "Italians enjoy a variety of breakfast cereals, both hot and cold, as part of a healthy breakfast. Options range from muesli and granola to classic cornflakes, providing energy and nutrition to start the day on the right foot.",
      price: 1.8,
    },
    {
      src: "/breakfasts/saccottino.jpg",
      dish: "Saccottino",
      description:
        "A small, delightful pastry filled with chocolate, cream, or fruit preserves, the saccottino is a popular choice for a sweet and satisfying Italian breakfast. Its soft, flaky exterior gives way to a delicious, rich filling, making it a morning treat that’s hard to resist.",
      price: 3.8,
    },
    {
      src: "/breakfasts/cannoli.jpg",
      dish: "Cannoli",
      description:
        "A Sicilian pastry known for its crispy shell filled with sweet, creamy ricotta, cannoli can also be found with savory fillings in some regions. Though traditionally enjoyed as a dessert, these indulgent pastries can sometimes make their way onto the Italian breakfast table for a special treat.",
      price: 5.6,
    },
    {
      src: "/breakfasts/maritozzi.jpg",
      dish: "Maritozzi",
      description:
        "Maritozzi are sweet buns often filled with whipped cream or custard. These delicious pastries are particularly popular in Rome and are a favorite morning treat for many Italians. The soft, fluffy texture of the bun combined with the sweet filling makes Maritozzi a delightful addition to any Italian breakfast spread.",
      price: 4.6,
    },
    {
      src: "/breakfasts/cantuccini.jpg",
      dish: "Cantucci",
      description:
        "Crunchy almond cookies, cantucci are typically served with sweet dessert wine. Though traditionally enjoyed as a dessert, these delectable cookies can also appear during breakfast, providing a tasty, nutty treat to pair with coffee or tea.",
      price: 3.5,
    },
  ];

  const dinner = [
    {
      src: "/breakfasts/bread_butter_jam.jpg",
      dish: "Pane Burro e Marmellata",
      description:
        "A quintessential Italian breakfast staple, this simple yet satisfying combination of bread, butter, and jam is a popular choice for those seeking a sweet treat as part of their Italian-style breakfast.",
      price: 2.3,
    },
    {
      src: "/breakfasts/cornetto_and_milk.jpg",
      dish: "Cornetto",
      description:
        "Cornetto (the Italian version of the French croissants) is a delectable type of pastry often filled with cream, jam, chocolate, or even almond paste (cornetto alle mandorle).",
      price: 2.0,
    },
    {
      src: "/breakfasts/fette_biscottate.jpg",
      dish: "Fette Biscottate",
      description:
        "Fette biscottate are thin, crispy slices of bread that have been baked twice to achieve their unique texture. These scrumptious toasts boast a subtly sweet flavor, making them a popular choice at breakfast time.",
      price: 2.0,
    },
    {
      src: "/breakfasts/italian_biscotti.jpg",
      dish: "Biscotti",
      description:
        "As one of Italy’s most popular breakfast foods, biscotti are crunchy, sweet cookies traditionally enjoyed alongside coffee or tea. These delightful treats are designed for dipping into hot beverages, allowing the flavors to meld and create a perfect harmony of taste and texture.",
      price: 3.5,
    },
    {
      src: "/breakfasts/nutella.jpg",
      dish: "Pane e Nutella",
      description:
        "This is the way to go regarding sweet food. Bread or toast is generously spread with Nutella, a widely popular chocolate hazelnut spread that has become a beloved staple in many Italian households. This delectable combination creates a rich and satisfying treat perfect for starting the day on a sweet note.",
      price: 4.3,
    },
    {
      src: "/breakfasts/cereals_milk.jpg",
      dish: "Cereali",
      description:
        "Italians enjoy a variety of breakfast cereals, both hot and cold, as part of a healthy breakfast. Options range from muesli and granola to classic cornflakes, providing energy and nutrition to start the day on the right foot.",
      price: 1.8,
    },
    {
      src: "/breakfasts/saccottino.jpg",
      dish: "Saccottino",
      description:
        "A small, delightful pastry filled with chocolate, cream, or fruit preserves, the saccottino is a popular choice for a sweet and satisfying Italian breakfast. Its soft, flaky exterior gives way to a delicious, rich filling, making it a morning treat that’s hard to resist.",
      price: 3.8,
    },
    {
      src: "/breakfasts/cannoli.jpg",
      dish: "Cannoli",
      description:
        "A Sicilian pastry known for its crispy shell filled with sweet, creamy ricotta, cannoli can also be found with savory fillings in some regions. Though traditionally enjoyed as a dessert, these indulgent pastries can sometimes make their way onto the Italian breakfast table for a special treat.",
      price: 5.6,
    },
    {
      src: "/breakfasts/maritozzi.jpg",
      dish: "Maritozzi",
      description:
        "Maritozzi are sweet buns often filled with whipped cream or custard. These delicious pastries are particularly popular in Rome and are a favorite morning treat for many Italians. The soft, fluffy texture of the bun combined with the sweet filling makes Maritozzi a delightful addition to any Italian breakfast spread.",
      price: 4.6,
    },
    {
      src: "/breakfasts/cantuccini.jpg",
      dish: "Cantucci",
      description:
        "Crunchy almond cookies, cantucci are typically served with sweet dessert wine. Though traditionally enjoyed as a dessert, these delectable cookies can also appear during breakfast, providing a tasty, nutty treat to pair with coffee or tea.",
      price: 3.5,
    },
  ];

  return (
    <>
      <section id="menu">
        <div className="container">
          <h1>Menu</h1>
          <h2>Breakfasts</h2>
          <div className="cards_container">
            {menuMaker(breakfast)}
          </div>
          <h2>Meals</h2>
          <div className="cards_container">
            {menuMaker(meal)}
          </div>
          <h2>Dinners</h2>
          <div className="cards_container">
            {menuMaker(dinner)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
