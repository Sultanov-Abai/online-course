import './intro.scss';
import './stats.scss';


function IntroComponent() {


    return(
        <section className='intro'>
            <div className='intro_main'>Self-Paced Learning Courses Online</div>
            <div className='intro_sub'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima repudiandae cum iusto ratione sed et laborum, exercitationem ea tempore ipsa provident nisi, tempora maiores quas enim nemo, rerum mollitia!
            </div>
            <button className="intro_btn">Start courses</button>

            <div className="stats">
                <div className="stats_container">
                    <div className="stats_item">
                        <img src="src\assets\photo_2025-12-04_23-00-55.jpg" alt="Classroom icon" className="stats_item_img" />
                        <div className="stats_item_info">
                            <div className="stats_item_num">1400+</div>
                            <div className="stats_item_text">Online Courses</div>
                        </div>
                    </div>
                    <div className="stats_item">
                        <img src="src\assets\photo_2025-12-04_23-01-08.jpg" alt="Expert icon" className="stats_item_img" />
                        <div className="stats_item_info">
                            <div className="stats_item_num">1100+</div>
                            <div className="stats_item_text">Expert Instructors</div>
                        </div>
                    </div>
                    <div className="stats_item">
                        <img src="src\assets\photo_2025-12-04_23-01-09.jpg" alt="Uprising stats icon" className="stats_item_img" />
                        <div className="stats_item_info">
                            <div className="stats_item_num">800+</div>
                            <div className="stats_item_text">Succes Stories</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroComponent;  