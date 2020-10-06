//TypeWriter Effect

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="cursor">&nbsp;${this.txt}</span>`;
      
      //Initial Type Speed
      let typeSpeed = 200
      

      if (this.isDeleting) {
        typeSpeed /= 2 // increasing the speed while deleting
      }

      // checking if the word is completed or not
      if (!this.isDeleting && this.txt === fullTxt) {
        //Pause effect at end
        typeSpeed = this.wait

        //set isDeleting to true
        this.isDeleting = true

      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        //move to the next word
        this.wordIndex++

        //pause effect before typing the nxt word
        typeSpeed = 500
      }
                 
      setTimeout(() => this.type(), typeSpeed);
    }
  }

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
  
// Init App
function init() {
  const txtElement = document.querySelector('.txt-element');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
 
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
} 


//Weather

//General 
const place = document.querySelector('.location')
const usrInput = document.querySelector('.usr-input')
const btn = document.querySelector('.btn')


//Current //1st Day
const temp1 = document.querySelector('.temp-1')
const icon1 = document.querySelector('.icon-1')
const descrpt1 = document.querySelector('.descrpt-1')
const date1 = document.querySelector('.date-1')

const humidity1 = document.querySelector('.humidity-1')
const wind1 = document.querySelector('.wind-1')
const rain1 = document.querySelector('.rain-1')
const rise1 = document.querySelector('.rise-1')
const set1 = document.querySelector('.set-1')
const moonRise = document.querySelector('.moon-rise')
const moonSet = document.querySelector('.moon-set')
const snow = document.querySelector('.snow')
const uv = document.querySelector('.uv')
const windDir = document.querySelector('.wind-dir')

//2nd Day
const temp2 = document.querySelector('.temp-2')
const icon2 = document.querySelector('.icon-2')
const descrpt2 = document.querySelector('.descrpt-2')
const date2 = document.querySelector('.date-2')

const humidity2 = document.querySelector('.humidity-2')
const wind2 = document.querySelector('.wind-2')
const rain2 = document.querySelector('.rain-2')
const rise2 = document.querySelector('.rise-2')
const set2 = document.querySelector('.set-2')

//3rd Day
const temp3 = document.querySelector('.temp-3')
const icon3 = document.querySelector('.icon-3')
const descrpt3 = document.querySelector('.descrpt-3')
const date3 = document.querySelector('.date-3')

const humidity3 = document.querySelector('.humidity-3')
const wind3 = document.querySelector('.wind-3')
const rain3 = document.querySelector('.rain-3')
const rise3 = document.querySelector('.rise-3')
const set3 = document.querySelector('.set-3')
                
const icon = document.querySelector('i')

btn.addEventListener('click', () => {
  
 
  

 
     fetch(`https://api.weatherapi.com/v1/forecast.json?key=35c5b31b69764f71aad95112201509&q=${usrInput.value}&days=4`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)

        //general
        const { country, name, region, localtime } = data.location
        //const date = new Date
        //const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


        //Day 1 Variables
        const tempDay1 = data.current.temp_c
        const descptDay1 = data.current.condition.text
         

        const humidityDay1 = data.current.humidity
        const windDay1 = data.current.wind_kph
        const chOfRain1 = data.forecast.forecastday[0].day.daily_chance_of_rain
        const sunrise1 = data.forecast.forecastday[0].astro.sunrise
        const sunset1 = data.forecast.forecastday[0].astro.sunset
        const moonRise1 = data.forecast.forecastday[0].astro.moonrise
        const moonSet1 = data.forecast.forecastday[0].astro.moonset
        const chOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow
        const uvIndex = data.forecast.forecastday[0].day.uv
        const windDirection = data.current.wind_dir
        const Date1 = data.location.localtime
        

        console.log(Date1.replace(/-/g, "/"))

        //Day 2 Variables
        const tempDay2 = data.forecast.forecastday[1].day.avgtemp_c
        const descptDay2 = data.forecast.forecastday[1].day.condition.text
        const dateDay2 = data.forecast.forecastday[1].date
            
        const humidityDay2 = data.forecast.forecastday[1].day.avghumidity
        const windDay2 = data.forecast.forecastday[1].day.maxwind_kph
        const chOfRain2 = data.forecast.forecastday[1].day.daily_chance_of_rain
        const sunrise2 = data.forecast.forecastday[1].astro.sunrise
        const sunset2 = data.forecast.forecastday[1].astro.sunset
        const Date2 = data.forecast.forecastday[1].date
        console.log(Date2.replace(/-/g, "/"))

        //Day 3 Variables
        const tempDay3 = data.forecast.forecastday[2].day.avgtemp_c
        const descptDay3 = data.forecast.forecastday[2].day.condition.text
        const dateDay3 = data.forecast.forecastday[2].date
            
        const humidityDay3 = data.forecast.forecastday[2].day.avghumidity
        const windDay3 = data.forecast.forecastday[2].day.maxwind_kph
        const chOfRain3 = data.forecast.forecastday[2].day.daily_chance_of_rain
        const sunrise3 = data.forecast.forecastday[2].astro.sunrise
        const sunset3 = data.forecast.forecastday[2].astro.sunset
        const Date3 = data.forecast.forecastday[2].date
        console.log(Date3.replace(/-/g, "/"))
            
        //DOM Manipulation for Day 1/Current
        icon.classList.add("fas")
        icon.classList.add("fa-map-marker-alt")
        place.textContent = `${name}, ${region}, ${country}`
        temp1.textContent = `${tempDay1}°C`   
        descrpt1.textContent = descptDay1
        humidity1.textContent = `${humidityDay1}%`
        rain1.textContent = `${chOfRain1}%`
        wind1.textContent = `${windDay1} kph`
        rise1.textContent = sunrise1
        set1.textContent = sunset1
        moonRise.textContent = moonRise1
        moonSet.textContent = moonSet1
        snow.textContent = `${chOfSnow}%`
        uv.textContent = uvIndex
        windDir.textContent = windDirection
        date1.textContent = Date1.replace(/-/g, "/")

        //date1.textContent = `${day[date.getDay()]}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
          
        //DOM Manipulation for Day 2
        temp2.textContent = `${tempDay2}°C`
        descrpt2.textContent = descptDay2
        humidity2.textContent = `${humidityDay2}%`
        rain2.textContent = `${chOfRain2}%`
        wind2.textContent = `${windDay2} kph`
        rise2.textContent = sunrise2
        set2.textContent = sunset2
        date2.textContent = Date2.replace(/-/g, "/")

       
        //date2.textContent = `${day[date.getDay() + 1]}, ${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`

        //DOM Manipulation for Day 3
        temp3.textContent = `${tempDay3}°C`
        descrpt3.textContent = descptDay3
        humidity3.textContent = `${humidityDay3}%`
        rain3.textContent = `${chOfRain3}%`
        wind3.textContent = `${windDay3} kph`
        rise3.textContent = sunrise3
        set3.textContent = sunset3  
        date3.textContent = Date3.replace(/-/g, "/")
        
        
        //date3.textContent = `${day[date.getDay() + 2]}, ${date.getDate() + 2}/${date.getMonth() + 1}/${date.getFullYear()}`
        
        // BEGINING OF IF ELSE HELL //

        //Icons for Current/Day 1
        if (descrpt1.textContent === 'Sunny' || descrpt1.textContent === 'Clear') {
          icon1.innerHTML = `<img src="icons/day/113.png">`
        }else if (descrpt1.textContent === 'Partly cloudy') {
          icon1.innerHTML =`<img src="icons/day/116.png"></img>`
        } else if (descrpt1.textContent === 'Cloudy') {
          icon1.innerHTML =`<img src="icons/day/119.png"></img>`
        }else if (descrpt1.textContent === 'Overcast') {
          icon1.innerHTML =`<img src="icons/day/122.png"></img>`
        }else if (descrpt1.textContent === 'Mist') {
          icon1.innerHTML =`<img src="icons/day/143.png"></img>`
        }else if (descrpt1.textContent === 'Patchy rain possible') {
          icon1.innerHTML =`<img src="icons/day/176.png"></img>`
        } else if (descrpt1.textContent === 'Patchy snow possible') {
          icon1.innerHTML =`<img src="icons/day/179.png"></img>`
        }else if (descrpt1.textContent === 'Patchy sleet possible') {
          icon1.innerHTML =`<img src="icons/day/182.png"></img>`
        }else if (descrpt1.textContent === 'Patchy freezing drizzle possible') {
          icon1.innerHTML =`<img src="icons/day/185.png"></img>`
        }else if (descrpt1.textContent === 'Thundery outbreaks possible') {
          icon1.innerHTML =`<img src="icons/day/200.png"></img>`
        }else if (descrpt1.textContent === 'Blowing snow') {
          icon1.innerHTML =`<img src="icons/day/227.png"></img>`
        }else if (descrpt1.textContent === 'Blizzard') {
          icon1.innerHTML =`<img src="icons/day/230.png"></img>`
        }else if (descrpt1.textContent === 'Fog') {
          icon1.innerHTML =`<img src="icons/day/248.png"></img>`
        }else if (descrpt1.textContent === 'Freezing fog') {
          icon1.innerHTML =`<img src="icons/day/260.png"></img>`
        }else if (descrpt1.textContent === 'Patchy light drizzle') {
          icon1.innerHTML =`<img src="icons/day/263.png"></img>`
        }else if (descrpt1.textContent === 'Light drizzle') {
          icon1.innerHTML =`<img src="icons/day/266.png"></img>`
        }else if (descrpt1.textContent === 'Freezing drizzle') {
          icon1.innerHTML =`<img src="icons/day/281.png"></img>`
        }else if (descrpt1.textContent === 'Heavy freezing drizzle') {
          icon1.innerHTML =`<img src="icons/day/284.png"></img>`
        }else if (descrpt1.textContent === 'patchy light rain') {
          icon1.innerHTML =`<img src="icons/day/293.png"></img>`
        }else if (descrpt1.textContent === 'Light rain') {
          icon1.innerHTML =`<img src="icons/day/296.png"></img>`
        }else if (descrpt1.textContent === 'Moderate rain at times') {
          icon1.innerHTML =`<img src="icons/day/299.png"></img>`
        }else if (descrpt1.textContent === 'Moderate rain') {
          icon1.innerHTML =`<img src="icons/day/302.png"></img>`
        }else if (descrpt1.textContent === 'Heavy rain at times') {
          icon1.innerHTML =`<img src="icons/day/305.png"></img>`
        }else if (descrpt1.textContent === 'Heavy rain') {
          icon1.innerHTML =`<img src="icons/day/308.png"></img>`
        }else if (descrpt1.textContent === 'Light freezing rain') {
          icon1.innerHTML =`<img src="icons/day/311.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy freezing rain') {
          icon1.innerHTML =`<img src="icons/day/314.png"></img>`
        }else if (descrpt1.textContent === 'Light sleet') {
          icon1.innerHTML =`<img src="icons/day/317.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy sleet') {
          icon1.innerHTML =`<img src="icons/day/320.png"></img>`
        }else if (descrpt1.textContent === 'Patchy light snow') {
          icon1.innerHTML =`<img src="icons/day/323.png"></img>`
        }else if (descrpt1.textContent === 'Light snow') {
          icon1.innerHTML =`<img src="icons/day/326.png"></img>`
        }else if (descrpt1.textContent === 'Patchy moderate snow') {
          icon1.innerHTML =`<img src="icons/day/329.png"></img>`
        }else if (descrpt1.textContent === 'Moderate snow') {
          icon1.innerHTML =`<img src="icons/day/332.png"></img>`
        }else if (descrpt1.textContent === 'Patchy heavy snow') {
          icon1.innerHTML =`<img src="icons/day/335.png"></img>`
        }else if (descrpt1.textContent === 'Heavy snow') {
          icon1.innerHTML =`<img src="icons/day/338.png"></img>`
        }else if (descrpt1.textContent === 'Ice pellets') {
          icon1.innerHTML =`<img src="icons/day/350.png"></img>`
        }else if (descrpt1.textContent === 'Light rain shower') {
          icon1.innerHTML =`<img src="icons/day/353.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy rain shower') {
          icon1.innerHTML =`<img src="icons/day/356.png"></img>`
        }else if (descrpt1.textContent === 'Torrential rain shower') {
          icon1.innerHTML =`<img src="icons/day/359.png"></img>`
        }else if (descrpt1.textContent === 'Light sleet shower') {
          icon1.innerHTML =`<img src="icons/day/362.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy shower') {
          icon1.innerHTML =`<img src="icons/day/365.png"></img>`
        }else if (descrpt1.textContent === 'Light snow shower') {
          icon1.innerHTML =`<img src="icons/day/368.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy snow shower') {
          icon1.innerHTML =`<img src="icons/day/371.png"></img>`
        }else if (descrpt1.textContent === 'Light showers of ice pellets') {
          icon1.innerHTML =`<img src="icons/day/374.png"></img>`
        }else if (descrpt1.textContent === 'Moderate or heavy showers of ice pellets') {
          icon1.innerHTML =`<img src="icons/day/377.png"></img>`
        }else if (descrpt1.textContent === 'Patchy light rain with thunder') {
          icon1.innerHTML =`<img src="icons/day/386.png"></img>`
        }if (descrpt1.textContent === 'Moderate or heavy rain with thunder') {
          icon1.innerHTML =`<img src="icons/day/389.png"></img>`
        }if (descrpt1.textContent === 'Patchy light snow with thunder') {
          icon1.innerHTML =`<img src="icons/day/392.png"></img>`
        }if (descrpt1.textContent === 'Moderate or heavy snow with thunder') {
          icon1.innerHTML =`<img src="icons/day/395.png"></img>`
        }

        icon1.classList.remove("spinner-border")

        //Icons for Day 2
        if (descrpt2.textContent === 'Sunny' || descrpt2.textContent === 'Clear') {
          icon2.innerHTML = `<img src="icons/day/113.png">`
        }else if (descrpt2.textContent === 'Partly cloudy') {
          icon2.innerHTML =`<img src="icons/day/116.png"></img>`
        } else if (descrpt2.textContent === 'Cloudy') {
          icon2.innerHTML =`<img src="icons/day/119.png"></img>`
        }else if (descrpt2.textContent === 'Overcast') {
          icon2.innerHTML =`<img src="icons/day/122.png"></img>`
        }else if (descrpt2.textContent === 'Mist') {
          icon2.innerHTML =`<img src="icons/day/143.png"></img>`
        }else if (descrpt2.textContent === 'Patchy rain possible') {
          icon2.innerHTML =`<img src="icons/day/176.png"></img>`
        } else if (descrpt2.textContent === 'Patchy snow possible') {
          icon2.innerHTML =`<img src="icons/day/179.png"></img>`
        }else if (descrpt2.textContent === 'Patchy sleet possible') {
          icon2.innerHTML =`<img src="icons/day/182.png"></img>`
        }else if (descrpt2.textContent === 'Patchy freezing drizzle possible') {
          icon2.innerHTML =`<img src="icons/day/185.png"></img>`
        }else if (descrpt2.textContent === 'Thundery outbreaks possible') {
          icon2.innerHTML =`<img src="icons/day/200.png"></img>`
        }else if (descrpt2.textContent === 'Blowing snow') {
          icon2.innerHTML =`<img src="icons/day/227.png"></img>`
        }else if (descrpt2.textContent === 'Blizzard') {
          icon2.innerHTML =`<img src="icons/day/230.png"></img>`
        }else if (descrpt2.textContent === 'Fog') {
          icon2.innerHTML =`<img src="icons/day/248.png"></img>`
        }else if (descrpt2.textContent === 'Freezing fog') {
          icon2.innerHTML =`<img src="icons/day/260.png"></img>`
        }else if (descrpt2.textContent === 'Patchy light drizzle') {
          icon2.innerHTML =`<img src="icons/day/263.png"></img>`
        }else if (descrpt2.textContent === 'Light drizzle') {
          icon2.innerHTML =`<img src="icons/day/266.png"></img>`
        }else if (descrpt2.textContent === 'Freezing drizzle') {
          icon2.innerHTML =`<img src="icons/day/281.png"></img>`
        }else if (descrpt2.textContent === 'Heavy freezing drizzle') {
          icon2.innerHTML =`<img src="icons/day/284.png"></img>`
        }else if (descrpt2.textContent === 'patchy light rain') {
          icon2.innerHTML =`<img src="icons/day/293.png"></img>`
        }else if (descrpt2.textContent === 'Light rain') {
          icon2.innerHTML =`<img src="icons/day/296.png"></img>`
        }else if (descrpt2.textContent === 'Moderate rain at times') {
          icon2.innerHTML =`<img src="icons/day/299.png"></img>`
        }else if (descrpt2.textContent === 'Moderate rain') {
          icon2.innerHTML =`<img src="icons/day/302.png"></img>`
        }else if (descrpt2.textContent === 'Heavy rain at times') {
          icon2.innerHTML =`<img src="icons/day/305.png"></img>`
        }else if (descrpt2.textContent === 'Heavy rain') {
          icon2.innerHTML =`<img src="icons/day/308.png"></img>`
        }else if (descrpt2.textContent === 'Light freezing rain') {
          icon2.innerHTML =`<img src="icons/day/311.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy freezing rain') {
          icon2.innerHTML =`<img src="icons/day/314.png"></img>`
        }else if (descrpt2.textContent === 'Light sleet') {
          icon2.innerHTML =`<img src="icons/day/317.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy sleet') {
          icon2.innerHTML =`<img src="icons/day/320.png"></img>`
        }else if (descrpt2.textContent === 'Patchy light snow') {
          icon2.innerHTML =`<img src="icons/day/323.png"></img>`
        }else if (descrpt2.textContent === 'Light snow') {
          icon2.innerHTML =`<img src="icons/day/326.png"></img>`
        }else if (descrpt2.textContent === 'Patchy moderate snow') {
          icon2.innerHTML =`<img src="icons/day/329.png"></img>`
        }else if (descrpt2.textContent === 'Moderate snow') {
          icon2.innerHTML =`<img src="icons/day/332.png"></img>`
        }else if (descrpt2.textContent === 'Patchy heavy snow') {
          icon2.innerHTML =`<img src="icons/day/335.png"></img>`
        }else if (descrpt2.textContent === 'Heavy snow') {
          icon2.innerHTML =`<img src="icons/day/338.png"></img>`
        }else if (descrpt2.textContent === 'Ice pellets') {
          icon2.innerHTML =`<img src="icons/day/350.png"></img>`
        }else if (descrpt2.textContent === 'Light rain shower') {
          icon2.innerHTML =`<img src="icons/day/353.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy rain shower') {
          icon2.innerHTML =`<img src="icons/day/356.png"></img>`
        }else if (descrpt2.textContent === 'Torrential rain shower') {
          icon2.innerHTML =`<img src="icons/day/359.png"></img>`
        }else if (descrpt2.textContent === 'Light sleet shower') {
          icon2.innerHTML =`<img src="icons/day/362.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy shower') {
          icon2.innerHTML =`<img src="icons/day/365.png"></img>`
        }else if (descrpt2.textContent === 'Light snow shower') {
          icon2.innerHTML =`<img src="icons/day/368.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy snow shower') {
          icon2.innerHTML =`<img src="icons/day/371.png"></img>`
        }else if (descrpt2.textContent === 'Light showers of ice pellets') {
          icon2.innerHTML =`<img src="icons/day/374.png"></img>`
        }else if (descrpt2.textContent === 'Moderate or heavy showers of ice pellets') {
          icon2.innerHTML =`<img src="icons/day/377.png"></img>`
        }else if (descrpt2.textContent === 'Patchy light rain with thunder') {
          icon2.innerHTML =`<img src="icons/day/386.png"></img>`
        }if (descrpt2.textContent === 'Moderate or heavy rain with thunder') {
          icon2.innerHTML =`<img src="icons/day/389.png"></img>`
        }if (descrpt2.textContent === 'Patchy light snow with thunder') {
          icon2.innerHTML =`<img src="icons/day/392.png"></img>`
        }if (descrpt2.textContent === 'Moderate or heavy snow with thunder') {
          icon2.innerHTML =`<img src="icons/day/395.png"></img>`
        }

        icon2.classList.remove("spinner-border")

        //Icons for Day 3 
        if (descrpt3.textContent === 'Sunny' || descrpt3.textContent === 'Clear') {
          icon3.innerHTML = `<img src="icons/day/113.png">`
        }else if (descrpt3.textContent === 'Partly cloudy') {
          icon3.innerHTML =`<img src="icons/day/116.png"></img>`
        } else if (descrpt3.textContent === 'Cloudy') {
          icon3.innerHTML =`<img src="icons/day/119.png"></img>`
        }else if (descrpt3.textContent === 'Overcast') {
          icon3.innerHTML =`<img src="icons/day/122.png"></img>`
        }else if (descrpt3.textContent === 'Mist') {
          icon3.innerHTML =`<img src="icons/day/143.png"></img>`
        }else if (descrpt3.textContent === 'Patchy rain possible') {
          icon3.innerHTML =`<img src="icons/day/176.png"></img>`
        } else if (descrpt3.textContent === 'Patchy snow possible') {
          icon3.innerHTML =`<img src="icons/day/179.png"></img>`
        }else if (descrpt3.textContent === 'Patchy sleet possible') {
          icon3.innerHTML =`<img src="icons/day/182.png"></img>`
        }else if (descrpt3.textContent === 'Patchy freezing drizzle possible') {
          icon3.innerHTML =`<img src="icons/day/185.png"></img>`
        }else if (descrpt3.textContent === 'Thundery outbreaks possible') {
          icon3.innerHTML =`<img src="icons/day/200.png"></img>`
        }else if (descrpt3.textContent === 'Blowing snow') {
          icon3.innerHTML =`<img src="icons/day/227.png"></img>`
        }else if (descrpt3.textContent === 'Blizzard') {
          icon3.innerHTML =`<img src="icons/day/230.png"></img>`
        }else if (descrpt3.textContent === 'Fog') {
          icon3.innerHTML =`<img src="icons/day/248.png"></img>`
        }else if (descrpt3.textContent === 'Freezing fog') {
          icon3.innerHTML =`<img src="icons/day/260.png"></img>`
        }else if (descrpt3.textContent === 'Patchy light drizzle') {
          icon3.innerHTML =`<img src="icons/day/263.png"></img>`
        }else if (descrpt3.textContent === 'Light drizzle') {
          icon3.innerHTML =`<img src="icons/day/266.png"></img>`
        }else if (descrpt3.textContent === 'Freezing drizzle') {
          icon3.innerHTML =`<img src="icons/day/281.png"></img>`
        }else if (descrpt3.textContent === 'Heavy freezing drizzle') {
          icon3.innerHTML =`<img src="icons/day/284.png"></img>`
        }else if (descrpt3.textContent === 'patchy light rain') {
          icon3.innerHTML =`<img src="icons/day/293.png"></img>`
        }else if (descrpt3.textContent === 'Light rain') {
          icon3.innerHTML =`<img src="icons/day/296.png"></img>`
        }else if (descrpt3.textContent === 'Moderate rain at times') {
          icon3.innerHTML =`<img src="icons/day/299.png"></img>`
        }else if (descrpt3.textContent === 'Moderate rain') {
          icon3.innerHTML =`<img src="icons/day/302.png"></img>`
        }else if (descrpt3.textContent === 'Heavy rain at times') {
          icon3.innerHTML =`<img src="icons/day/305.png"></img>`
        }else if (descrpt3.textContent === 'Heavy rain') {
          icon3.innerHTML =`<img src="icons/day/308.png"></img>`
        }else if (descrpt3.textContent === 'Light freezing rain') {
          icon3.innerHTML =`<img src="icons/day/311.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy freezing rain') {
          icon3.innerHTML =`<img src="icons/day/314.png"></img>`
        }else if (descrpt3.textContent === 'Light sleet') {
          icon3.innerHTML =`<img src="icons/day/317.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy sleet') {
          icon3.innerHTML =`<img src="icons/day/320.png"></img>`
        }else if (descrpt3.textContent === 'Patchy light snow') {
          icon3.innerHTML =`<img src="icons/day/323.png"></img>`
        }else if (descrpt3.textContent === 'Light snow') {
          icon3.innerHTML =`<img src="icons/day/326.png"></img>`
        }else if (descrpt3.textContent === 'Patchy moderate snow') {
          icon3.innerHTML =`<img src="icons/day/329.png"></img>`
        }else if (descrpt3.textContent === 'Moderate snow') {
          icon3.innerHTML =`<img src="icons/day/332.png"></img>`
        }else if (descrpt3.textContent === 'Patchy heavy snow') {
          icon3.innerHTML =`<img src="icons/day/335.png"></img>`
        }else if (descrpt3.textContent === 'Heavy snow') {
          icon3.innerHTML =`<img src="icons/day/338.png"></img>`
        }else if (descrpt3.textContent === 'Ice pellets') {
          icon3.innerHTML =`<img src="icons/day/350.png"></img>`
        }else if (descrpt3.textContent === 'Light rain shower') {
          icon3.innerHTML =`<img src="icons/day/353.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy rain shower') {
          icon3.innerHTML =`<img src="icons/day/356.png"></img>`
        }else if (descrpt3.textContent === 'Torrential rain shower') {
          icon3.innerHTML =`<img src="icons/day/359.png"></img>`
        }else if (descrpt3.textContent === 'Light sleet shower') {
          icon3.innerHTML =`<img src="icons/day/362.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy shower') {
          icon3.innerHTML =`<img src="icons/day/365.png"></img>`
        }else if (descrpt3.textContent === 'Light snow shower') {
          icon3.innerHTML =`<img src="icons/day/368.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy snow shower') {
          icon3.innerHTML =`<img src="icons/day/371.png"></img>`
        }else if (descrpt3.textContent === 'Light showers of ice pellets') {
          icon3.innerHTML =`<img src="icons/day/374.png"></img>`
        }else if (descrpt3.textContent === 'Moderate or heavy showers of ice pellets') {
          icon3.innerHTML =`<img src="icons/day/377.png"></img>`
        }else if (descrpt3.textContent === 'Patchy light rain with thunder') {
          icon3.innerHTML =`<img src="icons/day/386.png"></img>`
        }if (descrpt3.textContent === 'Moderate or heavy rain with thunder') {
          icon3.innerHTML =`<img src="icons/day/389.png"></img>`
        }if (descrpt3.textContent === 'Patchy light snow with thunder') {
          icon3.innerHTML =`<img src="icons/day/392.png"></img>`
        }if (descrpt3.textContent === 'Moderate or heavy snow with thunder') {
          icon3.innerHTML =`<img src="icons/day/395.png"></img>`
        }

        icon3.classList.remove("spinner-border")

        //console.log(chOfRain3)        
      })
   usrInput.value = ''
}) 


    