import React from "react";

import AddPlayer from "../../global/icons/AddPlayer";
import RemovePlayer from "../../global/icons/RemovePlayer";
import Interactive from "../../global/icons/interactive";
import LinkIcon from "../../global/icons/Link";
import TrendDown from "../../global/icons/trend_down";
import TrendUp from "../../global/icons/trend_up";
import TrendFlat from "../../global/icons/trend_flat";

export default class Display_Settings_Icons extends React.Component {
    render() {
            return ( 
                <ul className="list">
                                <li><AddPlayer />  -  Follow Player</li>
                                <li><RemovePlayer /> - Remove Player</li>
                                <li><Interactive /> - Item is Interactive</li>
                                <li><LinkIcon /> - Link to Page</li>
                                <li><TrendDown /> - Rankings Down on previous</li>
                                <li><TrendUp /> - Rankings UP on previous</li>
                                <li><TrendFlat /> - Rankings The Same as previous</li>
                        </ul>
             ); 
      }
  }