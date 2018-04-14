import { combineReducers } from "redux";

import UI_DATA from "./UI";
import PLAYER from "./PlayerStats";
import REGISTRATION from "./New_Registration";
import GAMES from "./Games";
import NewsFeed from "./NewsFeed";
import SNACKBAR from "./SnackBar";
import FOLLOWERS from "./Followers";


const reducers = combineReducers({
		UI:UI_DATA,
		PLAYER:PLAYER,
		REGISTRATION:REGISTRATION,
		GAMES:GAMES,
		NewsFeed:NewsFeed,
		SNACKBAR:SNACKBAR,
		FOLLOWERS:FOLLOWERS
	})

export default reducers;