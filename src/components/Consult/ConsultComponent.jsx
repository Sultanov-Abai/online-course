import './consult.scss';

function ConsultComponent () {

    return(
        <section className="consult">
            <div className='consult_info'>
                <h1 className="consult_info_title">Find Your Course That Makes Bright Future</h1>
                <div className="consult_info_txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum illum rerum quisquam modi quam voluptatibus ab in nam nulla neque! Sint autem accusantium, debitis quas consectetur repudiandae molestiae? Fugit natus deserunt recusandae. Accusamus, esse facere autem neque ratione unde commodi reiciendis animi accusantium illo nemo quis quos ipsa. Commodi, illum.</div>
                <h3 className="consult_info_foot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio deleniti ab rerum dolor.</h3>
                <button className="consult_info_btn">Learn More</button>
            </div>
            <div className="consult_video">
                <img src="src\assets\photo_2025-09-30_12-09-17.jpg" alt="" className='consult_video_img'/>
            </div>
        </section>
    );
}

export default ConsultComponent;