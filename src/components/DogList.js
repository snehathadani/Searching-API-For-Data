import React from 'react';

const DogList = (props)=> {
    return (
        <div>
            {props.error !== ''?
             <p>{props.error}</p>
             : null
             }
             {props.loading ? (
            <h2> Hold on We're Loading Your Doggos!</h2>
              ) : null}
              {props.dogs.map(dog=> {
                  return (
                  <img src={dog}
                        key={dog}
                        alt={''}
                        className= "dog-image"
                        />
                  );
              })}
        </div>
    )
}

export default DogList;