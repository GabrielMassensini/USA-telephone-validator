const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
let numbersArr = [];

const verifyNumber = () => {
   const input = document.getElementById("user-input").value;
   const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

   if (input === "") {
      alert("Please provide a phone number");
      return;
   } else {
      numbersArr.push(input);
   }

   const updateResults = () => {
      const html = numbersArr
         .map(
            (el) =>
               `<span>${
                  phoneRegex.test(el) ? "✅ Valid" : "❌ Invalid"
               } US number: ${el}</span>`
         )
         .join("<br>");

      result.innerHTML = html;
   };

   updateResults();
};

checkBtn.addEventListener("click", verifyNumber);
clearBtn.addEventListener("click", () => {
   numbersArr = [];
   result.innerHTML = "";
});
