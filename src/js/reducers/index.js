import { combineReducers } from "redux";

import UI_DATA from "./UI";
import PLAYER from "./PlayerStats";
import REGISTRATION from "./New_Registration";
import GAMES from "./Games";
import NewsFeed from "./NewsFeed";


const reducers = combineReducers({
		UI:UI_DATA,
		PLAYER:PLAYER,
		REGISTRATION:REGISTRATION,
		GAMES:GAMES,
		NewsFeed:NewsFeed
	})

export default reducers;