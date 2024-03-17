import "./services.scss"
import {motion} from "framer-motion"

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className ="textContainer">
        <p>
          I work with technology to create 
          <br /> a change in people's life
        </p>
        <hr />
      </motion.div>
      <motion.div className ="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT I'M DOING NOW..</button>
        </div>
      </motion.div>
      <motion.div className ="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            I have worked closely with Amazon AWS's Enterprise customers to solve their Production issues as an Escalations Engineer.  
            I have worked on lot of internal projects and developed tools for Internal use at AWS CS and AWS PS. 
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            I have worked closely with Amazon AWS's Enterprise customers to solve their Production issues as an Escalations Engineer.  
            I have worked on lot of internal projects and developed tools for Internal use at AWS CS and AWS PS. 
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            I have worked closely with Amazon AWS's Enterprise customers to solve their Production issues as an Escalations Engineer.  
            I have worked on lot of internal projects and developed tools for Internal use at AWS CS and AWS PS. 
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            I have worked closely with Amazon AWS's Enterprise customers to solve their Production issues as an Escalations Engineer.  
            I have worked on lot of internal projects and developed tools for Internal use at AWS CS and AWS PS. 
          </p>
          <button>Go</button>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Services