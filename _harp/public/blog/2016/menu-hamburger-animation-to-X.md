
## User Experience <3

Hamburgers icons are pretty fixed on our minds nowadays. So why not give some
more life and good experience to it?

To show the user that some thing can happen is very important, so we have to give
enphasis in the actions. When you open a menu bar, for example, and the button
icon still the same, you think "oh, if I click here, **probably** I'll close the menu bar".

But, if you see the button icon turn into an **X**, I'm pretty sure that you will
not think, yeah, **will not think**. You will just close it. Becouse you just know
this is the close button.

So today, I'm going to show you how to create a simple animation using CSS and a
small Javascript to make the trigger :)

This is the <a href="http://codepen.io/andremendes/pen/qaeKMG"
  title="See the code in codepen" target="_blank">awesome and sexy button</a>
that we will create :D

<p data-height="265" data-theme-id="0" data-slug-hash="qaeKMG" data-default-tab="result" data-user="andremendes" data-embed-version="2" data-pen-title="Hamburger button turn into X " class="codepen">See the Pen <a href="http://codepen.io/andremendes/pen/qaeKMG/">Hamburger button turn into X </a> by Andr Mendes (<a href="http://codepen.io/andremendes">@andremendes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## 1 - Creating the button

The first thing to do is create or markup, this is pretty simple. Our parent tag
will be a **button** with an inner **span** tag. The button will be our container
and the spans our bars and our X at the end.

This is how your markup should looks like:

```html
<button id="js-menuBtn" class="menu">
  <span class="menu__icon-bar"></span>
</button>
```

Now, we have to reset all the button styles. Remove borders, background colors and
the others default appearances and do our styles :)

So we define a width and height of the button (it's interesting to have a good
area, because this will be the touch area in mobile devices).

This is what we have

```css
.menu {
  border-radius: none;
  border: none;
  background: #2A363B;
  cursor: pointer;
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  height: 96px;
  width: 96px;
}
```

## 2 - Creating the bars

For this we will use the pseudo elements before and after.
I'll not enter in details, but you can
<a href="http://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank"
  title="See about in w3school">
  see more about pseudo elements
</a>
here in w3school.

Well, this is what we gonna do. In first place, we will create our main bar and then
create our top and bottom bar, that will be our pseudo elements and at the end our X button.

Show me the code :D

```css
.menu__icon-bar {
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: relative;
  transition: background-color .4s;
}

.menu__icon-bar:before {
  content: '';
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: translate3d(0, -25px,0);
  transition: transform .4s;
}

.menu__icon-bar:after {
  content: '';
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: translate3d(0, 25px,0);
  transition: transform .4s;
}
```

## 3 - Animating the bars

Now you already have a pretty button in your screen <3 So lets give more life
to this guy.

For this, we will use a litte javascript just to add a class, that will make all
the magic.

```javascript
var button = document.getElementById('js-menuBtn');

button.addEventListener('click', function(event) {
  this.classList.toggle('open');
});
```

Right. Now everytime we click on the button, we will add the class **open** to the button.
Then all we have to do is change the state of the button when we have this
class.

To make the bars turn into the X, we just have to turn it with the css property
**transform** using the value **rotate**, that you also can
<a href="http://www.w3schools.com/cssref/css3_pr_transform.asp" target="_blank"
  title="See about in w3school">
  see more about here
</a>
and set a **transition** to make this more smooth. Lets see the code!


```css
/* Add transition to make this mor smooth */

/* Main bar */
.menu__icon-bar {
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: relative;

  transition: background-color .4s;
}

/* Top bar */
.menu__icon-bar:before {
  content: '';
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: translate3d(0, -25px,0);
  will-change: transform;

  transition: transform .4s;
}

/* Bottom bar */
.menu__icon-bar:after {
  content: '';
  background-color: #E84A5F;
  border-radius: 5px;
  height: 10px;
  width: 76px;
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: translate3d(0, 25px,0);
  will-change: transform;

  transition: transform .4s;
}
```

### The main bar

Here we just have to set background-color to transparent to hide the bar.

```css
/* changing the background to transparent */
.open .menu__icon-bar {
  background-color: transparent;
}
```

### The top/bottom bar

Here is where all the magic happens :D Note that the **translate position Y**
came back to 0, this is to center our new X.

```css
/* Top bar */
.open .menu__icon-bar:before {
  transform: rotate(-135deg) translate3d(0,-0,0);
}


/* Bottom bar */
.open .menu__icon-bar:after {
  transform: rotate(135deg) translate3d(0,0,0);
}
```


Yeaah guys, that's it!! You can <a href="http://codepen.io/andremendes/pen/qaeKMG"
  title="See the code in codepen" target="_blank">see all the code runing</a>
in my codepen :D


