---
layout: ../../layouts/PizzaCalculatorLayout.astro
title: My favourite pizza dough recipe
author: Goran Solev
pubDate: 2025-02-15
description: This is my favourite pizza dough recipe of all times that I make almost every weekend for me and my family.
tags: ["cooking"]
draft: false
---

<style>
    .clear-span {
        background-color: rgba(22, 63, 95, 0.18);
        color: #1b1b1b;
    }
</style>

_This recipe is made by mixing together 100% of biga and 100% of poolish starters to form beautiful long fermented dough with maximum taste and amazing crunchy crust._

<br />

_Before you start making this recipe, make sure you have all the tools you will need. Also you will need to use the calculator for the amount of the ingredients needed. In the input field enter the amount of dough balls and the recipe will be adjusted by your needs. All the ingredients are presented in grams and milliliters. The default recipe is for 4 pizzas and regular dough balls of 280 grams._

<br />

## Tools needed:

- <input type="checkbox"> Standing mixer
- <input type="checkbox"> Measuring jugs
- <input type="checkbox"> Kitchen scale
- <input type="checkbox"> Precision scale
- <input type="checkbox"> Kitchen thermometer

<div>
    <label for="dough-balls">Dough Balls:</label>
    <input
        class="w-8 py-1 text-center"
        id="dough-balls"
        name="dough-balls"
        type="text"
        value="4"
        required
    />
    <button class="px-4 py-1" id="form-button">Calculate</button>
</div>

<br />

<div id="biga-ingredients">
    <h3>The biga</h3>
    <ul>
        <h5>Ingredients:</h5>
        <li>
            <p>
                Flour: <span
                    id="biga-flour-output"
                    class="clear-span"></span>
            </p>
        </li>
        <li>
            <p>
                Water: <span
                    id="biga-water-output"
                    class="clear-span"></span>
            </p>
        </li>
        <li>
            <p>
                Active dry yeast: <span
                    id="biga-yeast-output"
                    class="clear-span"></span>
            </p>
        </li>
    </ul>
    <br />
    <p>The preparation of the biga starter is very simple and easy. All you need to do is to mix the dry and wet ingredients together in a messy structure that is not dough but smal lumps of dough.</p>
    <br />
    <p>First find yourself a big enough container with a closing lid to do the mixture in. Scale the <span id="biga-flour-output" class="clear-span"></span> of flour and put it into the container. Then scale the <span id="biga-water-output" class="clear-span"></span> of water into a jug and make sure it is at room temperature. Scale <span id="biga-yeast-output" class="clear-span"></span> of active dry yeast on the precision scale, add it to the water and stir it till it looks like a milk.</p>
    <br />
    <p>At the end add the milky water into the flour container and use your hands to mix them together. Mix untill looks like lumpy texture, scattered into the container. Try do not leave dry flour intside the container, but even if you do, it will not affect the final result.</p>
</div>

<br />

<div id="poolish-ingredients">
    <h3>The poolish</h3>
    <ul>
        <h5>Ingredients:</h5>
        <li>
            <p>
                Flour: <span
                    id="poolish-flour-output"
                    class="clear-span"></span>
            </p>
        </li>
        <li>
            <p>
                Water: <span
                    id="poolish-water-output"
                    class="clear-span"></span>
            </p>
        </li>
        <li>
            <p>
                Active dry yeast: <span
                    id="poolish-yeast-output"
                    class="clear-span"></span>
            </p>
        </li>
    </ul>
    <br />
    <p>The poolish starter is made of two equal parts of flour and water. We will then mix the dry ingredients with the wet oneas and get the right mixture.</p>
    <br />
    <p>Same as with the biga, take one container with a lid and scale the <span id="poolish-flour-output" class="clear-span"></span> of flour. Then in a jug scale <span id="poolish-water-output" class="clear-span"></span> of water at room temperature. Add the <span id="poolish-yeast-output" class="clear-span"></span> of yeast scaled on your precission scale into the water and stir till the yeast is completly dissolved. It should look like milk.<p/>
    <br />
    <p>The final step is to mix the wet ingredients into the dry ingredients. The poolish starter should look like a paste after the mixing. Don't forget to cover it with the lid.</p>
