import React from "react";


let Reg,UI,Pl;
let Register_New_Player_Name,New_Player_LMS_ID,New_Player_Name,New_Player_WP_ID,New_Registration,New_Registration_Games_Played,New_Registration_MSG;
export default class Register_Progress_Test extends React.Component {
   


	shouldComponentUpdate(newProps, newState) { return true; }

    componentWillUpdate(nextProps, nextState){ 
        
        Reg = nextProps.REGISTRATION;
        
        Register_New_Player_Name = Reg.New_Player_Name.toString();
        New_Player_LMS_ID = Reg.New_Player_LMS_ID.toString();
        New_Player_Name = Reg.New_Player_Name.toString();
        New_Player_WP_ID = Reg.New_Player_WP_ID.toString();
        New_Registration = Reg.New_Registration.toString();
        New_Registration_Games_Played = Reg.New_Registration_Games_Played.toString();
        New_Registration_MSG = Reg.New_Registration_MSG.toString();
     } 
 
    componentWillMount(){   }  

render(){
	return(
			<div>
                <div class="table-responsive">
                <table class="table table-striped">
<tbody>
    <tr><td>New_Registration</td><td>{New_Registration}</td></tr>
    <tr><td>New_Player_LMS_ID</td><td>{New_Player_LMS_ID}</td></tr>
    <tr><td>New_Player_WP_ID</td><td>{New_Player_WP_ID}</td></tr>
    <tr><td>Register_New_Player_Name</td><td>{Register_New_Player_Name}</td></tr>
    <tr><td>New_Player_Name</td><td>{New_Player_Name}</td></tr>
    <tr><td>New_Registration_Games_Played</td><td>{New_Registration_Games_Played}</td></tr>
    <tr><td>New_Registration_MSG</td><td>{New_Registration_MSG}</td></tr>
    
</tbody>
                </table>
            </div>
            </div>
		)
	}			
}