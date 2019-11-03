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
