var async = require('async');

var one = function(){
    async.series(
            [
              function(done) {
                setTimeout(function(){
                    console.log("1. First thing setting up second thing")
                  },0)
                  done();
              },
              function(done) {
                setTimeout(function(){
                    console.log("2. Second thing setting up third thing")
                  },2000)
                  done();
              },
              function(done) {
                setTimeout(function(){
                    console.log("3. Third thing setting up fourth thing")
                  },4000)
                  done();
              },
              function(done) {
                setTimeout(function(){
                    console.log("4. Fourth Thing")
                  },6000)
                  done();
              },
          ]);
        }

one();