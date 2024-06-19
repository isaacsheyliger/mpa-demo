import { Hero } from '@/app/_components/hero';
import lawncare2 from '../../../../public/lawn-care-2.jpg';

const detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus. Posuere morbi leo urna molestie. Amet consectetur adipiscing elit duis tristique sollicitudin. Porttitor eget dolor morbi non arcu risus quis varius. Pellentesque id nibh tortor id aliquet lectus proin nibh. Sollicitudin ac orci phasellus egestas tellus rutrum. Ac placerat vestibulum lectus mauris ultrices eros. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. In hendrerit gravida rutrum quisque non."

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
            <div className='mb-8'>
                <Hero img={[lawncare2]} />
            </div>
            <div className='flex flex-col m-auto items-center'>
                <h1 className='text-4xl font-bold'>Lawn Care</h1>
                <p className='max-w-[70%] my-8'>{detail}</p>
            </div>
        </main>
    )
}