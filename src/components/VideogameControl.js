import React from 'react';
import NewVideogameForm from './NewVideogameForm';
import VideogameList from './VideogameList';
import EditVideogameForm from './EditVideogameForm';
import VideogameDetail from './VideogameDetail';

class VideogameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainVideogameList: [],
      selectedVideogame: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedVideogame != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedVideogame: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingVideogame = (id) => {
    const newMainVideogameList = this.state.mainVideogameList.filter(videogame => videogame.id !== id);
    this.setState({
      mainVideogameList: newMainVideogameList,
      selectedVideogame: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingVideogameInList = (videogameToEdit) => {
    const editedMainVideogameList = this.state.mainVideogameList
      .filter(videogame => videogame.id !== this.state.selectedVideogame.id)
      .concat(videogameToEdit);
    this.setState({
      mainVideogameList: editedMainVideogameList,
      editing: false,
      selectedVideogame: null
    });
  }

  handleAddingNewVideogameToList = (newVideogame) => {
    const newMainVideogameList = this.state.mainVideogameList.concat(newVideogame);
    this.setState({mainVideogameList: newMainVideogameList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedVideogame = (id) => {
    const selectedVideogame = this.state.mainVideogameList.filter(videogame => videogame.id === id)[0];
    this.setState({selectedVideogame: selectedVideogame});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditVideogameForm videogame = {this.state.selectedVideogame} onEditVideogame = {this.handleEditingVideogameInList} />
      buttonText = "Return to Videogame List";
    } 
    else if (this.state.selectedVideogame != null) {
      currentlyVisibleState = <VideogameDetail 
      videogame={this.state.selectedVideogame} 
      onClickingDelete={this.handleDeletingVideogame}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Videogame List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewVideogameForm onNewVideogameCreation={this.handleAddingNewVideogameToList}/>;
      buttonText = "Return to Videogame List"; 
    } 
    else {
      currentlyVisibleState = <VideogameList onVideogameSelection={this.handleChangingSelectedVideogame} videogameList={this.state.mainVideogameList} />;
      buttonText = "Add Videogame"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default VideogameControl;

