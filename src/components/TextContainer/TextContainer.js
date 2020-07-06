import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            {
                users 
                 ?
                 (
                    <div className="activeContainer">
                        <h2>Active Now 👍</h2>
                        <h3>
                            {
                                users.map( ( {name} ) => (
                                    <div key={name} className="activeItem">
                                        <img src={onlineIcon} alt="Online Icon"/>
                                        {name}
                                    </div>
                                ) )
                            }
                        </h3>
                    </div>
                 )
                 :null
            }
        </div>
    );
};

export default TextContainer;