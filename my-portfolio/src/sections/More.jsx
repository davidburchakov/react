import 'css/more.css';

export default function More(){
    return(
        <section className="section more">
            <div className='video-container'>
                <video src={process.env.PUBLIC_URL + '/flow-1.mp4'}></video>
            </div>
        </section>
    );
}