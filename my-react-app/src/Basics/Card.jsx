import profilepic from './assets/Profile.jpeg'

function Card(){
    return (
        <div className='card'>
            <img className='card-image' src={profilepic} alt="Image" />
            <h2 className='card-title'>Dev Garg</h2>
            <p className='card-text'> I am a Tutor at Unique system skills.</p>
        </div>
    );
}
export {Card};

