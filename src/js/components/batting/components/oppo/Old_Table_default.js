import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <List>
            <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem
              
              style={styles.listItem}
              
              primaryText={
                <div class="row">
                    <div class="col-xs-12 nopadding"> Spider Monkeys 5</div>
                </div>
              }
              secondaryText={
                <div style={{display:'block', color:'white'}}>
                    <div class="col-xs-3 nopadding tone1"> Runs 200 </div>
                    <div class="col-xs-3 nopadding tone2"> AVG 12 </div>
                    <div class="col-xs-3 nopadding tone3"> SR 200  </div>
                    <div class="col-xs-3 nopadding tone4"> BF 200 </div>
                </div>
              }
            
              secondaryTextLines={2}
            
              initiallyOpen={false}
            
              primaryTogglesNestedList={true}
            
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText={
                    <div class="row">
                        <div class="col-xs-3 nopadding"> 12/12/12 </div>
                        <div class="col-xs-3 nopadding"> Runs 23 </div>
                        <div class="col-xs-3 nopadding"> BF:13 </div>
                        <div class="col-xs-3 nopadding"> LINK </div>
                    </div>
                  }
                  style={styles.listItem}
                />,
                <ListItem
                  key={2}
                  primaryText={
                    <div class="row">
                        <div class="col-xs-3 nopadding"> 12/12/12 </div>
                        <div class="col-xs-3 nopadding"> Runs 23 </div>
                        <div class="col-xs-3 nopadding"> BF:13 </div>
                        <div class="col-xs-3 nopadding"> LINK </div>
                    </div>
                  }
                  style={styles.listItem}
                />,
                <ListItem
                  key={3}
                  primaryText={
                    <div class="row">
                        <div class="col-xs-3 nopadding"> 12/12/12 </div>
                        <div class="col-xs-3 nopadding"> Runs 23 </div>
                        <div class="col-xs-3 nopadding"> BF:13 </div>
                        <div class="col-xs-3 nopadding"> LINK </div>
                    </div>
                  }
                  style={styles.listItem}
                
                />,
              ]}
            />
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}