# WebAA Library

A simple TypeScript abstraction layer library over the WebAudio API.
It stands for "Web Audio Abstraction"

## Installation

Building the sandbox tests:

`npm install`, then:

Build with`npm run build` or run a dev server `npm run serve`

The `main.js` file is output to `dist/`

This library is currently heavily under development, and intended to be 
submoduled and consumed by another TypeScript project that uses a bundler 
such as Webpack.

Using TypeScript module resolution `NodeNext` you can import the entire 
library from the root directory of this repository.

Once extensive testing and a release is to be had, better
deployment practices may be considered.

## Example Code

Initialize the engine
```typescript
import { AudioEngine } from "./lib/WebAA"

const audio = new AudioEngine;
audio.init();
```


Load & play a oneshot sound
```typescript
const bopSnd = await audio.loadSound("bop.wav");

bopSnd.play();
```


Loading & playing a mono synth
```typescript
const osc = audio.loadSynth("osc1", "master", {
    type: "sawtooth",
    frequency: 440,
});

// Set the ADSHR envelope
osc.envelope.set({
    attackTime: 0,
    decayTime: .5,
    sustainLevel: .2,
    holdTime: 0,
    releaseTime: .5,
});

osc.play();
```


Adding effects

```typescript
const masterBus = audio.busses.master;

// ===== Filter ==========================================
masterBus.effects.push(BiquadFilterNode, {
    type: "lowpass",
    frequency: 500,
    Q: 2.0,
    gain: .5,
});


// ===== Convolution reverb ===============================
import {loadAudioBuffer} from "./lib/WebAA";

const impulseResponse = await loadAudioBuffer("roomIR.wav");
const convolver = masterBus.effects.push(ConvolverNode, {
    buffer: impulseResponse,
});

convolver.setWet(.2);
convolver.setDry(.8);
```

## To-do
- Test sends

## "Nice to haves"
- Make synth voice class -> poly-synths
- Sequencing notes, MIDI playback
- Multi-sample map instruments
