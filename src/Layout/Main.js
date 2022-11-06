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
                <Rowparagraph title={"DS WORLD"}>
                <div class="card1">
                <p>   D’s world Companionship is a non medical private care for the elderly.<br/>
               At D'S WORLD, Our main aim is to improve  the quality  <br/> of life for our clients
                by offering a wide variety <br/>of compassionate quality Home  Services <br/>and care programs 
to our clients <br/> in the confort of their Homes.</p>
<p>
<i>These Services Include;</i>
<ul>

<li>Serving as a companion to Client</li>
<li>Meal preparation </li>
<li>Light housekeeping</li>
<li>Medication reminder</li>
<li>Assisting with transfer & mobility</li>
<li>Assisting our clients through & from appointments</li>
<li>Maintaining a safe & comfortable home environment</li>

</ul>
</p>
</div>
</Rowparagraph>
<Row>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={<i className="fa fa-thin fa-check fa-fade animate"></i>} wordtitle={"Quality Services"} button={"Contact us now"}>
           
           Every home needs reliable home <br/>  
            care service. Let D's  World<br/> 
             handle all  your  home<br/>
             care services
            </Parallaxword>
            </Parallaxcard>
            <Parallaxcard height={"400px"} width={"340px"} background={"rgb(51, 54, 69)"}>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>} titlecolor={"white"} contentcolor={"white"} wordtitle={"Always Available"} button={"Contact us now"}>
            Call D's World today. Count<br/>
          
             on Ds World to be the<br/>  best,
            with guaranteed <br/> home care services
            </Parallaxword>
                </Parallaxcard>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword  icon={ <i className="fa fa-diamond fa-spin"></i>} wordtitle={"Certified"} button={"Contact us now"}>
            Fully certified by the <br/>....................<br/>
            </Parallaxword>
                </Parallaxcard>

            </Row>
            </Parallaxrow >
          
        </div>
    )
}