import rp from "request-promise";
import cherio from "cheerio";
import Table from "cli-table";

let users = [];

const options = {
  url: `https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1518604435748`,
  json: true
};

const prinData = () => {
  console.log("Ok");
  console.log("Ok");
};

const challegesCompletedPushArray = usersData => {
  console.log(usersData);
};

rp(options)
  .then(data => {
    let userData = [];
    console.log(data.category_list.categories[1]);
    // for (let user of data.directory_items) {
    //   userData.push({
    //     name: user.user.username,
    //     likes_received: user.likes_received
    //   });
    // }
    process.stdout.write("loading");
    // getChallengesCompletedAndPushToUserArray(userData);
  })
  .catch(err => {
    console.log(err);
  });
