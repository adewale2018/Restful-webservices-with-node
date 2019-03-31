const gulp = require('gulp'),
nodemon = require('gulp-nodemon');

gulp.task('default', ()=> {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:5000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', ()=>{
    console.log('Restarting...');
  });
});
