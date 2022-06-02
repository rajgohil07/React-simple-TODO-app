import { getRandomID } from "../helper/herlperFunction";

export const dataJSON = [
  {
    ID: getRandomID(),
    TaskName: "Wake up!",
    IsDone: true,
    Date: "June 1st 2022, 7:00:00 am",
  },
  {
    ID: getRandomID(),
    TaskName: "GO exercise",
    IsDone: true,
    Date: "June 1st 2022, 7:30:00 am",
  },
  {
    ID: getRandomID(),
    TaskName: "Take a bath",
    IsDone: false,
    Date: "June 1st 2022, 8:30:00 am",
  },
  {
    ID: getRandomID(),
    TaskName: "Ready for your work",
    IsDone: false,
    Date: "June 1st 2022, 10:00:00 am",
  },
  {
    ID: getRandomID(),
    TaskName: "Back to home",
    IsDone: false,
    Date: "June 1st 2022, 6:30:00 pm",
  },
];
