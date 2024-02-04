import { steps } from '../constants';
import styles, { layout } from '../style';

const FeatureCard = ({ icon, number, next, title, content, index }) => (
  <div className='flex'>
    <img src={number} alt="number" className='relative bottom-36' />
    <div className="bg-gradient-to-r from-purpleG to to-whiteG w-[300px] h-[300px] p-[2px] rounded-lg">
      <div className="bg-black w-[100%] h-[100%] rounded-lg flex flex-1 flex-col justify-center items-center">
        <img src={icon} className='h-[17%] w-[17%] object-contain' alt="icon" />
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-5'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 text-justify px-4'>{content}</p>
      </div>
      {index < 2 && (
        <img src={next} alt="" className='relative left-[18.5rem] bottom-52'/>
      )}
    </div>
  </div>
)

const Step = () => (
  <section className={`${layout.section} relative right-10`}>
    <div className={`${layout.sectionImg} flex-col sm:flex-row sm:space-x-14`}>
      {steps.map((step, index) => (
        <FeatureCard key={step.id} {...step} index={index} />
      ))}
    </div>
  </section>
);

export default Step