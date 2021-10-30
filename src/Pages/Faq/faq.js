import React from 'react';
import './faq.css';

const faq = () => {
               return (
                              <div>
                                             {/* // __________________ accodion ___________  */}
                              <div className='FaQ'>
                                             <div className='container'>

                                                            <div >
                                                              <p className="text-center faq-head">Frequently Ask Questions</p>  
                                                              <h2 className="type-faq">General</h2>           
                                                            </div>
                                                            <div className="accodion-part">
                                             <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What are the cabins like?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Our Getaway cabins are tiny (around 140-200 square feet) and have been carefully designed by our team to include everything you need and nothing you don't. We provide cooking essentials like oil, salt and pepper, a tiny kitchen with pots and pans, non-perishable provisions like pasta, snacks and coffee for purchase, fresh linens and towels, heat, and a hot shower.
</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What’s included??
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Your booking includes a stay for two or four guests, depending on the cabin. We will have fresh bed linens waiting for you, as well as bath towels, biodegradable shower products, and basic kitchen wares. Once you arrive, you can also purchase extras from the Getaway Provisions. All cabins have their own outdoor space with a fire pit, picnic table and chairs</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I book my Getaway?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Simply click to our Bookings page, select your city to see available dates and cabins, and then confirm your trip. No extra planning necessary. You can also call 617-914-0021 .
.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Are there any rules that I need to know about?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Safety and ensuring a good experience for all of our guests is important to us. We ask that guests never leave a campfire unattended, to never leave food and/or trash outside, and no pitching tents. We also ask that guests don't play music outside of their cabins and to avoid yelling or making unnecessary noise. Violations are subject to a $100 charge, donated to local conservation groups.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Can I use the campfire?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes, we encourage our guests to enjoy time around the 
      campfire. Please note that if there is a burn ban in effect, our team will text you day of. If there is a county mandated burn ban, no campfires are allowed. Fire bans happen occasionally at some of our Outposts due to wildfire worries at the state or county level. The use of your fire pit or burning fires of any kind is not permitted during these events. There are no exceptions to our rescheduling/cancellation policies while the fire bans are active.
      
       By booking a Getaway, guests agree to this policy.</div>
    </div>
  </div>
  {/*  */}
  </div>
  
</div>
{/* __________ _____________________________ preparing _---------------  */}
<div>
<h2 className='type-faq'>Preparing for your Stay</h2>
</div>
<div className="accodion-part">
                                             <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What should I pack?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Our Getaways are designed to be minimal—we suggest you bring overnight essentials (toothbrush, toothpaste, toiletries), clothing, and anything you 
      can’t live without. Our houses also include playing cards and an activity book.
</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What about cooking?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Each cabin is stocked with cooking essentials for use during your stay, including a 
      two-burner stove, a mini-fridge, dining ware, silverware, a can opener, a pourover kettle, a pot, a pan, cooking/grilling utensils, kitchen knives, olive oil, and salt + pepper. Paper towels and dish soap are also provided. Feel free to cook inside on the stove top or outside over the fire, but please limit pot a
      nd pan use to the stove top only. Please note that if a burn ban is in effect, no outdoor cooking is allowed.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I get to my cabin?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We reveal the exact location of your cabin once you book. Each outpost is guaranteed tobe
       a two hour drive (or less) from its respective city, without traffic. We recommend that you drive there, but many locations are 
       accessible via public transit with a few extra steps.
       The adventure is part of the fun, so sit back and enjoy the magic of a true Getaway.
.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Can I bring my pup along?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We love furry friends and you can bring yours along for a small cleaning fee.
       Be sure to stay with your dog at all times, keep them on a leash when outdoors and always clean up after them. We ask that you do not leave them inside the tiny 
      house alone if you leave the area. All dog waste must be cleaned up.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Do you have early check in and/or late checkout?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Because of our added precautions and intensifed cleaning procedures around COVID-19, we are unable to honor requests for early check in or late check out until further notice. We are working day and night to ensure we can still deliver the value of Getaway, while providing a safe experience for our guests and our team. We appreciate your understanding.

As a reminder, unless otherwise explicitly granted by our team, check in is at 3PM and check out is at 11AM..</div>
    </div>
  </div>
  {/*  */}
  </div>
  
</div>
{/* ______________ booking __________________________________________________________  */}
<div>
               <h2 className='type-faq'>Booking</h2>
</div>
<div className="accodion-part">
                                             <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is the cancellation policy?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Booking payments are fully refundable up to 15 days prior to the reservation. We're happy to partially refund your booking 8-14 days prior to your reservation, but less than a week's notice puts us in a tough spot. 
      Getaway won't be able to refund your payment if you cancel your booking less than 7 days prior. Find our full terms here.
</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What if I need to reschedule my stay?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      If you need to change your dates, your original booking will be canceled according to our cancellation policy and you'll need to create a brand new reservation. 
      Should you have any questions, please get in touch at lodge@getaway.house.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I book my Getaway?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Simply click to our Bookings page, select your city to see available dates and cabins, and then confirm your trip. No extra planning necessary. You can also call 617-914-0021 .
.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Do you offer group bookings?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Our mission is to offer simple escapes for people to unplug and connect with their loved ones. 
      While we do our best to accommodate requests for cabins located close to each other, Getaway is not the place for your next party. 
      However, we do offer custom full site buyouts for groups a purpose in line with our mission
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Is there a minimum and maximum length of stay?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      For weekend bookings, there is a minimum stay of a nights For weekday bookings, 
      there is a minimum stay of 2 nights only when booking 60+ days out. Note that if you purchase a Weeknight Pack, Friday night is included in eligible nights. To increase the benefits of nature and disconnecting, 
      we recommend guests stay for at least two nights. All Getaways have a maximum stay of seven nights.
      </div>
    </div>
  </div>
  {/*  */}
  </div>
  
</div>
                                             </div>
______________

_____________
                                             </div>
                          
                          
                              </div>       
                             
               );
};

export default faq;