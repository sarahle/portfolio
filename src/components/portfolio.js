import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state={
    modal:{}
  }

  closeModal = () => {
    this.setState({ modal:{} })
  }

  render() {
    const {modal} = this.state
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div key={i} className="columns portfolio-item">
                  <div className="item-wrap">
                    <div onClick={()=> this.setState({modal:item})} style={{cursor:'pointer'}}>
                      <img src={`${item.imgurl}`} className="item-img" alt="img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal 
        visible={modal && modal.title} 
        effect="fadeInUp" 
        onClickAway={() => this.closeModal()}>
        <section style={{padding:40,textAlign:'center'}}>
          <h1>{modal.title}</h1>
          <p style={{fontSize:12,lineHeight:'30px',maxWidth:400}}>{modal.fullDescription}</p>
          <img src={modal.imgurl} alt="" style={{height:200,display:'block',margin:'10px auto'}} />
          <a href={modal.githubLink} target="_blank" rel="noopener noreferrer">
            <span style={{color:"#7868E6", textTransform:"uppercase", letterSpacing:"2px"}}>view more</span>
          </a>
        </section>
      </Modal>

  </section>);
  }
}
