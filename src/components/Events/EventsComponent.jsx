import './events.scss';

function EventsComponent () {


    return (


        <section className="events">
            <h2 className="events_title">Upcoming Events</h2>
            <div className="events_sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p/> Amet, vestibulum euismod nullam elementum.</div>
            <div className="events_container">
                <div className="events_item">
                    <div className="events_item_date blue"> 10 APR</div>
                    <img src="src\assets\events\image.png" alt="" className="evenets_item_img" />
                    <div className="events_item_name">TED Talks at UCF College of <p/> Education</div>
                    <div className="events_item_data">
                        <div className="events_item_time">
                            <img src="src\assets\clock.png" alt="" className="events_item_time_icon"/>
                            <div className="events_item_time_txt">4.00 pm - 8.00 pm</div>
                        </div>
                        <div className="events_item_place">
                            <img src="src\assets\geo.png" alt="" className="events_item_place_icon"/>
                            <div className="events_item_place_txt">Dhaka Bangladesh</div>
                        </div>
                    </div>
                </div>
                <div className="events_item">
                    <div className="events_item_date green"> 10 APR</div>
                    <img src="src/assets/events/image copy.png" alt="" className="evenets_item_img" />
                    <div className="events_item_name">Summer Course Starts From 21 <p/> June</div>
                    <div className="events_item_data">
                        <div className="events_item_time">
                            <img src="src\assets\clock.png" alt="" className="events_item_time_icon"/>
                            <div className="events_item_time_txt">4.00 pm - 8.00 pm</div>
                        </div>
                        <div className="events_item_place">
                            <img src="src\assets\geo.png" alt="" className="events_item_place_icon"/>
                            <div className="events_item_place_txt">Dhaka Bangladesh</div>
                        </div>
                    </div>
                </div>
                <div className="events_item">
                    <div className="events_item_date red"> 10 APR</div>
                    <img src="src\assets\events\image copy 2.png" alt="" className="evenets_item_img" />
                    <div className="events_item_name">Importance of Research Seminar <p/> It Business</div>
                    <div className="events_item_data">
                        <div className="events_item_time">
                            <img src="src\assets\clock.png" alt="" className="events_item_time_icon"/>
                            <div className="events_item_time_txt">4.00 pm - 8.00 pm</div>
                        </div>
                        <div className="events_item_place">
                            <img src="src\assets\geo.png" alt="" className="events_item_place_icon"/>
                            <div className="events_item_place_txt">Dhaka Bangladesh</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventsComponent;