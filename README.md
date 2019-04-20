# Burger

### Overview

This is a burger app that utilizes MySQL, Node, Express, Handlebars and a homemade ORM (yum!). It follows the MVC design pattern. Node and MySQL are used to query and route the data.  Handlebars is used to generate the HTML. 

When the user arrives at the root page, a list is rendered of burgers that are ready to be ordered and burgers that are already sold out. The user has the option to order an in-stock burger or delete it from the menu entirely. The user also has the option to request a restock, which then puts the out-of-stock burger back into stock.  Finally, the user has the ability to add a burger to the menu, and can specify whether it should be put immediately into stock or added without stock (so it renders as sold out). All burgers are stored in the database unless they are deleted.

The code is housed on GitHub here: https://github.com/mmrydz/burger.

The app was deployed to Heroku here: https://burgersaredelicious-34623.herokuapp.com/.

