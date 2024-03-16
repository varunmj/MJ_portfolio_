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
          <Button>WHAT I'M DOING NOW..</Button>
        </div>
      </motion.div>
      <motion.div className ="listContainer">
        <div className="box"></div>
      </motion.div>

    </motion.div>
  )
}

export default Services