  import './Profile.css';
  import PropTypes from 'prop-types';

  const Profile = ({ username, tag,location, avatar, stats }) => {
    return Profile.map((card) => {
        return(
            <div key = {card.id}
            className='card container profile'
            style= {{width: '18rem'}} >
            
            <div class="description">
                <img
                       src={card.avatar}
                className='card-img-avatar'
                alt={card.title}/>

                {/* <p class="name">Petra Marica</p>
                <p class="tag">@pmarica</p>
                <p class="location">Salvador, Brasil</p> */}
            </div>
            <ul class="stats">
        
            </ul>
        </div>
        )
    });
  
   
}
export default Profile;


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };