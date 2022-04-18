const menu = [

   { id: 1,
    title: "pancakes",
    category: "breakfast",
    price: 8.50,
    img: "./images/pancakes.jpeg",
    description: "breakfast pancakes partnered with the sweetest syrup in town!"
   },

   { id: 2,
    title: "pizza green leaves",
    category: "pizza",
    price: 10.25,
    img: "./images/pizza-green-leaves.jpg",
    description: "healthy living? on a diet? try this pizza with that green touch!"
   },
   { id: 3,
    title: "dessert",
    category: "dessert",
    price: 4.25,
    img: "./images/dessert.jpeg",
    description: "Set of strawberry-flavored goodies to indulge!"
   },
   { id: 4,
    title: "Pepperoni",
    category: "pizza",
    price: 12.65,
    img: "./images/pepperoni.jpg",
    description: "Classic Pepperoni"
   },
   { id: 5,
    title: "Pepperoni w/ Thick Cheese",
    category: "pizza",
    price: 13.25,
    img: "./images/pepperoni-thick-cheese.jpg",
    description: "Classic Pepperoni with refined thick cheese"
   },
   { id: 6,
    title: "Bacon and eggs Sandwich",
    category: "breakfast",
    price: 4.15,
    img: "./images/bacon-and-eggs-sandwich.jpeg",
    description: "All-time favorite bacon and eggs for breakfast"
   },
   { id: 7,
    title: "Cheeseburger",
    category: "burger",
    price: 7.00,
    img: "./images/cheeseburger.jpeg",
    description: "Cheeeeeeesseeeburger"
   },
   { id: 8,
    title: "Cheeseburger with Fries",
    category: "burger",
    price: 8.00,
    img: "./images/burger-with-fries.jpeg",
    description: "Cheeeeeeesseeeburger... with FRIES!"
   },



]
const sectionCenter = document.querySelector('.section-center');
const filter = document.querySelectorAll('.filter-btn'); 

//filter buttons



//once page loads on the browser, this  occurs
window.addEventListener("DOMContentLoaded", () => {

displayMenu(menu);
//pass menu argument to function

});


filter.forEach(function(btn) {


    btn.addEventListener("click", function(eBtn) {
    
        const category = eBtn.currentTarget.dataset.category;

        const menuCategory = menu.filter(function(itemSelect){

            if(itemSelect.category === category)
                //compare category if button selected is same with category from data
            {

                return itemSelect;

            }
        });


            if(category === 'All'){

                displayMenu(menu);

            }
            else{

                displayMenu(menuCategory);
                //same occurence with the filter
            }

        })
        
    });
    

   //reads menu argument then maps, stored as display
function displayMenu(item){

 

    let display = item.map(function(selector){


        return    `<article class="menu-item">
                  <img src=${selector.img} alt=${selector.title} class="photo" />
                  <div class="item-info">
                    <header>
                      <h4>${selector.title}</h4>
                      <h4 class="price">$${selector.price}</h4>
                    </header>
                    <p class="item-text">
                     ${selector.description}
                    </p>
                  </div>
                </article>
                `;
  
      })
      display = display.join("");
      sectionCenter.innerHTML = display;

}