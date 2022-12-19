// import React, { Component } from 'react'
import BarChart from './barChart'
import Tooltip from './tooltip'
import LineChart from './lineChart';
import PieChart from './pieChart';


// export class Container extends Component {

//   constructor(props) {
//     super(props);
//     const tooltipStatus = {opacity: 0}
//     this.state = {
//         tooltipStatus:'', 
//         type:''
//     }
//   }

//   handleTooltipFire(tooltipStatus) {
//     console.log(tooltipStatus)
//     this.setState({tooltipStatus})
//   }
//   render() {
//     const {opacity, top, left, text} = this.state.tooltipStatus
//     return (
//         <div className="container">
//             <p class="h2"> Bar Chart 
//         <BarChart onTooltipFire={this.handleTooltipFire.bind(this)} type='bar' />
//         </p> 
//          <p class="h2">Line Chart    </p>
//         <LineChart onTooltipFire={this.handleTooltipFire.bind(this)} />
       
        
//         <p class="h2">Pie Chart   
//         <PieChart onTooltipFire={this.handleTooltipFire.bind(this)} type='pie' />
//         </p>
//         <p class="h2">DoughNut Chart   
//         <PieChart onTooltipFire={this.handleTooltipFire.bind(this)}  type='doughnut'/>
//         </p>
        

//         <p class="h2">Scatter Chart   
//         <OtherChart onTooltipFire={this.handleTooltipFire.bind(this)}  type='scatter'/>
//         </p>

//         <p class="h2">Radar Chart   
//         <OtherChart onTooltipFire={this.handleTooltipFire.bind(this)}  type='radar'/>
//         </p>

//         <p class="h2">Area Chart   
//         <OtherChart onTooltipFire={this.handleTooltipFire.bind(this)}  type='area'/>
//         </p>
        
//         <Tooltip opacity={opacity} top={top} left={left}>{text}</Tooltip>
       
//       </div>
//     )
//   }
// }


import React,{useState} from 'react';
import OtherChart from './otherChart';


export  function ContainerComponent() {
 

  const [toolTipStatus,setlToolTipStatus]= useState({opacity:0});

  const {opacity, top, left, text} = toolTipStatus
  const [type,setType]=useState();

  const handleTooltipFire=()=>{
    setlToolTipStatus(true);
  }

  return (
     

         <div className="container">
             <p class="h2"> Bar Chart 
         <BarChart onTooltipFire={handleTooltipFire} type='bar' />
        </p> 
          <p class="h2">Line Chart    </p>
         <LineChart onTooltipFire={handleTooltipFire} />
       
        
        <p class="h2">Pie Chart   
        <PieChart onTooltipFire={handleTooltipFire} type='pie' />
         </p>
        <p class="h2">DoughNut Chart   
         <PieChart onTooltipFire={handleTooltipFire}  type='doughnut'/>
         </p>
        

         <p class="h2">Scatter Chart   
         <OtherChart onTooltipFire={handleTooltipFire}  type='scatter'/>
         </p>

         <p class="h2">Radar Chart   
         <OtherChart onTooltipFire={handleTooltipFire}  type='radar'/>
         </p>

      <OtherChart onToolTipFire={handleTooltipFire} type="area"/>

      <Tooltip opacity={opacity} top={top} left={left}>{text}</Tooltip>
      
    </div>
  )
}