</div>

<br />

If you will make the pizza next day, keep both mixtures on room temperature for an hour and then put them in the fridge for at least 12 hours before making the dough. If you will make the pizza in the next couple of days, then put the mixtures straight into the fridge for not longer then 24 hours.

<br />

## The dough

#### Additional ingredients:
- Olive oil / Vegetable oil
- Semolina or white flour

<br />

Check your starters before making the dough. The biga should look like a sponge with tiny bubbles. The poolish should be slimy with big bubbles.

<br />

In your mixing bowl put the biga and the poolish together with <span id="salt-output" class="clear-span"></span> of salt. Turn on the mixer and mix on medium speed for a few minutes. When everything will be mixed good increase the speed of the mixer. Now you will need to regulary check the dough temperature and once you reach around 27°C turn off the mixer. The mixing bowl should have clean sides and the dough should be elastic and strong by now.

<br />

_<ins>Be aware, the step above can take longer depending of the mixer you will use. The goal is the dough temperature!</ins>_

<br />

Add some olive oil (or vegetable oil) on your counter top, spread it nicely with your hands and take out the dough from the mixing bowl. Shape it in a nice big ball and let it rest for 15 - 20 minutes, covered with a dump towel or a clear film foil.

<br />

The dough should be realxed by now and it is time to shape the pizza balls. I use separate containers with lid for every ball, but you can use a pan or plastic container big enough to fit all the balls with some spacing between them. Don't forget to spread a little bit of oil on the pan/container before you put the balls in. Cut the dough and scale it before making the dough balls, it should be as close as posible to 280 grams. Shape the dough into a ball, similar to a mozzarella ball. Try to slose the bottom of the ball as tight as you can. Place the balls into the pan/container and cover them with the lid or clear film foil.

<br />

If you make the pizza on the same day, leave the balls on room temperature till they double in size. If you make the pizza in the next couple of days you can keep the balls into the fridge for up to 72 hours. Also you can freeze the dough at this stage for up to 3 months.

<br />

## The pizza

If you had the pizza balls in the fridge, take them out at least 3 hours before you make the pizza. Leave them on room temperature for couple of hours.

<br />

It is time to get the oven hot. I always use the maximum temperature on my oven which is 250°C, but if yours goes higher, that is even better. You can go up to 450°C if you have dedicated pizza oven!

<br />

When the oven is ready it is time to take the semolina. I use coarse semolina, but fine will work too. Make a pile of semolina roughly the size of the ball (by now the balls will be very relaxed and loose shape). Take a dough carefully not touching the ends, preferably with a dough spatula and place it over the semolina pile. Gently start shaping the pizza from the center towards the ends, leaving the ends untouched. The point is to push all the air from the center into the crust. When you get a pizza dough of around 20cm it is time to put it on the pizza peel or if you don't have one like me, you can use the oven's tray upside down. Just before you place the pizza dough on the tray, make sure you put some semolina on the tray so the pizza don't stuck during the baking. Also try to do put the pizza together as fast as you can.

<br />

Now when you have the shape of the base it is time for the toppings. The base topping for me is usually pasata (tomato pure with oregano and dry basil) or pesto but feel free to experiment. The next comes mozzarella which promptly I leave it to dry in the fridge few hours before using, or if you can find dry one it will be perfect. Break it with hand or cut it on larger pieces and put it over the base. At this point I usually stretch the dough further for another 5cm to get the final shape and size and fill the gaps with more mozzarella. You can experiment with more toppings like mushrooms, onions, peperoni...

<br />

Time for baking! Put the pizza into the hot oven and see the magic happens. Keep a close look through the oven window. When the dough gets brownish with burned spots, it is time to take the pizza out of the oven. Don't depend on the time of the baking, use your eyes!

<br />

## The final verdict

I've been practicing this recipe week after week for almost half a year now and has never let me down. I hope it will work for you too and you will enjoy delicious pizza every time. If you don't succeed the first time, keep trying till you make it work. It may take some time. When you master the recipe, try to improve it your way and experiment for amazing results. Enjoy!