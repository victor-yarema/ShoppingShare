(function() {
  mainInner(process);

  function mainInner(process) {
    var args = process.argv.splice(process.execArgv.length + 2);
    if (args.length != 1) {
      //console.error('You should specify exactly 1 parameter.');
      throw new Error('You should specify exactly 1 parameter.'
        + '\nYou have specified ' + args.length + ' parameter(s).');
    }

    core(args[0]);
  }

  function core(file) {
    var fs = require('fs');
    var contentsStr = fs.readFileSync(file, 'utf8');
    var lines = contentsStr
      .split("\n")
      .map(function(val) {
        return val.trim();
      });

    var membersStr = lines.shift();
    var members = membersStr
      .split(" ")
      .filter(function(element) {
        return element.length > 0;
      })
      .map(function(val) {
        return {
          Id: val,
        };
      });

    console.log("Members:");
    members.forEach(function(element) {
      console.log(element);
    });
  }
}).call(this);
