const styled = (aElement = "div") => {
  const el = document.createElement(aElement);
  return args => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

// console.log(styled`gg`);

const title = styled("h1")`
  background-color: black;
  color: white;
`;
const subtitle = styled("span")`
  color: green;
`;
title.innerText = "Just cloned";
subtitle.innerText = "styled components";
title.appendChild(subtitle);

document.body.appendChild(title);
