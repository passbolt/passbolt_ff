/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) 2020 Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since        3.0.0
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import ReactAppIframe from "./components/ReactAppIframe";
/* eslint-disable no-unused-vars */
import Port from "../../../data/js/lib/port";
/* eslint-enable no-unused-vars */

class ManageReactAppIframe extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={[
            "/app/folders/view/:filterByFolderId",
            "/app/passwords/view/:selectedResourceId",
            "/app/passwords",
            "/app/users",
            "/",
          ]}>
            <ReactAppIframe/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const manageReactAppIframeElement = document.createElement("div");
document.body.appendChild(manageReactAppIframeElement);
ReactDOM.render(React.createElement(ManageReactAppIframe), manageReactAppIframeElement);