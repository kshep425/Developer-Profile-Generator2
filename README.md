# Developer-Profile-Generator2

## Goals
Create a command-line application that generates a PDF developer profile based on a github username and provided color.

The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Description
At KDS Dream Tech, the product manager wants to highlight their McDreamy team to stakeholders.  The user story below, describes the issue and solution provided by the Developer Profile Generator tool.

```
AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders
```

## How I did this?
[Link to Slideshow Description](https://docs.google.com/presentation/d/1MqEV4RBMQKCEg7EtcQ99nyRMrjziwIuwP0S10pYCwVY/edit?folder=0ABlcv_5CD-LUUk9PVA#slide=id.g76107f5b16_0_118)

## Dependencies
* [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/default.asp), and [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js®](https://nodejs.org/e)
* [Node Package Manager (NPM)](https://www.npmjs.com/)
    * [github-api](https://www.npmjs.com/package/github-api): "^3.3.0"
    * [html-pdf](https://www.npmjs.com/package/html-pdf): "^2.2.0"
    * [inquirer](https://www.npmjs.com/package/inquirer): "^7.0.1"
* [Adobe Acrobat Reader DC](https://helpx.adobe.com/reader/get-started.html)

## Usage
[Video Directions](https://drive.google.com/file/d/1w-VjqRdfOW45bDyVx0RyGEHmBbsy_0Jb/view?usp=sharing)
1. Add your Githup API Token to your path environments: GHAPITOKEN

1. Start the application with the following command:
   ```sh
   node index.js
   ```
2. Answer prompt questions
   ```
   What's your GitHub user name?
   What's your favorite color?
   ```
3. The pdf file is created in the directory the index.js is located.

   Find file in Explorer or Finder

   Open the file in the Adobe Acrobat Reader DC or another pdf viewer.

## Credits
* [Phillip Loy](https://www.linkedin.com/in/phillip-loy-7769b96/) is my tutor, that showed me how to get the PDF generation working

* [Jono Augustine](https://www.linkedin.com/in/jonathan-augustine-14678b124/) is a classmate that walked me through how to get the Github API token working

* [Jordyn Saltzman](https://www.linkedin.com/in/jordynsaltzman/),
[Gregg Vonbushberger](https://github.com/gvonbush), [Michael Artes](https://github.com/michaelartes89) and [Tina](https://github.com/Kina-rain) are classmates I worked with on the homework that really helped to reinforce the Node.js®  concepts
[Wegmans](https://www.wegmans.com/) - I wouldn't be able to do this without Wegmans' vast organic produce selection.  Over the last week, I've made some fantabulous meals:
* From Dr. Michael Greger's [How Not to Die Cookbook](https://www.amazon.com/How-Not-Die-Cookbook-Recipes/dp/1250127769): Yellow Rice Brocolli and Beans, Unfried Rice, Chickpea Pasta with Lentil Bolognese
* From my own brain, fruit smoothies, acai smoothie bowls, sauteed mushroom and tofu on organic rosemary sourdogh bread with a homemade sundried tomato and roasted pepper cashew sauce.

## License
MIT License

Copyright (c) 2019 kshep425

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges
N/A

## Tests
N/A
