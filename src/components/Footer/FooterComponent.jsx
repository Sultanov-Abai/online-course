import "./footer.scss";

function FooterComponent() {


    return (
        <footer className="footer">
            <div className="footer_info">
                <div className="footer_info_edu">
                    <div className="footer_info_edu_title">Education</div>
                    <div className="footer_info_edu_sub">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.</div>
                </div>
                <div className="footer_info_follow">
                    <div className="footer_info_follow_title">Follow Us</div>
                    <ul className="footer_info_follow_icons">
                        <li className="footer_info_follow_item"><img src="src\assets\socials\image.png" alt="" /></li>
                        <li className="footer_info_follow_item"><img src="src\assets\socials\image copy.png" alt="" /></li>
                        <li className="footer_info_follow_item"><img src="src\assets\socials\image copy 2.png" alt="" /></li>
                        <li className="footer_info_follow_item"><img src="src\assets\socials\image copy 3.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="footer_links">
                <div className="footer_links_title">Feature Links</div>
                <ul className="footer_links_list">
                    <li className="footer_links_item">About Us</li>
                    <li className="footer_links_item">Graduation</li>
                    <li className="footer_links_item">Scholarship</li>
                    <li className="footer_links_item">Admissions</li>
                    <li className="footer_links_item">International</li>
                    <li className="footer_links_item">Events</li>
                </ul>
            </div>
            <div className="footer_support">
                <div className="footer_support_title">Support</div>
                <ul className="footer_support_list">
                    <li className="footer_support_item">Language</li>
                    <li className="footer_support_item">WordPress</li>
                    <li className="footer_support_item">Privacy</li>
                    <li className="footer_support_item">FAQs</li>
                    <li className="footer_support_item">Support</li>
                </ul>
            </div>
            <div className="footer_contact">
                <div className="footer_contact_title">Contact Us</div>
                <div className="footer_contact_sub">230,Mirpur Area, Mirpur 10, Dhaka,Bangladesh</div>
                <div className="footer_contact_mobile">
                    <img src="src\assets\socials\image copy 6.png" alt="" className="footer_contact_icon" />
                    <a href="+017 4845 7269" className="footer_contact_num">+017 4845 7269</a>
                </div>
                <div className="footer_contact_mail">
                    <img src="src\assets\socials\image copy 9.png" alt="" className="footer_contact_icon" />
                    <a href="info@gmail.com" className="footer_contact_address">info@gmail.com</a>
                </div>
                <div className="footer_contact_web">
                    <img src="src\assets\socials\image copy 8.png" alt="" className="footer_contact_icon" />
                    <a href="www.yourdomain.com" className="footer_contact_link">www.yourdomain.com</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;