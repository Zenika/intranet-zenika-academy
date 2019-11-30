// import DatePicker from "./datePicker";
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Module from './AddModule';
import '../layout/Layout.scss';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

class ProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [],
      program: {
        title: '',
        type: 1,
        content: [],
      },
      idModules: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createProgram = (e) => {
    e.preventDefault();
    const { program } = this.state;
    Axios.post('http://localhost:4000/api/programs', program).then((response) => {
      console.log(response);
    });
  };

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

  handleChange = (e) => {
    const { value, id } = e.target;
    this.setState((prevState) => {
      const newItems = [...prevState.program.content];
      newItems[id].title = value;
      return { program: { ...prevState.program, content: newItems } };
    });
  };

  handleAddSubModuleContent = (value, idModule) => {
    this.setState((prevState) => {
      const newItems = [...prevState.program.content];
      newItems[idModule].content.push(value);
      return { program: { ...prevState.program, content: newItems } };
    });
  };

    handleAddSequenceContent = (value, idSubModule, idModule) => {
      this.setState((prevState) => {
        const moduleContent = [...prevState.program.content];
        moduleContent[idModule].content[idSubModule].content.push(value);
        return { program: { ...prevState.program, content: moduleContent } };
      });
    };

     addModule = async () => {
       const { idModules } = this.state;
       const newModule = {
         id: idModules,
         html: [],
       };
       await this.setState((prevState) => ({
         ...prevState,
         program: {
           ...prevState.program,
           content: [...prevState.program.content, { title: '', type: 2, content: [] }],
         },
       }), () => newModule.html
         .push(<Module
           id={idModules}
           title={this.state.program.content[idModules].title}
           content={this.state.program.content[idModules].content}
           handleChange={this.handleChange}
           handleAddSubModuleContent={this.handleAddSubModuleContent}
           handleAddSequenceContent={this.handleAddSequenceContent}
         />));
       await this.setState((prevState) => ({
         ...prevState,
         modules: [
           ...prevState.modules,
           newModule,
         ],
         idModules: prevState.idModules + 1,
       }));
     };

     render() {
       const { id } = this.props.match.params;
       const {
         program, modules,
       } = this.state;

       let titleForm;
       let buttonForm;

       if (id !== undefined) {
         titleForm = (
           <h1 className="title is-4 is-spaced">Edition d'un programme</h1>
         );
         buttonForm = (
           <section className="field is-grouped">
             <section className="control">
               <Link to="/admin/program/1/edit">
                 <button className="button is-link">Editer</button>
               </Link>
             </section>
             <section className="control">
               <Link to="/admin/program">
                 <button className="button is-danger">Supprimer</button>
               </Link>
             </section>
           </section>
         );
       } else {
         titleForm = (
           <h1 className="title is-4 is-spaced">Création d'un programme</h1>
         );
         buttonForm = (
           <section className="field is-grouped">
             <section className="control">
               <button type="submit" onClick={this.createProgram} className="button is-link">Créer</button>
             </section>
             <section className="control">
               <Link to="/admin/program">
                 <button className="button is-danger">Annuler</button>
               </Link>
             </section>
           </section>
         );
       }

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
               </footer>
             </div>

             <div className="field">
               {
                modules.map((node) => node.html)
               }
             </div>
             {buttonForm}
           </form>
         </article>
       );
     }
}

export default ProgramForm;
