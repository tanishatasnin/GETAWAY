import React from 'react';
import './details.css';

const Details = () => {
               return (
                              <div class="container">
                                             <div className="galary">
                                                            <h1>Some <span className='The-Journal'>Beautiful</span> Memories</h1>
                                             </div>
                              <div class="row">
                              <div class="col-4">
                                             <div class="row mb-3">
                              <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7rfTpFlAXX-FpZaAR2q5Erjp9H_J_b71BCB8T9Q9cjQ1wX7o6ieubjln_6wgxD1r-W8&usqp=CAU" alt=""/>
                                             </div>
                                       <div class="row mb-3">
                                             <img class="img-fluid" src="data:image/jpeg;base64,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" alt=""/>
                                       </div>      
                                       <div class="row mb-3">
                                          <img class="img-fluid" src="https://media.istockphoto.com/photos/family-with-two-children-going-on-holiday-wearing-face-masks-at-the-picture-id1250297438?k=20&m=1250297438&s=612x612&w=0&h=4SVWUuwkG5D4fm8dP2noBlYkKGOrkvbcG9r115QpSNU=" alt=""/>
                                    </div>  
                                    <div class="row mb-3">
                                          <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rs3JCR5YfjHVzTHVsSMwhT80hn8grFqYLw&usqp=CAU" alt=""/>
                                    </div>     
                              
                              </div>
                              <div class="col-4"> 
                                             <div class="row mb-3">
                                                            <img class="img-fluid " src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357_960_720.jpg" alt=""/>
                                             </div>
                                             <div class="row mb-3">
                                                            <img class="img-fluid" src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                             </div>
                                             <div class="row mb-3">
                                                            <img class="img-fluid" src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                             </div>
                                             <div class="row mb-3">
                                                            <img class="img-fluid" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                             </div>
                                             <div class="row mb-3">
                                                   {/*  */}
                                                
                                                
                                             </div>
                                             <div class="row mb-3">
                                                {/*  */}
                                                
                                             
                                          </div>
                                          
                                             
                              </div>
                              <div class="col-4">
                                             <div class="row mb-3">
                                                      <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOORKTOLpanU6eQFOs4pMNhq50BG8SLAaMyq4zDboW0dvajmohBxmzv_ym7E0NnDO3Iy4&usqp=CAU" alt=""/>      
                                             </div>
                                             <div class="row mb-3">
                                                            <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZuTvM7Y2uM07lA7mg_8tvg1NYwutbIce8g&usqp=CAU" alt=""/>      
                                                   </div>
                                                 
                                                   <div class="row mb-3">
                                                            <img class="img-fluid" src="https://images.unsplash.com/photo-1508867743401-21ad68d105b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>      
                                                   </div>
                                                   <div class="row mb-3">
                                                      <img class="img-fluid" src="https://image.freepik.com/free-photo/young-beautiful-hipster-man-woman-love-traveling-together-wild-nature_285396-2052.jpg" alt=""/>      
                                             </div>
                                             
                              </div>
                              
                              
                              </div>
                              
                              </div>
                              
                              
               );
};

export default Details;