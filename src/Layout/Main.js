import styles from "./layout.module.css"
import Slider from "./Maincontentcomponents/Slider.js"
import Row from "./Maincontentcomponents/Row"
// import Rowcard from "./Maincontentcomponents/Rowcard"
// import Word from "./Maincontentcomponents/word"
import Rowparagraph from "./Maincontentcomponents/Rowparagraph"
import Parallaxrow from "./Maincontentcomponents/Parallaxrow"
import Parallaxcard from "./Maincontentcomponents/Parallaxcard"
import Parallaxword from "./Maincontentcomponents/Parallaxword"
import 'font-awesome/css/font-awesome.min.css';
export default function Main(){

    return(
        <div className={styles.main}>   
            <Slider/>
            <Row>
            {/* <Rowcard height={"100px"} width={"300px"}><Word wordtitle={"CELL:"}  wordcontent={"0247493689"}/></Rowcard>
            <Rowcard height={"100px"} width={"300px"}><Word wordtitle={"CELL:"}  wordcontent={"0245959600"}/></Rowcard>
            <Rowcard height={"100px"} width={"300px"}><Word wordtitle={"MAIL:"}  wordcontent={"0245959600"}/></Rowcard> */}
            </Row>

            <Parallaxrow >
                <Rowparagraph title={"ELITEFAM COMPANY LIMITED"}>


   Ellitefam Company is a certified electrical company located in Somanya, Ghana. Elitefam Company provides<br/> 
   electrical services for homes, offices and industries with professional electrical engineers who are <br/>
   experts in factory setup and installations,  sachet water installations, factory maintenance, <br/>
   generator maintenance,gas & diesel boiler maintenance, streetlight installations, <br/>
   electrical wiring installations, electrical design, Home automations<br/>
    and all other forms of electrical services.
</Rowparagraph>
<Row>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={<i className="fa fa-thin fa-check fa-fade animate"></i>} wordtitle={"Quality Services"} button={"Contact us now"}>
            Every industry, office,<br/> 
            and  home needs reliable electric <br/> 
            services. Let Elitfam handle your <br/>
            electrical problems
            </Parallaxword>
            </Parallaxcard>
            <Parallaxcard height={"400px"} width={"340px"} background={"rgb(51, 54, 69)"}>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>} titlecolor={"white"} contentcolor={"white"} wordtitle={"Always Available"} button={"Contact us now"}>
            Call Elitfam today,<br/>
            for all your electrical services<br/>
            Count on Elitfam company ltd <br/>to be the best,
            with guaranteed <br/> electrical resolutions
            </Parallaxword>
                </Parallaxcard>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={ <i className="fa fa-diamond fa-spin"></i>} wordtitle={"Certified"} button={"Contact us now"}>
            Fully certified by the <br/>Energy commission of ghana<br/>
            </Parallaxword>
                </Parallaxcard>

            </Row>
            </Parallaxrow >
          
        </div>
    )
}