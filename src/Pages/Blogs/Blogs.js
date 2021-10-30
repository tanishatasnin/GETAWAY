import React from 'react';
import './blog.css';

const Blogs = () => {
               return (
                              <div className='blogs container'>
                                             <div>
                                                 <h1>From our Blog <span className="The-Journal"> The Journal</span> </h1>    
                                                 <h4 className="">Travel tips, guests stories</h4>       
                                             </div>
                                             <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.ctfassets.net/su91f9ruo9t2/3F4xDs4OzSSaWwkgsKaIsG/a49988dacf6319277e1eeeb954a0acbe/Journal_RachelCargle_copy.jpg?w=600&h=600&q=85&fm=webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="journal card-title">A week of Rest</h5>
        <p class="card-text">

We’re thrilled to announce A week of Rest in partnership with Rachel Cargle.
 In total we’ll be providing 6 nights of rest to those fighting for change.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.ctfassets.net/su91f9ruo9t2/1TVc3TY01hjqlETQ6BlkTK/a561ff433bed14776ccd69567d25d095/CampfireCooking.jpg?w=600&h=600&q=85&fm=webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="journal card-title">Campfire Recipes</h5>
        <p class="card-text">

Sometimes food just tastes better cooked over a fire. Check out some of our favorite recipes for al fresco dining.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.ctfassets.net/su91f9ruo9t2/3w36G6u0egRVHrEDyu5ayI/0d7d9c1a96d3d16d798b91445008dedf/covid.jpg?w=600&h=600&q=85&fm=webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="journal card-title">Explore Getaway Barber Creek</h5>
        <p class="card-text">

Explore Getaway Barber Creek, our new Outpost two hours outside of Chicago.</p>
      </div>
    </div>
  </div>
  
</div>
                                             
                              </div>
               );
};

export default Blogs;