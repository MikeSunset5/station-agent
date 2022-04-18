import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function TrainBar (){

    return (
        <div>
            <nav className="trainbar">
             <NavLink className="navlink" id="home" to="/"><button>Home</button></NavLink>
             <NavLink className="navlink"  to="/trains/1_train"><button>1 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/2_train"><button>2 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/3_train"><button>3 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/4_train"><button>4 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/5_train"><button>5 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/6_train"><button>6 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/7_train"><button>7 Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/A_Train"><button>A Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/B_train"><button>B Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/C_train"><button>C Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/D_train"><button>D Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/E_train"><button>E Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/F_train"><button>F Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/G_train"><button>G Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/J_train"><button>J Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/L_train"><button>L Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/M_train"><button>M Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/N_train"><button>N Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/Q_train"><button>Q Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/R_train"><button>R Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/W_train"><button>W Train</button></NavLink>
             <NavLink className="navlink"  to="/trains/Z_train"><button>Z Train</button></NavLink>
             
             </nav>
        </div>
    );
}

export default TrainBar;