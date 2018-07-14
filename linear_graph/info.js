var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: { 
  	title: "Linear Algebra Graph",
  	summary:

		`This is a visualizer for one of the key concepts of linear algebra: the transformation. In 2-space, a transformation can be described by a 2x2 matrix. To understand how this matrix will transform our space (or any vector within it), take a look at the red and green 'basis' vectors above. Each one has a name:

                red     =>    \u00EE  =>    say 'i hat'
                green   =>    \u0135  =>    say 'j hat'
                \u0135

        <br>You may have done matrix multiplication in school. First row times first column, first row times second column, etc. Here's the intuition. 

        <strong><small>The 1st column of the transformation matrix tells the red \u00EE vector where to go.</small>
        <small>The 2nd column of the transformation matrix tells the green \u0135 vector where to go.</small></strong>

        Now clear whatever you've been futzing around on with the "Restart!" button. Enter the example matrix above and press "Transform!"

                    -1 , 0 , 1 , 1

        \u00EE ends up at (-1,0) while \u0135 ends up at (1,1). Neat, huh? Play around with it for a bit. See if you can define a rotation, a reflection, or a "skew". The nice thing about linear algebra transformations, thus defined, is that they pack a big punch. How nice to be able to describe a specific stretch, turn, and skew with just 4 numbers!

        If you're new to linear algebra (like I am), I recommend <a href="https://www.youtube.com/watch?v=ZK3O402wf1c">Professor Gilbert Strang's</a> lecture series and <a href="https://www.youtube.com/watch?v=kjBOesZCoqc&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1">this introductory series</a> by 3Blue1Brown.



                    Your math enthusiast,
                            Ben


        P.S. You can look in the .html file below to find some of the preset transformations. I'll give you the chance to figure them out yourself first, but if you get impatient go to ~line 150.`


  }
});

document.title = ractive.get('title')

// console.log(ractive.get('country.name'));
// ractive.set('country.climate.rainfall','an unholy amount of');