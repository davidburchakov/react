# About
react portfolio

# Set up commands

run localhost
~~~~
npm run dev
~~~~

deploy

~~~~
npm run deploy
~~~~
or
~~~~
npm run deploy -- -m ""
~~~~


# Notes:
_Some resources and forums that helped me built the website_
<br><br>

### How to deploy react project to github-pages
https://github.com/gitname/react-gh-pages
<br><br>
### Bruno Simon's Threejs course
you can find his course here: https://hacksnation.com/
<br><br>

### Video on Scroll
_Playing video on scroll_

I'm using gsap ScrollTrigger react version of developedbyed tutorial <sub>(he uses gsap ScrollMagic and TweenMax which are outdated)</sub>

https://www.youtube.com/watch?v=wLUJ9VNzZXo&t=12s

As __@anormalking__ pointed out in the comments, it is recommended to change the framerate of videos.

> For anyone having trouble with freezing playback with your own videos: make sure that you divide 1000/the framerate of the video AND have the video with a proper codec, here's a script that may help, you have to have FFmpeg installed, and open your terminal/powershell:

~~~~
ffmpeg -i yourInputVideo.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p theOutputNameOfTheVideo.mp4
~~~~

Install ffmpeg:
~~~~
sudo apt install ffmpeg
~~~~


#### Import gsap with cdn in react:
https://greensock.com/forums/topic/26390-gsap-cdn-in-react/

~~~~
// in .html file
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
~~~~

~~~~
// in .jsx file
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger)
~~~~


#### Gsap usage with react - gsap.context:
https://greensock.com/forums/topic/34981-pin-section-problem-in-react/

### How to use Drei Views 
https://codesandbox.io/s/bp6tmc?file=/src/App.js
