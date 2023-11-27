
import Contact from "../../pages/Contact/Contact.jsx";
import ProductCard from "../../pages/Service/ProductCard.jsx";
import Banner from "./Banner.jsx";
import FAQ from "./FAQ.jsx";
import ReviewCard from "./Testimonials.jsx";









const HomePage = () => {
   
    
    return (
        <div>
             <Banner></Banner> 
             <div className="my-10 max-w-7xl mx-auto">
             <ProductCard></ProductCard>
             </div>
             <ReviewCard></ReviewCard>
             <div className="my-10 max-w-5xl mx-auto">
            <FAQ></FAQ>
          

             </div>
             <Contact></Contact>

            
             
            

             
             
            
             
           
           



            
            
        </div>
    );
};

export default HomePage;