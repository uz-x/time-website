![banner](https://user-images.githubusercontent.com/111834874/196954290-a0fa87cd-a04e-4643-8137-f5ce8e8b1208.png)


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

## Colors
![colors](https://user-images.githubusercontent.com/111834874/196954870-cb262a8b-e5fa-48d6-8b41-6b2b4164ed38.png)  
These colors are buttons that you can click to change the colors of the clock:  
`Default clock`  
![orange_clock](https://user-images.githubusercontent.com/111834874/196955263-6525c47d-a452-4a44-9300-658b205d2b62.png)  
`After clicking blue button`  
![blue_clock](https://user-images.githubusercontent.com/111834874/196955260-a5a1a7e4-2f63-4051-bd74-9e0884563d6c.png)
