// Description:
//   Bot concurs, it is "so good"
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   so good - bot agrees

module.exports = function(robot) {
  robot.hear(/so good/i, function(msg) {
    msg.send('https://cldup.com/M7UCWvoSIq.gif');
  });
};
