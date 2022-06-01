import React, { Component } from 'react'

export default class Project extends Component {
    state = {
        showInfo : false
    }
    handleInfo = () => {
        this.setState(
            {
                showInfo: !this.state.showInfo
            }
        )
    }



    render() {
        let {name,languagesIcons,picture,source,info}= this.props.item
      
    return (
        <div className="project">
            <div className="icons">
                {languagesIcons.map(icon => 
                    <i className={icon} key={icon}></i>
                )}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt='' />
            <span  className="infos" >
                {info}
            </span>
            {this.state.showInfo && (
                <div className="showInfos">
                    <div className="infosContent">
                        <div className="head">
                            <h2>{name}</h2>
                            <div className="sourceCode">
                                <a href={source} rel='noopener noreferrer' className='button' target="_blank">Code source</a>
                            </div>
                        </div>
                        <p className="text">
                            {info}
                        </p>
                        <div className="button return" onClick={this.handleInfo}> Retouner sur la page

                        </div>
                    </div>
                    <p className="text">
                
                    </p>
                </div>
            )}
            < i style={{fontSize: "2rem"}} onClick={this.handleInfo} className='fas fa-plus-circle'></i>

            
        </div>
    
    )
  }
}
