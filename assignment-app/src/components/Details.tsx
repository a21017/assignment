import React from 'react';
import './Details.css';

const Details:React.FC<{details:{email:string,name:{title:string,first:string,last:string}}}> = (props) => {

    const {title,first,last} = props.details.name;
    const fullname = `${title} ${first} ${last}`;

  return (
    <div className='main'>
        <div className='fullname'>
        <label htmlFor='name' style={{paddingRight:'10px'}}>Name:</label>
        <span className='name'>{fullname} </span>
        </div>
        <div className='email'>
        <label htmlFor='emailaddress' style={{paddingRight:'10px'}}>Email:</label>
        <span className='emailaddress'>{props.details.email}</span>
        </div>
    </div>
  )
}

export default Details;