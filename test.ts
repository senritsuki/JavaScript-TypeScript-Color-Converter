
import * as cc from './color_converter';

console.log("cc.rgbhex_to_rgb255('#0080ff')");
console.log(cc.rgbhex_to_rgb255('#0080ff'));

console.log("cc.rgb255_to_rgbhex([0, 128, 255])");
console.log(cc.rgb255_to_rgbhex([0, 128, 255]));

console.log("cc.lab_to_lch([80, 10, 17.32])");
console.log(cc.lab_to_lch([80, 10, 17.32]));

console.log("cc.lch_to_lab([80, 20, 60])");
console.log(cc.lch_to_lab([80, 20, 60]));

console.log("cc.hsl_to_rgbhex([210, 0.4, 0.7])");
console.log(cc.hsl_to_rgbhex([210, 0.4, 0.7]));

console.log("cc.lch_to_rgbhex([70, 40, 210])");
console.log(cc.lch_to_rgbhex([70, 40, 210]));

// test with Adobe Photoshop CS6;

console.log("cc.lab_to_rgb255([0, 0, 0]) -> [0, 0, 0]");
console.log(cc.lab_to_rgb255([0, 0, 0]));

console.log("cc.lab_to_rgb255([50, 0, 0]) -> [119, 119, 119]");
console.log(cc.lab_to_rgb255([50, 0, 0]));

console.log("cc.lab_to_rgb255([100, 0, 0]) -> [255, 255, 255]");
console.log(cc.lab_to_rgb255([100, 0, 0]));

console.log("cc.lab_to_rgb255([50, 50, 0]) -> [193, 78, 121]");
console.log(cc.lab_to_rgb255([50, 50, 0]));

console.log("cc.lab_to_rgb255([50, 0, 50]) -> [136, 118, 22]");
console.log(cc.lab_to_rgb255([50, 0, 50]));

console.log("cc.lab_to_rgb255([50, -50, 0]) -> [0, 140, 117]");
console.log(cc.lab_to_rgb255([50, -50, 0]));

console.log("cc.lab_to_rgb255([50, 0, -50]) -> [54, 122, 205]");
console.log(cc.lab_to_rgb255([50, 0, -50]));

