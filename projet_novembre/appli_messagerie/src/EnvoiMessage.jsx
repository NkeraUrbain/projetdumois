import React from 'react'
import message from'../src/assets/message.png'
import mrec from'../src/assets/mrec.webp'
import user from'../src/assets/user.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/style/envoimessage.css'

function EnvoiMessage() {
  return (
    <div class="container ">
            <div class="column d-flex flex-row h-100 gap-3 p-2 col-12" >
                
                <div id='sbar'>
                
                  <img src={user} alt="not found" id='img' />
                  <img src={message} alt="not found" id='img' />
                  <img src={message}alt=""  id='img' />
                </div>
          
                   <div>
                   <div>  
                      <input type="text" placeholder='search'
                      />
                    </div>
                        <div class="col align-self-center bg-secondary p-2 justify-content-center" id="part2">
                          <p>Jemmy</p>
                          <img src={mrec} alt="not found" id='img' />
                          
                          <p>Lucien</p>
                          <img src={mrec} alt="not found" id='img' />
                        
                          <p>kally</p>
                          <img src={mrec} alt="not found" id='img' />
                          <p>kally</p>
                          <img src={mrec} alt="not found" id='img' />
                          <p>kally</p>
                          <img src={mrec} alt="not found" id='img' />
                        </div>
                    </div>

                <div class=" third col bg-secondar" >
                   <div class="formsg">
                     <textarea name="" id="" cols="50" rows="" placeholder='text message'></textarea>
                     <button type='post'>Envoi message</button>
                  </div>
                 </div>
              
             </div>
        </div>
  )
}

export default EnvoiMessage