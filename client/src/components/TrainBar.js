import React from "react";
import { NavLink } from "react-router-dom";

function TrainBar (){

    return (
        <div>
            <nav>
             <NavLink className="navlink" id="home" to="/">Home</NavLink>
             <NavLink className="navlink" id="A_train" to="/trains/A_train">A Train</NavLink>
             <NavLink className="navlink" id="B_train" to="/trains/B_train">B Train</NavLink>
             <NavLink className="navlink" id="C_train" to="/trains/C_train">C Train</NavLink>
             <NavLink className="navlink" id="D_train" to="/trains/D_train">D Train</NavLink>
             <NavLink className="navlink" id="E_train" to="/trains/E_train">E Train</NavLink>
             <NavLink className="navlink" id="F_train" to="/trains/F_train">F Train</NavLink>
             <NavLink className="navlink" id="G_train" to="/trains/G_train">G Train</NavLink>
             <NavLink className="navlink" id="J_train" to="/trains/J_train">J Train</NavLink>
             <NavLink className="navlink" id="L_train" to="/trains/L_train">L Train</NavLink>
             <NavLink className="navlink" id="M_train" to="/trains/M_train">M Train</NavLink>
             <NavLink className="navlink" id="N_train" to="/trains/N_train">N Train</NavLink>
             <NavLink className="navlink" id="Q_train" to="/trains/Q_train">Q Train</NavLink>
             <NavLink className="navlink" id="R_train" to="/trains/R_train">R Train</NavLink>
             <NavLink className="navlink" id="W_train" to="/trains/W_train">W Train</NavLink>
             <NavLink className="navlink" id="Z_train" to="/trains/z_train">Z Train</NavLink>
             <NavLink className="navlink" id="1_train" to="/trains/1_train">1 Train</NavLink>
             <NavLink className="navlink" id="2_train" to="/trains/2_train">2 Train</NavLink>
             <NavLink className="navlink" id="3_train" to="/trains/3_train">3 Train</NavLink>
             <NavLink className="navlink" id="4_train" to="/trains/4_train">4 Train</NavLink>
             <NavLink className="navlink" id="5_train" to="/trains/5_train">5 Train</NavLink>
             <NavLink className="navlink" id="6_train" to="/trains/6_train">6 Train</NavLink>
             <NavLink className="navlink" id="7_train" to="/trains/7_train">7 Train</NavLink>
             </nav>
        </div>
    );
}

export default TrainBar;