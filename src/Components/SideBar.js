import React from 'react';
import { NavLink } from "react-router-dom";

export default function SideBar(){
    return(
        <nav id="sidebar" className="sidebar js-sidebar">
			<div className="sidebar-content js-simplebar">
				<a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit by Willy Adja</span>
        	</a>

				<ul className="sidebar-nav">
					<li className="sidebar-header">
						Pages
					</li>

					<li className="sidebar-item active">
						<NavLink to="/"> 
							<a className="sidebar-link" href="index.html">
								<i className="align-middle" data-feather="home"></i> <span className="align-middle">Home</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item active">
						<NavLink to="/dashboard"> 
							<a className="sidebar-link" href="index.html">
								<i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
							</a>
						</NavLink>
					</li>





					<li className="sidebar-item">						
						<a data-bs-target="#pages" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
							<i className="align-middle" data-feather="layout"></i> <span className="align-middle">Pages <span className='chevron-down'></span></span>
						</a>
						<ul id="pages" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
							<li className="sidebar-item">
								<a className='sidebar-link' href='/pages-settings'>
									<span className="align-middle">Page 1</span>
								</a>
							</li>
							<li className="sidebar-item">
								<a className='sidebar-link' href='/pages-projects'>
									<span className="align-middle">Page 2</span> 
								</a>
							</li>
							<li className="sidebar-item">
								<a className='sidebar-link' href='/pages-clients'>
									<span className="align-middle">Page 3</span> 
								</a>
							</li>
							<li className="sidebar-item">
								<a className='sidebar-link' href='/pages-projects'>
									<span className="align-middle">Page 4</span> 
								</a>
							</li>
							<li className="sidebar-item">
								<a className='sidebar-link' href='/pages-clients'>
									<span className="align-middle">Page 5</span> 
								</a>
							</li>
						</ul>
					</li>






					<li className="sidebar-item">
						<NavLink to="/profile"> 
							<a className="sidebar-link" href="pages-profile.html">
								<i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/login'>
							<a className="sidebar-link" href="pages-sign-in.html">
								<i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/newCompte'>
							<a className="sidebar-link" href="pages-sign-up.html">
								<i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to="/blank">
							<a className="sidebar-link" href="pages-blank.html">
								<i className="align-middle" data-feather="book"></i> <span className="align-middle">Blank</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-header">
						Tools & Components
					</li>

					<li className="sidebar-item">
						<NavLink to='/button'>
							<a className="sidebar-link" href="ui-buttons.html">
								<i className="align-middle" data-feather="square"></i> <span className="align-middle">Buttons</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/formulaire'>
							<a className="sidebar-link" href="ui-forms.html">
								<i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Forms</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/card'>
							<a className="sidebar-link" href="ui-cards.html">
								<i className="align-middle" data-feather="grid"></i> <span className="align-middle">Cards</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/icons'>							
							<a className="sidebar-link" href="icons-feather.html">
								<i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
							</a>
						</NavLink>
					</li>



					<li className="sidebar-header">
						Plugins & Addons
					</li>

					<li className="sidebar-item">
						<NavLink to='/'>
							<a className="sidebar-link" href="charts-chartjs.html">
								<i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
							</a>
						</NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink to='/'>
							<a className="sidebar-link" href="maps-google.html">
								<i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
							</a>
						</NavLink>
					</li>
				</ul>

				
			</div>
		</nav>
    );
}
