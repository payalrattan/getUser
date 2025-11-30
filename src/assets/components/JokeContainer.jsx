import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import getJoke from '../../api/getJoke'
import Loading from './Loading'
import GetJoke from './GetJoke'

const JokeContainer = () => {
  const[joke,setJoke]=useState(null);
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(false)
 const[id,setId] = useState(0)
  useEffect(()=>{
    const fetchJoke = async ()=>{
      try{
        const joke = await getJoke();
        setJoke(joke)
        console.log(joke);
        
      }
      catch(err)
      {
        console.log(err);
        setError(true)
      }
      finally{
        setLoading(false)
      }
    }
    fetchJoke();
  },[id])
  const clickHandler = ()=>{
    setId((prevId)=>prevId+1)
  }
  return (
    <div>
      <div>
        <button onClick={clickHandler}>Get a joke</button>
      </div>
    {loading && <Loading/>}
   {joke && <GetJoke joke ={joke}/>}
   {error && <div>No joke exist</div>}

   </div>
  );
};

JokeContainer.propTypes = {}

export default JokeContainer