import React from 'react';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import Sequence from './AddSequence';
import './Program.scss';
import '../layout/Layout.scss';

class AddSubModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequences: [],
      subModule: {
        title: '',
        type: 3,
        content: [],
      },
      idSequence: 0,
    };
    this.addSequence = this.addSequence.bind(this);
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
      const newItems = [...prevState.subModule.content];
      newItems[id].title = value;
      return { subModule: { ...prevState.subModule, content: newItems } };
    });
  };

  addSequence = async () => {
    const { idSequence } = this.state;
    const newSequence = {
      id: idSequence,
      html: [],
    };
    await this.setState((prevState) => ({
      ...prevState,
      subModule: {
        ...prevState.subModule,
        content: [...prevState.subModule.content, { title: '', type: 4, content: [] }],
      },
    }), () => newSequence.html
      .push(<Sequence
        id={idSequence}
        title={this.state.subModule.content[idSequence].title}
        content={this.state.subModule.content[idSequence].content}
        handleChange={this.handleChange}
      />));
    await this.setState((prevState) => ({
      ...prevState,
      sequences: [
        ...prevState.sequences,
        newSequence,
      ],
      idSequence: prevState.idSequence + 1,
    }), () => this.props
      .handleAddSequenceContent(this.state.subModule.content[idSequence],
        this.props.id, this.props.idModule));
  };

  render() {
    const {
      id, title, handleChange,
    } = this.props;
    const {
      sequences,
    } = this.state;
    return (
      <div id={`subModuleBox-${id}`} className="box mtmd">
        <div ref="collapsibles" id={`accordionSub${id}`}>
          <div className="root">
            <h4 className="title is-4 is-pulled-left">
              Sous-Module n°
              {id + 1}
            </h4>
            <a href={`#collapsible-sectionSub${id}`} data-action="collapse" className="is-pulled-right">
              <i className="fas fa-chevron-up" />
            </a>
          </div>
          <div id={`collapsible-sectionSub${id}`} className="is-collapsible" data-parent={`accordionSub${id}`}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
              Nom du sous-module n°
                  {id + 1}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <label htmlFor="title" className="label">
                    <input className="input" id={id} name="title" type="text" placeholder="Nom du sous-module" defaultValue={title} onChange={(e) => handleChange(e)} />
                  </label>
                </div>
              </div>
              <footer className="card-footer">
                <button className="button is-success card-footer-item" id="addSequence" onClick={() => this.addSequence()} type="button">
                  <span
                    className="icon is-small"
                  >
                    <i className="fas fa-plus" />
                  </span>
              &nbsp; &nbsp;Séquence
                </button>
              </footer>
            </div>
            <div className="field">
              {
                sequences.map((node) => node.html)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSubModule;
