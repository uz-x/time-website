![banner](https://user-images.githubusercontent.com/111834874/196954290-a0fa87cd-a04e-4643-8137-f5ce8e8b1208.png)

# What is Time 24/7?
Time 24/7 (time.hrant.repl.co) is a kind of modern website that shows the time in your current timezone 24/7.

# Warning: Terrible code
# How to edit
This project uses the `Date()` function of JavaScript which should return:  
```
WEEKDAY MONTH DAY YEAR CURRENT_TIME TIMEZONE (COUNTRY Standard Time)
```
If not, please try editing the `script.js` files indexes:
```js
document.getElementById("hr").innerHTML = time[0];
document.getElementById("min").innerHTML = time[1];
document.getElementById("sec").innerHTML = time[2];
document.getElementById("timezone").innerHTML = d[5];
document.getElementById("weekday").innerHTML = d[0];
document.getElementById("date").innerHTML = d[1] + " " + d[2] + ", " + d[3]
```
...or edit the code to use a different time getting system.

## Colors
![colors](https://user-images.githubusercontent.com/111834874/196954870-cb262a8b-e5fa-48d6-8b41-6b2b4164ed38.png)  
These colors are buttons that you can click to change the colors of the clock:  
`Default clock`  
![orange_clock](https://user-images.githubusercontent.com/111834874/196955263-6525c47d-a452-4a44-9300-658b205d2b62.png)  
`After clicking blue button`  
![blue_clock](https://user-images.githubusercontent.com/111834874/196955260-a5a1a7e4-2f63-4051-bd74-9e0884563d6c.png)

### Adding new colors
To create a new color, copy paste one of the already made colors and replace the ID to the CSS name of the color, and make sure that same color also has a dark version with the syntax `dark[COLOR]`.

```html
<!-- Old -->
<input type="button" id="red" class="colorb" onclick="switchColor(this.id)"/>

<!-- New -->
<input type="button" id="purple" class="colorb" onclick="switchColor(this.id)"/>
```

^ (The color purple isn't in the official release)

And in the `script.js` file, find the `init()` function and copy paste one of the scripts where it sets the buttons `backgroundColor` to the correct color.

```js
// Old
document.getElementById("red").style.backgroundColor = "red";

// New
document.getElementById("purple").style.backgroundColor = "purple";
```

No CSS work needed as the JavaScript automates everything.

# `<table>` Info

## Adding new info

To add new information, in the `index.html` file add another `<td>` tag to both `<tr>` tags.  
The first one says what info it is, the second says "..."
    
Then to update the second box, find the `getCurrentTime()` function in the `script.js` file, and put your scripting in there.  
Make sure the second `<td>` has an ID.

# Changing updating time

In the `script.js` file, find the `setInterval()` function which should look something like this.
```js
setInterval(getCurrentTime, 50);
```
The `50` defines the millisecond amount to update. (In this case, the time updates every 50ms.)  
You can change the number to make it update faster/slower.
