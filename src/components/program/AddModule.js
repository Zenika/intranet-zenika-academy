import React from 'react';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import SubModule from './AddSubModule';
import '../layout/Layout.scss';

class AddModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subModules: [],
      module: {
        title: '',
        type: 2,
        content: [],
      },
      idSubModules: 0,
    };
    this.addSubModule = this.addSubModule.bind(this);
  }

  componentDidMount() {
    this.collapsibles = bulmaCollapsible.attach('.is-collapsible', {
      container: this.refs.collapsibles,
      collapsed: false,
      allowMultiple: true,
    });
  }

  handleChange = (e) => {
    const { value, id } = e.target;
    this.setState((prevState) => {
      const newItems = [...prevState.module.content];
      newItems[id].title = value;
      return { module: { ...prevState.module, content: newItems } };
    });
  };

  addSubModule = async () => {
    const { idSubModules } = this.state;
    const newSubModule = {
      id: idSubModules,
      html: [],
    };
    await this.setState((prevState) => ({
      ...prevState,
      module: {
        ...prevState.module,
        content: [...prevState.module.content, { title: '', type: 3, content: [] }],
      },
    }), () => newSubModule.html
      .push(<SubModule
        id={idSubModules}
        idModule={this.props.id}
        title={this.state.module.content[idSubModules].title}
        content={this.state.module.content[idSubModules].content}
        handleChange={this.handleChange}
        handleAddSequenceContent={this.props.handleAddSequenceContent}
      />));
    await this.setState((prevState) => ({
      ...prevState,
      subModules: [
        ...prevState.subModules,
        newSubModule,
      ],
      idSubModules: prevState.idSubModules + 1,
    }), () => this.props
      .handleAddSubModuleContent(this.state.module.content[idSubModules], this.props.id));
  }

  render() {
    const {
      id, title, handleChange,
    } = this.props;
    const {
      subModules,
    } = this.state;
    return (
      <div id={`moduleBox-${id}`} className="box mtmd">
        <div ref="collapsibles" id={`accordion${id}`}>
          <div className="root">
            <h3 className="title is-3 is-pulled-left">
              Module n°
              {id + 1}
            </h3>
            <a href={`#collapsible-section${id}`} data-action="collapse" className="is-pulled-right is-active">
              <i className="fas fa-chevron-up" />
            </a>
          </div>
          <div id={`collapsible-section${id}`} className="is-collapsible is-active" aria-expanded="true" data-parent={`accordion${id}`}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
              Nom du module n°
                  {id + 1}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <label htmlFor="title" className="label">
                    <input className="input" id={id} name="title" type="text" placeholder="Nom du module" defaultValue={title} onChange={(e) => handleChange(e)} />
                  </label>
                </div>
              </div>
              <footer className="card-footer">
                <button className="button is-success card-footer-item" id="addSubModule" onClick={() => this.addSubModule()} type="button">
                  <span className="icon is-small">
                    <i className="fas fa-plus" />
                  </span>
              &nbsp; &nbsp;Sous-Module
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div className="field">
          {
            subModules.map((node) => node.html)
          }
        </div>
      </div>
    );
  }
}

export default AddModule;
