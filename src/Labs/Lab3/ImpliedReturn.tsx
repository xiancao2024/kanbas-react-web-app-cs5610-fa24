const multiply = (a: number, b: number) => a * b;  // Arrow function to multiply two numbers
const fourTimesFive = multiply(4, 5);  // Call the multiply function with 4 and 5
console.log(fourTimesFive);  // Log the result to the console

// A functional component that returns the result in JSX
export default function ImpliedReturn() {
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive}<br />
      multiply(4, 5) = {multiply(4, 5)} <hr />
    </div>
  );
}
