import register from '../images/register.png';
import smallman from '../images/smallman.png';
import smallwoman from '../images/smallwoman.png';
import purplelens from '../images/Purple-Lens-Flare-PNG.png';
import Modal from './Modal';
import { useState } from 'react';

const baseUrl = 'https://backend.getlinked.ai';

const Register = () => {

    const initialFormData = {
        email: '',
        teamName: '',
        phone: '',
        topic: '',
        category: 0,
        groupSize: 0,
        agree: false,
    };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  const canSave = Object.values(formData).every((value) => value !== '') && formData.agree !== false;

  const handleReg = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        "email": formData.email,
        "phone_number": formData.phone,
        "team_name": formData.teamName,
        "group_size": formData.groupSize,
        "project_topic": formData.topic,
        "category": formData.category,
        "privacy_poclicy_accepted": formData.agree,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch(`${baseUrl}/hackathon/registration`, requestOptions);
      const result = await response.text();
        // Reset the form after a successful submission
        if (response.status === 201) {
            setFormData(initialFormData);
            setShowModal(true);
        }else {
            setFormData(formData);
            setShowModal(false);
        }
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
    {showModal && <Modal isOpen={showModal} onClose={() => setShowModal(false)} />}

    <section className='mt-[13vh] md:mt-[10vh] lg:mt-[13vh]'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-8 py-8 overflow-hidden'>
        <div className='relative'>
          <img src={register} alt='Register' />
          <img src={purplelens} alt='Purple Lens Flare' className='absolute -top-32 -left-32 opacity-50' />
        </div>
        <div className='flex flex-col gap-y-4 px-8 py-8 bg-black/50 gap-4 border border-gray-500 rounded-lg'>
          <h1 className='font-clash text-span text-xl font-bold'>Register</h1>
          <div className='flex items-start'>
            <p className='text-sm text-white'>be part of this movement...</p>
            <img src={smallman} alt='Small Man' />
            <img src={smallwoman} alt='Small Woman' />
          </div>
          <h1 className='font-semibold font-montserrat text-white text-xl'>CREATE YOUR ACCOUNT</h1>
          <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-start justify-center gap-4'>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col md:flex-row items-center justify-start md:justify-between gap-y-8 md:gap-x-4'>
                <div>
                  <label htmlFor='teamName' className='text-white font-montserrat text-sm font-semibold block'>
                    Team Name
                  </label>
                  <input
                    type='text'
                    placeholder='Enter the name of your team'
                    id='teamName'
                    name='teamName'
                    required
                    value={formData.teamName}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
                <div>
                  <label htmlFor='phoneNumber' className='text-white font-montserrat text-sm font-semibold block'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    placeholder='Enter your phone number'
                    id='phoneNumber'
                    name='phone'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start md:justify-between gap-y-8 md:gap-x-4'>
                <div>
                  <label htmlFor='email' className='text-white font-montserrat text-sm font-semibold block'>
                    Email
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
                <div>
                  <label htmlFor='projectTopic' className='text-white font-montserrat text-sm font-semibold block'>
                    Project Topic
                  </label>
                  <input
                    type='text'
                    placeholder='What is your group project topic?'
                    id='projectTopic'
                    name='topic'
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start md:justify-between gap-y-8 md:gap-x-4'>
                <div>
                  <label htmlFor='category' className='text-white font-montserrat text-sm font-semibold block'>
                    Category
                  </label>
                  <input
                    type='number'
                    placeholder="What's your category?"
                    id='category'
                    name='category'
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
                <div>
                  <label htmlFor='groupSize' className='text-white font-montserrat text-sm font-semibold block'>
                    Group Size
                  </label>
                  <input
                    type='number'
                    placeholder='What is the group size?'
                    id='groupSize'
                    name='groupSize'
                    required
                    value={formData.groupSize}
                    onChange={handleChange}
                    className='px-4 py-2 bg-black/50 border border-gray-500 text-white placeholder:text-xs'
                  />
                </div>
              </div>
            </div>
            <p className='text-span font-montserrat italic text-xs'>Please review your registration details before submitting</p>
            <div>
              <input
                type='checkbox'
                id='agree'
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor='agree' className='text-xs font-semibold text-white font-montserrat'>
                I agree with the event terms and conditions and privacy policy
              </label>
            </div>
            <button
              type='submit'
              className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'
              onClick={handleReg}
              disabled={!canSave}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Register;
