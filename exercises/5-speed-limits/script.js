/*
 The `checkSpeedLimit(curSpeed)` function in JavaScript checks the speed of a vehicle and returns a string message based on the speed.

  Here's a step-by-step breakdown of what the function does:

  1. It accepts one parameter, `curSpeed`, which represents the current speed of the vehicle.
  2. It defines two constants: `SPEEDLIMIT` set to 70 and `KMPERPOINT` set to 5.
  3. It checks if `curSpeed` is less than or equal to `SPEEDLIMIT` (70). If it is, it returns the string 'Good Safe Driving!'.
  4. If `curSpeed` is greater than `SPEEDLIMIT`, it calculates the `penaltyPoint` by subtracting `SPEEDLIMIT` from `curSpeed`, dividing the result by `KMPERPOINT`, and rounding down to the nearest whole number using `Math.floor()`.
  5. If `penaltyPoint` is less than 10, it returns the string 'Speed Limit Crossed by Penalty Point: ' followed by the value of `penaltyPoint`.
  6. If `penaltyPoint` is 10 or more, it returns the string 'License Suspended!'.
 */
function checkSpeedLimit(curSpeed) {
  // your code goes here
}

// Usage examples:
let checkPoin1 = checkSpeedLimit(40);
console.log(checkPoin1); // Good Safe Driving!

let checkPoin2 = checkSpeedLimit(70);
console.log(checkPoin2); // Good Safe Driving!

let checkPoin3 = checkSpeedLimit(75);
console.log(checkPoin3); // Speed Limit Crossed by Penalty Point: 1

let checkPoin4 = checkSpeedLimit(99);
console.log(checkPoin4); // Speed Limit Crossed by Penalty Point: 5

let checkPoin5 = checkSpeedLimit(120);
console.log(checkPoin5); // License Suspended!
