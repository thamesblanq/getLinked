import { TypeAnimation } from "react-type-animation"

const AnimatedText = () => {
  return (
    <>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Igniting a Revolution in HR Innovation',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Igniting a Revolution in',
                1000,
                'Igniting a Revolution in HR....',
                1000,
                'Igniting a Revolution in HR Innovation',
                1000
            ]}
            wrapper="span"
            speed={75}
            className="absolute top-4 max-md:top-8 text-white italic font-bold text-xl px-4 max-sm:w-[80vw] md:text-2xl lg:text-4xl"
            repeat={Infinity}
        />
    </>
  )
}

export default AnimatedText