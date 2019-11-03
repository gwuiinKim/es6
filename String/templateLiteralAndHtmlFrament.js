const add = (a, b) => a + b;

// varaible or function.. etc can be located inside string
console.log(`a plus b => ${add("a", "b")}`);

const wrapper = document.querySelector(".wrapper");

// const addWelcome = () => {
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   h1.innerText = "Hello";
//   h1.className = "hi";
//   div.append(h1);
//   wrapper.append(div);
// };

// before es6. it looks like above.

const addWelcome = () => {
  const div = `
    <div class="hi">
        <h1 class="title">Hello</h1>
    </div>`;
  // html fragment.
  // `` respect space..
  wrapper.innerHTML = div;
};

addWelcome();

const friends = ["woosung", "kyusup"];

// before es6
// create ul, append ul to wrapper.
// crate li, innerText.....

//es6
const list = `
<h1>Friends </h1>
<ul>
  ${friends.map(friend => `<li>${friend}</li>`).join("")}
</ul>
`;
// es6 is amazing.
wrapper.innerHTML = list;
