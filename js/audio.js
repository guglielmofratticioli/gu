/*
    This is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
window.addEventListener('DOMContentLoaded', () => {
// Set up audio context
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const drawAudio = async (url) => {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const normalizedData = normalizeData(filterData(audioBuffer));
    draw(normalizedData);
  } catch (error) {
    console.error("Error loading audio:", error);
  }
};



/**
 * Filters the AudioBuffer retrieved from an external source
 * @param {AudioBuffer} audioBuffer the AudioBuffer from drawAudio()
 * @returns {Array} an array of floating point numbers
 */
const filterData = audioBuffer => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 200; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  return filteredData;
};

/**
 * Normalizes the audio data to make a cleaner illustration 
 * @param {Array} filteredData the data from filterData()
 * @returns {Array} an normalized array of floating point numbers
 */
const normalizeData = filteredData => {
    const multiplier = Math.pow(Math.max(...filteredData), -1);
    return filteredData.map(n => n * multiplier);
}

/**
 * Draws the audio file into a canvas element.
 * @param {Array} normalizedData The filtered array returned from filterData()
 * @returns {Array} a normalized array of data
 */
const draw = normalizedData => {

  // set up the canvas
  const canvas = document.querySelector("canvas");
  const dpr = window.devicePixelRatio || 1;
  const padding = 20;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2 + padding); // set Y = 0 to be in the middle of the canvas

  // draw the line segments
  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    let height = normalizedData[i] * canvas.offsetHeight - padding;
    if (height < 0) {
        height = 0;
    } else height = height > canvas.offsetHeight / 2 ? canvas.offsetHeight / 2 : height;
    drawLineSegment(ctx, x, height, width, (i + 1) % 2);
  }
};

/**
 * A utility function for drawing our line segments
 * @param {AudioContext} ctx the audio context 
 * @param {number} x  the x coordinate of the beginning of the line segment
 * @param {number} height the desired height of the line segment
 * @param {number} width the desired width of the line segment
 * @param {boolean} isEven whether or not the segmented is even-numbered
 */
const drawLineSegment = (ctx, x, height, width, isEven) => {
  ctx.lineWidth = 1; // how thick the line is
  ctx.strokeStyle = "#a79753"; // what color our line is
  ctx.beginPath();
  height = isEven ? height : -height;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, height);
  ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, false);
  ctx.lineTo(x + width, 0);
  ctx.stroke();
};

//  -   -   -   -   -   --  -   -       --  -   --  -   -   


const audioList = document.getElementsByTagName('audio');
let audioElement = audioList[Math.floor(Math.random() * audioList.length)];
let playButton = document.getElementById("play");
let timer = setInterval(()=>{},100)
clearTimeout(timer)
let pauseButton = document.getElementById("pause");
let fileName = audioElement.id;

drawAudio('/audio/'+fileName+'.mp3');
//!!

const audiolabel = document.getElementById('audio_label');
audiolabel.innerHTML= 'Now\ Playing:\ '+audioElement.id;

document.querySelector('#play').addEventListener('click', () => {
    playButton.style.display = "none"
    pauseButton.style.display = "block"
    timer = setInterval(
        ()=>{
        let timeline = document.getElementById("timeline");
        time = 100 - audioElement.currentTime/audioElement.duration*100;
        timeline.style.width = time+'%';
    }
        ,10)
    audioElement.play();
});

document.querySelector('#pause').addEventListener('click', () => {
    playButton.style.display = "block"
    pauseButton.style.display = "none"
    audioElement.pause()
    clearTimeout(timer)
});

document.querySelector('#dice').addEventListener('click', () => {
    playButton.style.display = "block"
    pauseButton.style.display = "none"
    let timeline = document.getElementById("timeline")
    timeline.style.width = '100%';

    audioElement.pause()
    clearTimeout(timer)

    const audioList = document.getElementsByTagName('audio');
    audioElement = audioList[Math.floor(Math.random() * audioList.length)];
    let fileName = audioElement.id;
    drawAudio('/audio/'+fileName+'.mp3');
    //!!
    const audiolabel = document.getElementById('audio_label');
    audiolabel.innerHTML= 'Now\ Playing:\ '+audioElement.id;
});

});



