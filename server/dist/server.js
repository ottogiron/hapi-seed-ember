"use strict";
var Composer = require('./index');
Composer(function(err, server) {
  if (err) {
    throw err;
  }
  server.start(function() {
    console.log('Started the plot device on port ' + server.info.port);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0FBRWpDLE9BQU8sQUFBQyxDQUFDLFNBQVUsR0FBRSxDQUFHLENBQUEsTUFBSyxDQUFHO0FBRTVCLEtBQUksR0FBRSxDQUFHO0FBQ0wsUUFBTSxJQUFFLENBQUM7RUFDYjtBQUFBLEFBRUEsT0FBSyxNQUFNLEFBQUMsQ0FBQyxTQUFVLEFBQUQsQ0FBRztBQUN0QixVQUFNLElBQUksQUFBQyxDQUFDLGtDQUFpQyxFQUFJLENBQUEsTUFBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0VBQ3BFLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQztBQUNGIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9vdHRvL3dvcmtzcGFjZS9vcGVuc291cmNlL25vZGUtaGFwaS1zZWVkL3NlcnZlci9zcmMvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvc2VyID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5Db21wb3NlcihmdW5jdGlvbiAoZXJyLCBzZXJ2ZXIpIHtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIHNlcnZlci5zdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgdGhlIHBsb3QgZGV2aWNlIG9uIHBvcnQgJyArIHNlcnZlci5pbmZvLnBvcnQpO1xuICAgICB9KTtcbiAgXG59KTtcbiJdfQ==
