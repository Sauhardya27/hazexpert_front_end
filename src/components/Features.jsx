import { features } from '../constants';
import styles, { layout } from '../style';

const FeatureCard = ({ icon, title, content, index }) => (
	<div className='flex flex-row space-x-10'>
		<div className='flex flex-col w-full'>
			<h1 className='font-poppins font-semibold text-white text-3xl leading-[23px]'>{title}</h1>
			<div style={{ right: index % 2 === 0 ? '400px' : 'unset', left: index % 2 === 0 ? 'unset' : '300px' }} className="bg-gradient-to-r from-purpleG to to-whiteG w-[680px] h-[260px] p-[2px] rounded-lg my-20 relative ">
				<div className="bg-black max-w-[50rem] w-[100%] h-[100%] rounded-lg flex flex-1 flex-col justify-center items-center">
					<p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 text-justify px-4'>{content}</p>
				</div>
			</div>
		</div>
		<img style={{ right: index % 2 === 0 ? '400px' : '1200px'}} src={icon} className='h-[25%] w-[25%] object-contain relative top-20' alt="icon"/>
	</div>

)

const Features = () => (
	<section>
		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Features