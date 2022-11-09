import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function Connexion() {
  return (
<div class="row d-flex align-items-center bg-secondary " style={{ height: '50vh'}}>
	<div class="col-md-3 mb-10"></div>
	<div class="col-md-6">
		<div class="card card-body text-left bg-primary p-3 ">
			<form action="/" method="POST">
			  <div class="text-left">
                <p>Connectez-vous ici</p>
		      </div>
				<div class="form-group mb-2 ">
					<input
						type="email"
						name="email"
						id="nom"
						class="form-control"
						placeholder="email"

					/>
				</div>
                <div class="form-group mb-2 ">
					<input
						type="text"
						name="email"
						id="nom"
						class="form-control"
						placeholder="password"

					/>
				</div>
			
            	<div class="form-group mb-2">     
                </div>
				<div class="form-group mb-2 d-flex justify-content-end">
					<button class="btn btn-success">connexion</button>
                </div>
			</form>
            </div>
		</div>
	</div>

  )
}

export default Connexion












