import { combineReducers } from "redux";

import UI_DATA from "./UI";
import PLAYER from "./PlayerStats";
import REGISTRATION from "./New_Registration";
import GAMES from "./Games";
import NewsFeed from "./NewsFeed";
import SNACKBAR from "./SnackBar";
import FOLLOWERS from "./Followers";
import FORM_GUIDE from "./Form_Guide";
import BATTING from "./batting_data";
import TEAMS from "./Teams";

const reducers = combineReducers({
		UI:UI_DATA,
		PLAYER:PLAYER,
		REGISTRATION:REGISTRATION,
		GAMES:GAMES,
		NewsFeed:NewsFeed,
		SNACKBAR:SNACKBAR,
		FOLLOWERS:FOLLOWERS,
		FORM_GUIDE:FORM_GUIDE,
		BATTING:BATTING,
		TEAMS:TEAMS
	})

export default reducers;