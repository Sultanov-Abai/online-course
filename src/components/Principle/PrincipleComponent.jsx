import './principle.scss';

function PrincipleComponent () {


    return (
        <section className='principle'>
            <h2 className='principle_title'>How It Works</h2>
            <div className="principle_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. <p/> Rem distinctio ipsum deserunt cupiditate dolores?</div>
            <div className="principle_list">
                <div className="principle_item">
                    <img src="src\assets\image copy 3.png" alt="" className="principle_item_img" />
                    <div className="principle_item_name">Learn More Online</div>
                    <div className="principle_item_txt">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</div>
                </div>
                <div className="principle_item">
                    <img src="src\assets\image copy 2.png" alt="" className="principle_item_img" />
                    <div className="principle_item_name">Writing Notes</div>
                    <div className="principle_item_txt">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</div>
                </div>
                <div className="principle_item">
                    <img src="src\assets\image copy.png" alt="" className="principle_item_img" />
                    <div className="principle_item_name">Interactive Sessions</div>
                    <div className="principle_item_txt">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</div>
                </div>
                <div className="principle_item">
                    <img src="src\assets\image.png" alt="" className="principle_item_img" />
                    <div className="principle_item_name">Life Time Support</div>
                    <div className="principle_item_txt">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</div>
                </div>
            </div>
        </section>
    );
}

export default PrincipleComponent;