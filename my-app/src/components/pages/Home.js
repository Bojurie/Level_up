import Carousel from '../Carousel'
import { carouselData } from '../CarouselData';
import FeatureContent from '../FeatureContent';
import '../Nav.css'
import './Home.css'


const Home = () => {
  

    return (
      <section>
        <div className='home'> 
            <Carousel carousels={carouselData}/>
        </div>
        <div>
          <FeatureContent />
        </div>  
    </section>
  )
  
}
export default Home;