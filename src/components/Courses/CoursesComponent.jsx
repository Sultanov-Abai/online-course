import './courses.scss';

function CoursesComponent () {
    
    
    return (
        <section className='courses'>
            <h2 className='courses_title'>Our All The Online Courses</h2>
            <div className="courses_sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in <p/> leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="courses_container">
                <div className="courses_item">
                    <img src="src\assets\courses\image.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Development</div>
                        <div className="courses_item_price">$150</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit. </div>
                </div>
                <div className="courses_item">
                    <img src="src\assets\courses\image copy 2.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Android Developer</div>
                        <div className="courses_item_price">$130</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</div>
                </div>
                <div className="courses_item">
                    <img src="src\assets\courses\image copy.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Java Script Course</div>
                        <div className="courses_item_price">$140</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.s</div>
                </div>
                <div className="courses_item">
                    <img src="src\assets\courses\image copy 3.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Android Developer</div>
                        <div className="courses_item_price">$120</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</div>
                </div>
                <div className="courses_item">
                    <img src="src\assets\courses\image copy 4.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Java Script Course</div>
                        <div className="courses_item_price">$120</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</div>
                </div>
                <div className="courses_item">
                    <img src="src\assets\courses\image copy 5.png" alt="" className="courses_item_img" />
                    <div className="courses_item_head">
                        <div className="courses_item_name">Basic Marketing</div>
                        <div className="courses_item_price">$100</div>
                    </div>
                    <div className="courses_item_txt">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</div>
                </div>
            </div>
            <button className="courses_btn">View All Course</button>
        </section>
    );
}

export default CoursesComponent;