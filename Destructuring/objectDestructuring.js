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

let chosenColor = "green"(
  // desturcture and assign to let variable is possible
  ({
    color: { chosen_color: chosenColor }
  } = settings)
);
