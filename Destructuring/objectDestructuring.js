const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false
  },
  color: {
    theme: "dark",
    chosen_color: "blue"
  }
};

const {
  notifications: { follow }
} = settings;

//
const {
  notifications:
    // can change name by using ":"
    // can assign default value by using "="
    { follow: folloNotifications = false } = {}
} = settings;

// default value when destructuring object.

let chosenColor = "green";

// desturcture and assign to let variable is possible
({
  color: { chosen_color: chosenColor }
} = settings);

console.log(chosenColor);

// const saveSettings = (followAlert, unFollowAlert, marketingAlert, themeColor) =>
// argument without key,value is not good.

const saveSettings = ({ follow, alert, mkt, color = "blue" }) => {
  console.log(settings);
};

saveSettings({
  // true,
  // true,
  //true ---> it is bad .
  // just listing argument is very bad convention.
  // should give description.
  follow: true,
  alert: true,
  mkt: true,
  color: "green"
});
