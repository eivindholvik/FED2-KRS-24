function trackAttempts(maxAttempts) {
  let j = 0;
  const grades = [];
  return [() => {
    let highestGrade = 0;
    for (i = 0; i < grades.length; i++) {
      if (grades[i] > highestGrade) {
        highestGrade = grades[i];
      }
    }
    return highestGrade;
  }, (newAttempt) => {
    if (j < maxAttempts) {
      grades.push(newAttempt);
      j++;
    } else {
      console.log("No more attempts allowed");
    }
    return j;
  }]
}
const [eivindsJS2Grade, eivindsNewJS2Attempt] = trackAttempts(3);
const attemptArray = trackAttempts(3);

console.log(attemptArray[1](4));
console.log(attemptArray[0]());



// console.log("grade: " + eivindsJS2Grade());
// console.log("Number of attempts: " + eivindsNewJS2Attempt(3));
// console.log("grade: " + eivindsJS2Grade());
// console.log("Number of attempts: " + eivindsNewJS2Attempt(4));
// console.log("grade: " + eivindsJS2Grade());
// console.log("Number of attempts: " + eivindsNewJS2Attempt(2));
// console.log("grade: " + eivindsJS2Grade());
// console.log("Number of attempts: " + eivindsNewJS2Attempt(6));
// console.log("grade: " + eivindsJS2Grade());
// console.log("Number of attempts: " + eivindsNewJS2Attempt(10));
// console.log("grade: " + eivindsJS2Grade());