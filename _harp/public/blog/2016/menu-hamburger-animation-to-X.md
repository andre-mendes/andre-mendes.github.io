
## User Experience <3

Hamburgers icons are pretty fixed on our minds nowadays. So why not give some
more life and good expirience to it?

To show the user that some thing can happen is very important, so we have to give
enphasis in the actions. When you open a menu bar, for example, and the button
icon still the same, you think "oh, if I click here, **probably** I'll close the menu bar".

But, if you see the button icon turn into an **X**, I'm pretty sure that you will
not think, yeah, **will not think**. You will just close it. Becouse you know
this is the close button.

So today, I'm going to show you how to create a simple animation using CSS and a
small Javascript to make the trigger :)

## First step - Creating the button

The first thing to do is create or markup, this is pretty simple. Our parent tag
will be a **button** with an inner **span** tag. The button will be our container
and the spans our bars and our X at the end.

This is or markup:

```html
<button class="menu">
  <span class="menu__icon-bar"></span>
</button>
```
