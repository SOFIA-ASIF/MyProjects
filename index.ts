import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green(`Welcome!!`));
let todos = [];
let goals = [];
let condition = true;
let what = await inquirer.prompt([
  {
    name: "whatTasks",
    type: "list",
    message: "What do you want to do today",
    choices: ["Add tasks for today", "A full day plan", "bucket list"],
  },
]);
if (what.whatTasks === "Add tasks for today") {
  while (condition) {
    let todoList = await inquirer.prompt([
      {
        name: "tasks",
        type: "input",
        message: "Add your task",
      },
      {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more task",
        default: false,
      },
    ]);
    todos.push(todoList.tasks);
    condition = todoList.addMore;
  }
  console.log(chalk.bgCyanBright.italic.bold("Your tasks are following:"));

  for (let i = 0; i < todos.length; i++) {
    console.log(chalk.gray(`${i}. ${todos[i]}`));
  }
} else if (what.whatTasks === "A full day plan") {
  console.log(chalk.italic.bold(`An ideal day includes following `));
  console.log(
    chalk.cyan
      .dim(` 1. Start the day with 30 minutes of exercise to energize the body and mind
    2. Aim to drink at least 2 liters of water throughout the day
    3. practice mindfulness to rejuvenate the mind.
    4. Enjoy a balanced lunch with vegetables, lean protein, and whole grains
    5. Dedicate time for personal or professional development
    6. Spend some time outdoors for fresh air and sunlight
    7.Allocate focused work blocks of 1-2 hours each, with short breaks in between`)
  );
} else if (what.whatTasks === "bucket list") {
  while (condition) {
    let bucket = await inquirer.prompt([
      {
        name: "bucketList",
        message: "Set your goals for the future",
        type: "input",
      },
      {
        name: "wantMore",
        message: "Do you want to add more tasks",
        type: "confirm",
        default: false,
      },
    ]);
    goals.push(bucket.bucketList);
    condition = bucket.wantMore;
  }
  console.log(chalk.bgCyanBright.italic.bold("Your goals are following:"));

  for (let i = 0; i < goals.length; i++) {
    console.log(chalk.yellow(`${i}. ${goals[i]}`));
  }
}
