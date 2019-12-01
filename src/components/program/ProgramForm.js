import React from 'react';
import { Link } from 'react-router-dom';
import Module from './AddModule';
import './Program.scss';
import '../layout/Layout.scss';

class ProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [],
      program: props.program,
      idModules: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { program } = this.state;
    const createModules = program.content.map((node, i) => ({
      id: i,
      key: Math.random()
        .toString(36)
        .substring(2, 15) + Math.random()
        .toString(36)
        .substring(2, 15),
    }));
    this.setState((prev) => ({
      prev,
      modules: createModules,
      idModules: createModules.length,
    }));
  }

  handleChangeTitleProgram = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      program: {
        ...prevState.program,
        title: value,
      },
    }
    ));
  };

  handleChange = async (e) => {
    const { value, id } = e.target;
    await this.setState((prevState) => {
      const newItems = [...prevState.program.content];
      newItems[id].title = value;
      return {
        program: {
          ...prevState.program,
          content: newItems,
        },
      };
    });
  };

  handleAddSubModuleContent = async (value, idModule, id = 0) => {
    if (value === 'delete') {
      await this.setState((prevState) => {
        const newItems = [...prevState.program.content];
        newItems[idModule].content.splice(id, 1);
        return {
          program: {
            ...prevState.program,
            content: newItems,
          },
        };
      });
      return true;
    }
    await this.setState((prevState) => {
      const newItems = [...prevState.program.content];
      newItems[idModule].content.push(value);
      return {
        program: {
          ...prevState.program,
          content: newItems,
        },
      };
    });
    return true;
  };

  handleAddSequenceContent = async (value, idSubModule, idModule, id = 0) => {
    if (value === 'delete') {
      await this.setState((prevState) => {
        const moduleContent = [...prevState.program.content];
        moduleContent[idModule].content[idSubModule].content
          .splice(id, 1);
        return {
          program: {
            ...prevState.program,
            content: moduleContent,
          },
        };
      });
      return true;
    }
    await this.setState((prevState) => {
      const moduleContent = [...prevState.program.content];
      moduleContent[idModule].content[idSubModule].content.push(value);
      return {
        program: {
          ...prevState.program,
          content: moduleContent,
        },
      };
    });
    return true;
  };

  cleanProgram = () => {
    this.setState(() => ({
      modules: [],
      program: {
        title: '',
        type: 1,
        content: [],
      },
      idModules: 0,
    }));
  };

  addModule = async () => {
    const { idModules } = this.state;
    const key = Math.random()
      .toString(36)
      .substring(2, 15) + Math.random()
      .toString(36)
      .substring(2, 15);
    const newModule = {
      id: idModules,
      key,
    };
    await this.setState((prevState) => ({
      ...prevState,
      program: {
        ...prevState.program,
        content: [...prevState.program.content, {
          title: '',
          type: 2,
          content: [],
        }],
      },
    }));
    await this.setState((prevState) => ({
      ...prevState,
      modules: [
        ...prevState.modules,
        newModule,
      ],
      idModules: prevState.idModules + 1,
    }), () => {
      this.forceUpdate();
    });
  };

  deleteModule = async (key, id) => {
    await this.setState((prevState) => {
      const newId = prevState.idModules > 0 ? prevState.idModules - 1 : 0;
      const newItems = [...prevState.program.content];
      newItems.splice(id, 1);
      const newModuleArray = prevState.modules.filter((node) => node.key !== key);
      newModuleArray.forEach((node, index) => newModuleArray[index].id = index);
      return {
        idModules: newId,
        modules: newModuleArray,
        program:
          { ...prevState.program, content: newItems },
      };
    }, () => {
      this.forceUpdate();
    });
  };

  render() {
    const {
      program, modules,
    } = this.state;
    const {
      handleChange,
    } = this.props;
    const titleForm = (
      <h1 className="title is-1 is-spaced">Création d'un programme</h1>
    );
    const buttonForm = (
      <section className="field is-grouped">
        <section className="control">
          <button className="button is-success" value={1} onClick={(e) => handleChange(e, program)} type="button">Valider</button>
        </section>
        <section className="control">
          <Link to="/admin/program">
            <button className="button is-danger" type="button">Annuler</button>
          </Link>
        </section>
      </section>
    );

    return (
      <article className="section box">
        {titleForm}
        <form>
          <h2 className="title is-2">
               Programme&nbsp;
            {program.title}
          </h2>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                       Nom du programme
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <label htmlFor="title" className="label">
                  <input className="input" name="title" type="text" placeholder="Nom du programme" value={program.title} onChange={(e) => this.handleChangeTitleProgram(e)} />
                </label>
              </div>
            </div>
            <footer className="card-footer">
              <button className="button is-success card-footer-item" id="addModule" onClick={() => this.addModule()} type="button">
                <span
                  className="icon is-small"
                >
                  <i className="fas fa-plus" />
                </span>
                    &nbsp; &nbsp;Module
              </button>
              <button className="button is-danger card-footer-item" id="addModule" onClick={() => this.cleanProgram()} type="reset">
                <span
                  className="icon is-small"
                >
                  <i className="fas fa-undo" />
                    &nbsp; &nbsp;Vider
                </span>
              </button>
            </footer>
          </div>

          <div className="field">
            {
              modules.map((node) => (
                <Module
                  id={node.id}
                  key={node.key}
                  deleteIt={node.key}
                  title={this.state.program.content[node.id].title}
                  content={this.state.program.content[node.id].content}
                  handleChange={this.handleChange}
                  handleAddSubModuleContent={this.handleAddSubModuleContent}
                  handleAddSequenceContent={this.handleAddSequenceContent}
                  deleteModule={this.deleteModule}
                />
              ))
            }
          </div>

          {buttonForm}
        </form>
      </article>
    );
  }
}

export default ProgramForm;
