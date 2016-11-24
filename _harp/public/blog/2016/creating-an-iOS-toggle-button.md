### The sexy and elegant iOS switch button <3

Hey guys, today a work's friend ask me to teach him to create an iOS switch-toggle
button style using just CSS.

So I decide to write about it because I have seen these switch-style every where
and peaple think that this is hard to do.. and it's not :D


## 1 - Build your markup

The first path to do is build your block for the switch button. A simple div, a label
and **of course** our checkbox.

```html
<div class="container">
  <input type="checkbox" name="toggle" id="toggle" class="hide-toggle">
  <label for="toggle" class="switch-button"></label>
</div>
```

See that the **label** comes after our input. Thats because we will use the
<a href="http://www.w3schools.com/cssref/css_selectors.asp" target="_blank"
  title="See about CSS selecotors in w3school">
  CSS selecotor **+**
</a> to make it works.

So let's make it pretty, right :D ? First to do is hide our default checkbox.
Thats because each browser has thair own style, and if you want control of the block,
you have to take away with it :D

**But**, we'll make it just transparent and out of the screen. It pretty important
that the checkbox is still functional, not visible, but functional :)

## 2 - Styling like iOS and creating the elements

You have a lot of ways to hide it, here is the CSS that we will use to do it today

``` css
/* Say good bye ;* */
.hide-toggle {
  position: absolute;
  left: -9999px;
  opacity: 0;
}
```


Cool. Now that we've got our guy out of the screen, we can style the switch.
We're using the checkbox's label for this.

There are two parts to the switch:

1. The container (this uses the actual label)
2. The switch itself (this uses the :before pseudo-element)

``` css
/* The container */
.switch-button {
  position: relative;
  display: block;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: inset 0 0 0px 1px #d5d5d5;
  transition: transform .25s ease-in-out;
}

/* The switch itself */
.switch-button:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .2), 0 2px 4px rgba(0, 0, 0, .2);
  transition: transform .25s ease-in-out;
  will-change: transform;
}

```

Yeaaah dude, now you already have an sexy and pretty button in you screen.
But this still not doing anything :P

## 3 - All the magic

For the "black magic" we'll use the **CSS selector +** to get the element after
our checkbox when it is **checked**.

``` css
/* all magic here using :checked and the selector + */
.hide-toggle:checked + .switch-button {
  background-color: rgba(19, 191, 17, 1);
}
.hide-toggle:checked + .switch-button:before {
  transform: translate3d(100%,0,0);
}
```

As you can see, we use the state **:checked** to make our toggle button and the
**CSS selector +** to capture and animate the very first element after our input, in
this case, our **labal**, and make all the stuffs happen :D

Aaaannnnd that's all folks :D this is the elegant and sexy iOS button that we build <3
<p data-height="265" data-theme-id="0" data-slug-hash="oYwZyX" data-default-tab="result" data-user="andremendes" data-embed-version="2" data-pen-title=" iOS style switch toggle in pure CSS" class="codepen">See the Pen <a href="http://codepen.io/andremendes/pen/oYwZyX/"> iOS style switch toggle in pure CSS</a> by Andr Mendes (<a href="http://codepen.io/andremendes">@andremendes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
