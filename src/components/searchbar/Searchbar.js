import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <aside className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Recherche libre" />
        </div>
        <div className="control">
          <a className="button is-info">Chercher</a>
        </div>
      </aside>
    );
  }
}

export default SearchBar;
