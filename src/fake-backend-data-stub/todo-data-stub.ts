import { getRandomID } from "../helper/herlperFunction";

export const dataJSON = [
  {
    ID: getRandomID(),
    TaskName: "Wake up!",
    IsDone: true,
    Date: "June 1st 20, 7:00 AM",
  },
  {
    ID: getRandomID(),
    TaskName: "GO exercise",
    IsDone: true,
    Date: "June 1st 22, 7:30 AM",
  },
  {
    ID: getRandomID(),
    TaskName: "Take a bath",
    IsDone: false,
    Date: "June 1st 22, 8:30 AM",
  },
  {
    ID: getRandomID(),
    TaskName: "Ready for your work",
    IsDone: false,
    Date: "June 1st 22, 10:00 AM",
  },
  {
    ID: getRandomID(),
    TaskName: "Back to home",
    IsDone: false,
    Date: "June 1st 22, 6:30 PM",
  },
];
