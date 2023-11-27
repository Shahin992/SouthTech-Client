
import Contact from "../../pages/Contact/Contact.jsx/index.js";
import ProductCard from "../../pages/Service/ProductCard.local";
import SignUp from "../../pages/SignUp/SignUp.local";
import Banner from "./Banner.local";
import FAQ from "./FAQ.local";
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