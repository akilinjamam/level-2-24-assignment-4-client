import keyboardPic from '../../images/support.jpg'
import about from './Contact.module.css';
const Contact = () => {
    return (
        <div className={`${about.main} w-full h-[500px] bg-purple-50 rounded-lg my-6 lg:flex lg:items-center lg:justify-between p-3`}>
        <section className="lg:w-[43%] sm:w-full xsm:w-full h-full bg-blue-50 flex items-center justify-center">
            <img style={{borderRadius:'10px'}} width={450} src={keyboardPic} alt="" />
        </section>
        <section className="lg:w-[48%] sm:w-full xsm:w-full h-full">
            <p className="text-gray-700 text-3xl font-bold my-6">Contact Us </p>
            <hr />
            <p className="text-gray-700 my-3">
            KeyCraft Elit prides itself on providing exceptional customer support to ensure a seamless experience for its users. The company offers a comprehensive support system, including a dedicated helpdesk with knowledgeable representatives available via phone, email, and live chat. Customers can access a robust online knowledge base and community forums for troubleshooting and peer support. KeyCraft Elit also provides a generous warranty and return policy, ensuring satisfaction with every purchase. The support team is committed to quick response times and effective solutions, making customer satisfaction their top priority.
            </p>
        </section>
        
    </div>
    );
};

export default Contact;