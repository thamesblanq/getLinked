import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState } from "react";
const baseUrl = 'https://backend.getlinked.ai';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        text: '',
    });

    const canSave = formData.email !== '' && formData.name !== '' && formData.text !== '';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSend = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": formData.email,
            "phone_number": "0903322445533",
            "first_name": formData.name,
            "message": formData.text,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        try {
            const response = await fetch(`${baseUrl}/hackathon/contact-form`, requestOptions);
            setFormData({ email: '', name: '', text: '' }); // Reset the form after a successful submission
            const result = await response.text();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="mt-[13vh] md:mt-[10vh] lg:mt-[13vh]">
            <div className="flex flex-col md:flex-row justify-around items-center py-8 px-4 gap-y-8 overflow-hidden">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-xl font-clash text-span">Get in touch</h1>
                    <p className="text-sm font-montserrat text-white">Contact Information</p>
                    <p className="text-sm font-montserrat text-white">27, Alara Street Yaba 100012 Lagos State</p>
                    <p className="text-sm font-montserrat text-white">Call Us: 07046079184</p>
                    <p className="text-sm font-montserrat text-white">We are open from Monday-Friday 08:00am - 05:00pm</p>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-span font-semibold">Share on</h1>
                        <div className="flex items-start gap-2">
                            <FaTwitter className="text-white hover:scale-125 ease-in-out duration-500 transition-all" />
                            <FaInstagram className="text-white hover:scale-125 ease-in-out duration-500 transition-all" />
                            <FaLinkedinIn className="text-white hover:scale-125 ease-in-out duration-500 transition-all" />
                            <FaFacebookF className="text-white hover:scale-125 ease-in-out duration-500 transition-all" />
                        </div>
                    </div>
                </div>

                <div className="px-8 py-8 bg-black/50 flex flex-col gap-4 border border-gray-500 rounded-lg">
                    <h1 className="font-bold text-span text-xl">Questions or need assistance? Let us know about it</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="First name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-lg bg-black/50 border border-gray-500 text-white"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-lg bg-black/50 border border-gray-500 text-white"
                        />
                        <textarea
                            id="textBody"
                            name="text"
                            placeholder="Message"
                            required
                            value={formData.text}
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-lg bg-black/50 border border-gray-500 text-white"
                        />
                        <button
                            type="submit"
                            className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'
                            onClick={handleSend}
                            disabled={!canSave}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
