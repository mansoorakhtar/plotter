import React, { Component } from 'react';
import './App.css';
import Circle, { validateCirclePlottingParams } from './components/Shapes/Circle/Circle';
import Rectangle, { validateRectangePlottingParams } from './components/Shapes/Rectangle/Rectangle';
import Polygon, { validatePolygonPlottingParams } from './components/Shapes/Polygon/Polygon';
import Line, { validateLinePlottingParams } from './components/Shapes/Line/Line';
import Modal from './components/Modal/Modal';


class App extends Component {

  
  /**
   * constructor function
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      plotter: '',
      shapes: [],
      inValidLines: [],
      showModal: false
    }
  }

  
  


  /**
   * on plotter change
   * @param Event event 
   */
  onPlotterChange = (event) => {
    this.setState({
      plotter: event.target.value
    })
  }

  
  /**
   * on draw shape
   */
  onDrawShapes = () => {
    let { plotter } = this.state;
    
    this.setState({
      inValidLines: [],
      shapes: []
    })

    if (plotter.trim() === '') {
      this.setState({
        shapes: [],
        showModal: true
      })
      return;
    }

    let plottingShapes = plotter.split(/\r*\n/);
    let shapes = [];
    let invalidLines = [];
    plottingShapes.forEach((plottingShape, plottingShapeIndex) => {
      let hasError = false;
      if (plottingShape.toLocaleLowerCase().startsWith('c')) {
        // Circle
        if (validateCirclePlottingParams(plottingShape)) {
          shapes.push(
            <Circle params={plottingShape} />
          )
        } else {
          hasError = true; 
        }

      } else if (plottingShape.toLocaleLowerCase().startsWith('r')) {
        if (validateRectangePlottingParams(plottingShape)) {
          shapes.push(
            <Rectangle params={plottingShape} />
          )
        } else {
          hasError = true;
        }
      } else if (plottingShape.toLocaleLowerCase().startsWith('p')) {
        if (validatePolygonPlottingParams(plottingShape)) {
          shapes.push(
            <Polygon params={plottingShape} />
          )
        } else {
          hasError = true;
        }
      } else if (plottingShape.toLocaleLowerCase().startsWith('l')) {
        if (validateLinePlottingParams(plottingShape)) {
          shapes.push(
            <Line params={plottingShape} />
          )
        } else {
          hasError = true;
        }
      } else {
        hasError = true;
      }

      if (hasError) {
        invalidLines.push(plottingShapeIndex+1);
      }
    });

    if (invalidLines.length) {
      this.setState({
        showModal: true,
        inValidLines: [...invalidLines]
      });
    } else {
      this.setState({shapes});
    }

    
  }

  /**
   * close modal
   * @param Event event 
   */
  onCloseModal = (event) => {
    this.setState({
      showModal: false
    })
  }

  render() {

    return (
      <div className="App">

        
        <div className="form-group">
          <label></label>
          <textarea 
            className="form-control" 
            rows="5" 
            spellCheck="false"
            value={this.state.plotter} 
            onChange={this.onPlotterChange}
            ></textarea>
        </div>

        {this.state.showModal ? <Modal inValidLines={this.state.inValidLines} onCloseModal={this.onCloseModal}/> : null}
        

        <div className="form-group">
          <div className="col-sm-6 offset-sm-3">
            <button className="btn btn-primary btn-block" onClick={this.onDrawShapes}>Draw Shapes</button>  
          </div>
        </div>

        <div className="container">
          {this.state.shapes.map((shape, index) => {
            return (
            <div className="shape-card" key={index}>  
              <svg width="250" height="250">
                {shape}
              </svg>
            </div>  
            )  
          })}
        </div>


      </div>
    );
  }
}

export default App;
