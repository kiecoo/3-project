var bel = require('bel')
var csjs = require('csjs-inject')

document.title = "Walt Disney Tribute Page"

var css = csjs`
  html {
    font-size: 30px;
  }
  .first-div {
    background-color: #000;
    min-height: 115vh;
    background-image: url('https://i.pinimg.com/originals/10/31/a7/1031a709077cb86837ba9eac041c07e6.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .first-div-title {
    color: #fff;
    font-family:'Playfair Display', serif;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 130px;
  }
  .first-div-subtitle {
    color: #fff;
    font-family:'Playfair Display', serif;
    font-size: 40px;
  }
  .second-div-title {
   color: #000;
   font-family:'Playfair Display', serif;
   text-align:center;
  }
  .footer {
    background-color:#000;
    color:#fff;
    font-size: 90%;
    padding:20px 50px 20px 50px;
    text-align:right;
  }
`


var element = bel`
  <div class="${css['webpage']}">
    <div class="${css['first-div']}">
      <h1 class="${css['first-div-title']}"> Walt Disney </h1>
        <h3 class="${css['first-div-subtitle']}"> 
          " It is kind of fun to do the impossible. "
        </h3>
    </div>
    <ul >
      <li><strong> 1923–29: </strong> Disney Brothers Cartoon Studio</li>
      <li><strong> 1929–40: </strong>Reincorporation, Silly Symphonies and Snow White and the Seven Dwarfs</li>
      <li><strong> 1940–48: </strong> New features, strike, World War II</li>
      <li><strong> 1948–59: </strong> Return of features, end of shorts, layoffs</li>
      <li><strong> 1959–66: </strong> Reduced feature animation, Walt Disney's final years</li>
      <li><strong> 1967–83: </strong> Decline in popularity, Don Bluth's entrance and departure, "rock bottom"</li>
      <li><strong> 1984–89: </strong> Michael Eisner takeover, restructuring, return to prominence</li>
      <li><strong> 1989–94: </strong> Beginning of the Disney Renaissance, successful releases, impact on the animation industry</li>
      <li><strong> 1994–99: </strong> End of the Disney Renaissance, declining returns</li>
      <li><strong>	2000–06: </strong> Slump, downsizing and conversion to computer animation, corporate issues</li>
      <li><strong>	2006–09: </strong> Rebound, Disney's acquisition of Pixar, renaming</li>
      <li><strong> 2010–present: </strong> Continued resurgence</li>
    </ul>
    <h4  class="${css['second-div-title']}">Read more
      <a href="https://en.wikipedia.org/wiki/Walt_Disney_Animation_Studios"> Wikipedia Page</a>
    </h4>
    <div class="${css['footer']}">
          Coded by Michelle | A Free Code Camp Project      
    </div>
  </div>
`

document.body.appendChild(element)

