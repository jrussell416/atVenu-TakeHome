//import usestate and useRef hooks
import React, { useRef, useState } from 'react';
//ported Bootstrap componenta
import { Overlay, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import props into function
//initializing states with current state and function that updates state

function More(props) {
    //state fpr "more" button
  const [show, setShow] = useState(false);
  const target = useRef(null);

    //state for displaying text over poster
    const [showText, setShowText] = useState(false)
    const targetText = useRef(null)

  //poster price and desc
  const [posterDesc, setPosterDesc] = useState("")
  const [posterPrice, setPosterPrice] = useState("")

    function updatePosterDesc() {
        return ({posterDesc})
    }

    function updatePosterPrice() {
        return ({posterPrice})
    }

  return (
    <div>

{/* import image url and react bootstrap overlay component */}
<img src="https://ih1.redbubble.net/image.1105130987.4865/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" alt="knitting-poster" height="200px" ref={targetText} onMouseOver={() => setShowText(!showText)} />
<Overlay target={targetText.current} show={showText} placement="bottom">
        {(props) => (
          <Tooltip  {...props}>
            {posterDesc}
          </Tooltip>
        )}
      </Overlay>

      {/* use props to dynamically render poster price */}

            <p>Poster Price ${props.price}</p>

{/* React bootstrap button to display menu popup options to update price and add a text desciption for poster */}

      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        More
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip  {...props}>
              <input value={posterDesc} onChange={e => setPosterDesc(e.target.value)} type="text" placeholder="add poster description" />
              <button onClick={updatePosterDesc}>Submit</button>
              <input value={posterPrice} onChange={e => setPosterPrice(e.target.value)} type="text" placeholder="update poster price" />
              <button onClick={updatePosterPrice}>Submit</button>

          </Tooltip>
        )}
      </Overlay>
    </div >
  );
}

export default More;