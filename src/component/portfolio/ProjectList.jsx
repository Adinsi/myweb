import React, { Component } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Project from './Project'

export default class ProjectList extends Component {
    state = {
        projects: portfolioData
    }

    
    render() {
       let {projects} = this.state
    return (
      <div className='portfolioContent'>
            <ul className="radioDisplay">
                <p style={{ textAlign: "center", fontSize:"1.5rem",color:"blue"}}>Liste des projets </p>
            </ul>

            <div className="projects">
                {
                    projects.map(item => {
                        return (
                            <Project
                                key={item.id}
                               item={item} 
                            />
                        )
                    })
                }
            </div>
    
      </div>
    )
  }
}
